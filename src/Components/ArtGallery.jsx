import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import { api_loadActiveArt } from "../APIs";
import BannarText from "./BannarText";

export default function ArtGallery() {
  const [images, setImages] = useState();
  useEffect(() => {
    const apiCall = async () => {
      let response = await api_loadActiveArt();
      response = await response.json();
      setImages(response);
    };
    apiCall();
  }, []);

  const onSelectImage = (index, image) => {
    const images2 = images.slice();
    const img = images2[index];
    if (img.hasOwnProperty("isSelected")) {
      img.isSelected = !img.isSelected;
    } else {
      img.isSelected = true;
      console.log(img._id);
    }
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
}
