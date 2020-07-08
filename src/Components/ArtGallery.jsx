import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import { api_loadActiveArt } from "../APIs";

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

  return (
    <div className="container-fluid vh-100">
      {images && <Gallery images={images} />}
    </div>
  );
}
