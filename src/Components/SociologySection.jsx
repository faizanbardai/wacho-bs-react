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
        {/* <div className="row"> */}
        {/* <div className="col-12 col-sm-4 m-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tacuin_Automne03.jpg/800px-Tacuin_Automne03.jpg"
              alt="Hautain"
              style={{ width: "100%" }}
              className="img-thumbnail rounded"
            />
          </div> */}
        {/* <div className="col-12 col-sm-8 m-auto"> */}
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
        {/* </div> */}
        {/* </div> */}
      </section>
    </div>
  );
}
