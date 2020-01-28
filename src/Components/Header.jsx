import React, { Component } from "react";
import HeaderLoopVideo from "../vid/header-loop.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
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
                <div
                  className="display-4"
                  // onClick={this.togglePlay}
                >
                  <FontAwesomeIcon icon={faVolumeOff} />
                </div>
                <h1 className="display-3">Hautain Wine</h1>
                <p className="lead mb-0">
                  Epic | Ethic | Exceptional | Estraordinary | Exclusive
                </p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
