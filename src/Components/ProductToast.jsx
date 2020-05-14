import React from "react";
import { Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { hideProductToast } from "../actions";

const mapStateToProps = (state) => {
  return {
    showProductToast: state.products.showProductToast,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hideProductToast: () => dispatch(hideProductToast()),
});

function ProductToast({ propsForToast, showProductToast, hideProductToast }) {
  const { image, message, title, qty } = propsForToast;

  return (
    <Toast
      show={showProductToast}
      onClose={() => hideProductToast()}
      delay={2000}
      autohide
      aria-live="polite"
      aria-atomic="true"
      style={{
        zIndex: showProductToast ? 1 : 0,
        position: "fixed",
        bottom: "10px",
        left: "10px",
        minHeight: "100px",
        minWidth: "300px",
      }}
    >
      <Toast.Header>
        <img
          src={image}
          style={{ width: "30px" }}
          className="rounded mr-2"
          alt=""
        />
        <strong className="mr-auto">{title}</strong>
        <small>Quantity: {qty}</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductToast);
