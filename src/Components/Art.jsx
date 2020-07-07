import React from "react";
import Gallery from "react-grid-gallery";
import appearedFromAHoleL from "../img/art/artist/luigiProfeta/Appeared from a hole - 100 x 100 cm - 2018 - mixed on canvas_L.jpg";
import appearedFromAHoleT from "../img/art/artist/luigiProfeta/Appeared from a hole - 100 x 100 cm - 2018 - mixed on canvas_T.jpg";

const IMAGES = [
  {
    src: appearedFromAHoleL,
    thumbnail: appearedFromAHoleT,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "Appeared from a hole - 100 x 100 cm - 2018 - mixed on canvas",
    tags: [{ value: "Luigi Profeta", title: "artist" }],
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

export default function Art() {
  return (
    <div className="container-fluid vh-100">
      <Gallery images={IMAGES} />
    </div>
  );
}
