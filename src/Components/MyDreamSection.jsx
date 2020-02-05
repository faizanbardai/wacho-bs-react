import React from "react";
import myDreamImg from "../img/myDreamImg.jpg";
import Parallax from "./Parallax";

export default function MyDreamSection(props) {
  const {
    heading,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4
  } = props.section;
  return (
    <div id="my-dream">
      <Parallax img={myDreamImg} heading={heading} />
      <section className="container py-3">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
      </section>
    </div>
  );
}
