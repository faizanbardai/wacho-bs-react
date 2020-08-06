import React from "react";

export default function CheckoutNav(props) {
  return (
    <nav className="navbar fixed-bottom bg-light">
      <button
        onClick={() => {
          props.setDisplay(true);
        }}
        type="button"
        className="btn btn-outline-primary btn-block"
      >
        Checkout{" "}
        {Intl.NumberFormat("de-De", {
          style: "currency",
          currency: "EUR",
        }).format(props.totalPrice)}
      </button>
    </nav>
  );
}
