import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckoutNav from "./CheckoutNav";
import CheckoutPage from "./CheckoutPage";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wines: state.products.productsFromServer,
    winePrice: state.products.amountToCharge,
  };
};

const Checkout2 = (props) => {
  const [display, setDisplay] = useState(false);
  const [artPrice, setartPrice] = useState(0);
  const [artInCart, setArtInCart] = useState([]);
  const [winesInCart, setWinesInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const shippingCost = 5.9;
  // Setting total art price on art selection
  useEffect(() => {
    if (props.cart.art.length > 0) {
      setartPrice(
        props.cart.art
          .map((x) => x.price)
          .reduce((acc, cV) => {
            return acc + cV;
          })
      );
    } else setartPrice(0);
  }, [props.cart.art]);
  // Adding art paypal object to cart
  useEffect(() => {
    if (props.cart.art.length > 0) {
      setArtInCart(
        props.cart.art.map((art) => {
          return {
            name: art.caption,
            sku: "art-" + art._id,
            description: art.tags[0].value,
            unit_amount: {
              value: art.price,
              currency_code: "EUR",
            },
            quantity: 1,
          };
        })
      );
    }
  }, [props.cart.art]);
  // Adding wine paypal object to cart
  useEffect(() => {
    if (props.winePrice > 0) {
      setWinesInCart(
        props.wines
          .filter((x) => x.qty > 0)
          .map((wine) => {
            return {
              name: wine.title,
              description: "https://www.winesandcolors.de/",
              sku: "wine-" + wine._id,
              unit_amount: {
                value: wine.price,
                currency_code: "EUR",
              },
              quantity: wine.qty,
            };
          })
      );
    }
  }, [props.winePrice, props.wines]);
  // Total price for wine and art
  useEffect(() => {
    setTotalPrice(artPrice + props.winePrice);
  }, [artPrice, props.winePrice]);

  return (
    <>
      {!display && totalPrice > 0 && (
        <CheckoutNav setDisplay={setDisplay} totalPrice={totalPrice} />
      )}
      {display && (artPrice > 0 || props.winePrice > 0) && (
        <CheckoutPage
          setDisplay={setDisplay}
          artPrice={artPrice}
          art={props.cart.art}
          winePrice={props.winePrice}
          wines={props.wines}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          artInCart={artInCart}
          setArtInCart={setArtInCart}
          winesInCart={winesInCart}
          setWinesInCart={setWinesInCart}
          shippingCost={shippingCost}
        />
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(Checkout2);
