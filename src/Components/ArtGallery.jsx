import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Gallery from "react-grid-gallery";
import BannarText from "./BannarText";
import { addArtToCart, removeArtFromCart } from "../actions";

const mapStateToProps = (state) => {
  return { arts: state.products.arts };
};

const mapDispatchToProps = (dispatch) => ({
  addArtToCart: (art) => dispatch(addArtToCart(art)),
  removeArtFromCart: (art) => dispatch(removeArtFromCart(art)),
});

const ArtGallery = (props) => {
  const [images, setImages] = useState();
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

  return (
    <div id="art">
      {images && (
        <>
          <div className="vh-100">
            <BannarText text="... & color your mind!" />
            <div className="container">
              <Gallery images={images} onSelectImage={onSelectImage} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtGallery);
