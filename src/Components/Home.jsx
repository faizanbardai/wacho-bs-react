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
    let { products, amountToCharge } = this.state;
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
        {this.state.en && (
          <TextSection section={this.state.en.philosophySection} />
        )}
        <Footer />
      </div>
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/products");
    const products = await response.json();
    this.setState({ products });
    this.setState({
      en: {
        philosophySection: {
          heading: "Philosophy",
          paragraph1:
            "Wines and Colors is a concept project with a focus on some of the smaller names of the wine industry, working hard to find the more interesting bottles being produced by boutique, ecological and start-up winemakers from Eastern and Western Europe. Here you'll find wines that are made ecologically and biodynamically, as well the famed 'orange wine,' a revival of an old form of winemaking that’s attracting growing interest at home and abroad. For this the grapes are kept macerating much longer than usual, giving the resulting liquid its distinctive colour and complex taste. If you’d like to know more, stop by Wines and Colors and pick up a bottle or two.",
          paragraph2:
            "We consider nowadays wines as monetary compromise with philosophy and sense of wine. And follow to concept that wine and wine drinking is real connection with God and Galaxy throw vineyard, environment, planet and human beings. We with you find eco- and biodynamic (by Rudolf Steiner and his teacher Helena Blavatsky, lived in Tbilisi), wine from mountains and trees (technology named Hautain), qvevri (clay pots, amphores) wines, wines from grapes dived into the sea, ancient and old technology made wines and a lot of others."
        }
      }
    });
  };
}
