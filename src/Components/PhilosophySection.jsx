import React from "react";
import philosophyImg from "../img/philosophy.jpg";
import BannarText from "./BannarText";

export default function PhilosophySection(props) {
  const { heading, paragraph1, paragraph2, bannarText } = props.section;
  return (
    <div id="philosophy">
      <div
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + philosophyImg + ")" }}
      >
        <h2 className="text-white">{heading}</h2>
      </div>
      <section className="container py-3" id="philosophy">
        <div className="row">
          <div className="col-12 col-sm-4 m-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tacuin_Automne03.jpg/800px-Tacuin_Automne03.jpg"
              alt="Hautain"
              style={{ width: "100%" }}
              className="img-thumbnail rounded"
            />
          </div>
          <div className="col-12 col-sm-8 m-auto">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      </section>
      <BannarText text={bannarText} />
    </div>
  );
}
