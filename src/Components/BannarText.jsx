import React from "react";

export default function BannarText(props) {
  return (
    <div className="handwritten p-3 my-3 bg-white rounded text-center">
      {props.text}
    </div>
  );
}
