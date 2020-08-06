import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalButton } from "react-paypal-button-v2";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { loadProducts } from "../actions";
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
});

const CheckoutPage = (props) => {
  const history = useHistory();

  return (
    <div className="vh-100 vw-100 fixed-top bg-light">
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="my-2">
            <button
              onClick={() => {
                props.setDisplay(false);
              }}
              type="button"
              className="btn btn-outline-danger rounded-circle"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {props.artPrice > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.art.map((art, index) => (
                    <tr key={art._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{art.caption}</td>
                      <td>{art.tags[0].value}</td>
                      <td>
                        {Intl.NumberFormat("de-De", {
                          style: "currency",
                          currency: "EUR",
                        }).format(art.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {props.winePrice > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Qty x Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.wines
                    .filter((x) => x.qty > 0)
                    .map((wine, index) => (
                      <tr key={wine._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{wine.title}</td>
                        <td>
                          {wine.qty} x{" "}
                          {Intl.NumberFormat("de-De", {
                            style: "currency",
                            currency: "EUR",
                          }).format(wine.price)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="border border-primary rounded-pill text-center mb-2">
              <h5 className="my-2">
                Total:{" "}
                {Intl.NumberFormat("de-De", {
                  style: "currency",
                  currency: "EUR",
                }).format(props.totalPrice)}
              </h5>
            </div>
            <PayPalButton
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "EUR",
                        value: (
                          props.totalPrice +
                          (props.winePrice > 0 ? props.shippingCost : 0)
                        ).toFixed(2),
                        breakdown: {
                          item_total: {
                            currency_code: "EUR",
                            value: props.totalPrice.toFixed(2),
                          },
                          shipping: {
                            currency_code: "EUR",
                            value: props.winePrice > 0 ? props.shippingCost : 0,
                          },
                        },
                      },
                      items: [].concat(props.artInCart, props.winesInCart),
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(async function (details) {
                  // Show a success message to your buyer
                  alert(
                    "Transaction completed by " +
                      details.payer.name.given_name +
                      ". The items will be delivered in 3-5 working days. Please contact us at +49-1766-9521145 for any further information. " +
                      "Your transaction ID is: " +
                      details.purchase_units[0].payments.captures[0].id +
                      "."
                  );

                  // OPTIONAL: Call your server to save the transaction
                  const baseURL = process.env.REACT_APP_BASE_URL;
                  await fetch(baseURL + "/purchases", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      orderID: data.orderID,
                      totalAmount: props.totalPrice,
                      products: [].concat(props.artInCart, props.winesInCart),
                    }),
                  });
                  // refresh the page
                  history.go();
                  // setDisplay to false
                  // props.setDisplay(false);

                  // Empty the cart
                  // props.setArtInCart([]);
                  // props.setWinesInCart([]);

                  // reload art and wines
                  // props.loadProducts();
                  // props.setTotalPrice(0);
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutPage);
