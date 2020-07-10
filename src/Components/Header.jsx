import HeaderLoopVideo from "../vid/header-loop.mp4";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

export default function Header() {
  return (
    <header>
      <div className="overlay"></div>
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={HeaderLoopVideo} type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            {/* <div
              className="display-4"
              // onClick={this.togglePlay}
            >
              <FontAwesomeIcon icon={faVolumeOff} />
            </div> */}
            <h1 className="display-3">Wines N' Colors</h1>
            <p className="lead mb-0">
              Epic | Ethic | Exceptional | Estraordinary | Exclusive
            </p>
            <div className="my-4">
              <Link to="/en">
                <Button
                  style={{
                    minWidth: "80px",
                    maxWidth: "400px",
                    width: "200px",
                  }}
                  className="mx-2 mb-4"
                  size="lg"
                  variant="outline-primary"
                >
                  English
                </Button>
              </Link>
              <Link to="/de">
                <Button
                  style={{
                    minWidth: "80px",
                    maxWidth: "400px",
                    width: "200px",
                  }}
                  className="mx-2 mb-4"
                  size="lg"
                  variant="outline-primary"
                >
                  Deutsch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
