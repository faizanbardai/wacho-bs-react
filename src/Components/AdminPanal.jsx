import React, { useState } from "react";
import WineAdminPanal from "./WineAdminPanal";
import ArtAdminPanal from "./ArtAdminPanal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanal(props) {
  const [product, setproduct] = useState(null);
  return (
    <div>
      {product === null && (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => {
              setproduct("wine");
            }}
          >
            Wine
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => {
              setproduct("art");
            }}
          >
            Art
          </button>
          <button
            type="button"
            className="mx-2 btn btn-outline-danger rounded-circle"
            onClick={props.logout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      )}
      {product === "wine" && <WineAdminPanal goBack={() => setproduct(null)} />}
      {product === "art" && <ArtAdminPanal goBack={() => setproduct(null)} />}
    </div>
  );
}
