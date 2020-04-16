import React from "react";
import uncorkingSoon from "../img/Uncorking soon.jpeg";
import { Image } from "react-bootstrap";

export default function ComingSoon() {
  return (
    <div id="wines" className="container row mx-auto">
      <Image
        className="col-12 col-md-4"
        // style={{ height: "300px" }}
        src={uncorkingSoon}
        rounded
      />
      <h1 className="col-12 col-md-8 display-4 text-center">Uncorking Soon!</h1>
    </div>
  );
}
