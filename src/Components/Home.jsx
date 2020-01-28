import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Products from "./Products";
import Footer from "./Footer";
import TextSection from "./TextSection";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountToCharge: 0,
      products:[]
    };
  }

  addProductToCart = productID => {
    const products = this.state.products;
    const product = products.find(product => product._id === productID);
    product.qty++;
    product.inventory--;
    this.updateTotal();
    this.setState({ products });
  };
  increaseQty = productID => {
    const products = this.state.products;
    const product = products.find(product => product._id === productID);
    product.qty++;
    product.inventory--;
    this.updateTotal();
    this.setState({ products });
  };
  decreaseQty = productID => {
    const products = this.state.products;
    const product = products.find(product => product._id === productID);
    product.qty--;
    product.inventory++;
    this.updateTotal();
    this.setState({ products });
  };
  updateTotal = () => {
    const value = this.state.products.reduce(
      (acc, product) => (acc = acc + product.price * product.qty),
      0
    );
    this.setState({ amountToCharge: value });
  };

  render() {
    let { products, amountToCharge, lang } = this.state;
    return (
      <div>
        <Header />
        <Navigation />
        <Products
          products={products}
          addProductToCart={this.addProductToCart}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          amountToCharge={amountToCharge}
        />
        <TextSection lang={lang} />
        <Footer />
      </div>
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/products");
    const products = await response.json();
    this.setState({ products });
  };
}
