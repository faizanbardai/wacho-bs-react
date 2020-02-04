import React from "react";
import sociologyImg from "../img/sociology.jpg";

export default function SociologySection(props) {
  const {
    heading,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5
  } = props.section;
  return (
    <div id="sociology">
      <div
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + sociologyImg + ")" }}
      >
        <h2 className="text-white">{heading}</h2>
      </div>
      <section className="container py-3" id="sociology">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
      </section>
    </div>
  );
}
