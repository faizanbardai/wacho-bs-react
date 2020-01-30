import React, { Component } from "react";
import Navigation from "./Navigation";
import Products from "./Products";
import Footer from "./Footer";
import PhilosophySection from "./PhilosophySection";
import Helmet from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SociologySection from "./SociologySection";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingProducts: true,
      amountToCharge: 0,
      products: []
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
    let { products, amountToCharge, loadingProducts } = this.state;
    return (
      <div>
        <Helmet htmlAttributes={{ lang: this.props.lang }} />
        <Navigation />
        {loadingProducts ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <Products
            products={products}
            addProductToCart={this.addProductToCart}
            increaseQty={this.increaseQty}
            decreaseQty={this.decreaseQty}
            amountToCharge={amountToCharge}
          />
        )}
        <PhilosophySection section={this.props.content.philosophySection} />
        <SociologySection section={this.props.content.sociologySection} />
        <Footer />
      </div>
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseProducts = await fetch(baseURL + "/products");
    const products = await responseProducts.json();
    this.setState({ products });
    this.setState({ loadingProducts: false });
  };
}
