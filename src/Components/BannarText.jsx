import React from "react";

export default function BannarText(props) {
  return (
    <div className="handwritten shadow-lg p-3 my-3 bg-white rounded text-center display-4">
      {props.text}
    </div>
  );
}
