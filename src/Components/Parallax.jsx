import React from "react";

export default function Parallax({ img, heading }) {
  return (
    <div
      // className="vh-100 d-flex parallax justify-content-center align-items-center"
      className="vh-100 d-flex parallax justify-content-center align-items-center"
      style={{ backgroundImage: "url(" + img + ")" }}
    >
      <h2 className="bg-dark text-white rounded-pill py-2 px-4">{heading}</h2>
    </div>
  );
}
