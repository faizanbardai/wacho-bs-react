import React from "react";
import sociologyImg from "../img/sociology.jpg";
import Parallax from "./Parallax";

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
      <Parallax img={sociologyImg} heading={heading} />
      <section className="container py-3">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
      </section>
    </div>
  );
}
