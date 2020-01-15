import React from "react";
import parallax1 from "../img/parallax1.jpg";

export default function TextSection(props) {
  return (
    <div>
      <div
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + parallax1 + ")" }}
      >
        <h2 className="text-white">PHILOSOPHY</h2>
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
            {props.lang === "en" ? (
              <>
                <p>
                  Wines and Colors is a concept project with a focus on some of
                  the smaller names of the wine industry, working hard to find
                  the more interesting bottles being produced by boutique,
                  ecological and start-up winemakers from Eastern and Western
                  Europe. Here you'll find wines that are made ecologically and
                  biodynamically, as well the famed 'orange wine,' a revival of
                  an old form of winemaking that’s attracting growing interest
                  at home and abroad. For this the grapes are kept macerating
                  much longer than usual, giving the resulting liquid its
                  distinctive colour and complex taste. If you’d like to know
                  more, stop by Wines and Colors and pick up a bottle or two.
                </p>
                <p>
                  We consider nowadays wines as monetary compromise with
                  philosophy and sense of wine. And follow to concept that wine
                  and wine drinking is real connection with God and Galaxy throw
                  vineyard, environment, planet and human beings. We with you
                  find eco- and biodynamic (by Rudolf Steiner and his teacher
                  Helena Blavatsky, lived in Tbilisi), wine from mountains and
                  trees (technology named Hautain), qvevri (clay pots, amphores)
                  wines, wines from grapes dived into the sea, ancient and old
                  technology made wines and a lot of others.
                </p>
              </>
            ) : (
              <>
                <p>
                  Wines and Colors ist ein Konzeptprojekt, das sich auf einige
                  der kleineren Namen der Weinindustrie konzentriert und sich
                  intensiv darum bemüht, die interessanteren Flaschen zu finden,
                  die von Boutique-, Öko- und Start-up-Winzern aus Ost- und
                  Westeuropa hergestellt werden. Hier finden Sie Weine, die
                  ökologisch und biodynamisch hergestellt werden, sowie den
                  berühmten "Orangenwein", eine Wiederbelebung einer alten Form
                  der Weinherstellung, die im In- und Ausland auf wachsendes
                  Interesse stößt. Dazu werden die Trauben viel länger als
                  gewöhnlich mazeriert, wodurch die resultierende Flüssigkeit
                  ihre unverwechselbare Farbe und ihren komplexen Geschmack
                  erhält. Wenn Sie mehr wissen möchten, schauen Sie bei Wines
                  and Colors vorbei und holen Sie sich ein oder zwei Flaschen.
                </p>
                <p>
                  Wir betrachten Weine heutzutage als monetären Kompromiss mit
                  Philosophie und Sinn für Wein. Und folgen Sie dem Konzept,
                  dass Wein und Weintrinken eine echte Verbindung zwischen Gott
                  und Galaxis, Weinberg, Umwelt, Planeten und Menschen sind. Wir
                  bei Ihnen finden Öko- und Biodynamik (von Rudolf Steiner und
                  seiner in Tiflis lebenden Lehrerin Helena Blavatsky), Wein aus
                  Bergen und Bäumen (Technologie namens Hautain), Qvevri-Weine
                  (Tontöpfe, Amphoren), Weine aus ins Meer getauchten Trauben ,
                  alte und alte Technologie machte Weine und viele andere.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
