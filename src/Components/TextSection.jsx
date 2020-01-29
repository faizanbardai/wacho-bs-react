import React from "react";
import parallax1 from "../img/parallax1.jpg";

export default function TextSection(props) {
  return (
    <div>
      <div
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + parallax1 + ")" }}
      >
        <h2 className="text-white">{props.section.heading}</h2>
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
                <p>
                  {props.section.paragraph1}
                </p>
                <p>
                  {props.section.paragraph2}                  
                </p>
          </div>
        </div>
      </section>
    </div>
  );
}
