import React from "react";
import NewOrUpdateArt from "./NewOrUpdateArt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

export default function ArtAdminPanal(props) {
  return (
    <Container fluid className="my-2">
      <div className="mb-2 d-flex justify-content-between">
        <NewOrUpdateArt />
        <button
          type="button"
          className="mx-2 btn btn-outline-danger rounded-circle"
          onClick={() => props.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </Container>
  );
}
