import React, { useEffect } from "react";
import { api_loadAllArt } from "../APIs";
import NewOrUpdateArt from "./NewOrUpdateArt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useState } from "react";

export default function ArtAdminPanal(props) {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    api_loadAllArt()
      .then((x) => x.json())
      .then((x) => setGallery(x));
  }, []);
  const addNewArt = (newArt) => {
    setGallery([...gallery, newArt]);
  };
  const updateArt = (art) => {
    const newGallery = gallery.map((x) => {
      return x._id === art._id ? art : x;
    });
    setGallery(newGallery);
  };

  return (
    <Container fluid className="my-2">
      <div className="mb-2 d-flex justify-content-between">
        <NewOrUpdateArt addNewArt={addNewArt} />
        <button
          type="button"
          className="mx-2 btn btn-outline-danger rounded-circle"
          onClick={() => props.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <table className="table table-borderless table-sm ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Artist</th>
            <th scope="col">Title</th>
            <th scope="col">Height</th>
            <th scope="col">Width</th>
            <th scope="col">Price (€)</th>
            <th scope="col">Sold?</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map((art, index) => (
            <tr key={art._id}>
              <th scope="row">{index + 1}</th>
              <td>{art.artist}</td>
              <td>{art.caption}</td>
              <td className="text-right">{art.thumbnailHeight}</td>
              <td className="text-right">{art.thumbnailWidth}</td>
              <td className="text-right">
                {Intl.NumberFormat("de-De", {
                  style: "currency",
                  currency: "EUR",
                }).format(art.price)}
              </td>
              <td>{art.active ? "No" : "Yes"}</td>
              <td>
                <NewOrUpdateArt art={art} updateArt={updateArt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
