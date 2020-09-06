import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Gallery from "react-grid-gallery";
import BannarText from "./BannarText";
import { addArtToCart, removeArtFromCart } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
  return { arts: state.products.arts };
};

const mapDispatchToProps = (dispatch) => ({
  addArtToCart: (art) => dispatch(addArtToCart(art)),
  removeArtFromCart: (art) => dispatch(removeArtFromCart(art)),
});

const ArtGallery = (props) => {
  const [images, setImages] = useState();
  const [image, setImage] = useState({artist: "", price: 0});
  useEffect(() => {
    const apiCall = async () => {
      setImages(props.arts);
    };
    apiCall();
  }, [props.arts]);

  const onSelectImage = (index, image) => {
    const images2 = images.slice();
    const img = images2[index];
    if (img.hasOwnProperty("isSelected")) {
      img.isSelected = !img.isSelected;
    } else {
      img.isSelected = true;
    }
    img.isSelected ? props.addArtToCart(img) : props.removeArtFromCart(img);
    setImages(images2);
  };

  const addToCart = () => {
    props.addArtToCart(image);
  };

  const onCurrentImageChange = (index) => {
    setImage(images[index]);
  }

  return (
    <div id="art">
      {images && (
        <>
          <div className="vh-100">
            <BannarText text="... & color your mind!" />
            <div className="container">
              <Gallery
                images={images}
                enableLightbox={true}
                onSelectImage={onSelectImage}
                enableImageSelection={false}
                currentImageWillChange={onCurrentImageChange}
                customControls={[
                  <div>
                    <button
                      type="button"
                      key="addToCart"
                      className="btn btn-primary rounded-pill"
                      onClick={addToCart}
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> {image.artist} | {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(image.price)}
                    </button>
                  </div>,
                ]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtGallery);
