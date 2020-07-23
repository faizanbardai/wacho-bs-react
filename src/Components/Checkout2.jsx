import React, { useState } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkout2() {
  const [display, setDisplay] = useState(false);
  return display ? (
    <div className="vh-100 vw-100 fixed-top bg-light">
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="my-2">
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={() => {
                setDisplay(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <nav
      class="navbar fixed-bottom bg-dark"
      onClick={() => {
        setDisplay(true);
      }}
    >
      Checkout
    </nav>
  );
}
