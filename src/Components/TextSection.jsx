import React from "react";
import parallax1 from "../img/parallax1.jpg";

export default function TextSection() {
  return (
    <div id="philosophy">
      <div
        
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + parallax1 + ")" }}
      >
        <h2 className="text-white">PHILOSOPHY</h2>
      </div>
      <section className="container py-3">
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
              United colors of wines is a concept project with a focus on some
              of the smaller names of the wine industry, working hard to find
              the more interesting bottles being produced by boutique,
              ecological and start-up winemakers from Eastern and Western
              Europe. Here you'll find wines that are made ecologically and
              biodynamically, as well the famed 'orange wine,' a revival of an
              old form of winemaking that’s attracting growing interest at home
              and abroad. For this the grapes are kept macerating much longer
              than usual, giving the resulting liquid its distinctive colour and
              complex taste. If you’d like to know more, stop by United colors
              of wines and pick up a bottle or two.
            </p>
            <p>
              We consider nowadays wines as monetary compromise with philosophy
              and sense of wine. And follow to concept that wine and wine
              drinking is real connection with God and Galaxy throw vineyard,
              environment, planet and human beings. We with you find eco- and
              biodynamic (by Rudolf Steiner and his teacher Helena Blavatsky,
              lived in Tbilisi), wine from mountains and trees (named Hautain),
              qvevri (amphore) wines, wines from grapes dived into the sea,
              ancient and old technology made wines and a lot of others.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
