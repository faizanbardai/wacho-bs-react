import React, { Component } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import wine1 from "./img/p1.jpg";
import wine2 from "./img/p2.jpg";
import wine3 from "./img/p3.jpg";
import wine4 from "./img/p4.jpg";
import wine5 from "./img/p5.jpg";
import Footer from "./Components/Footer";
import TextSection from "./Components/TextSection";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      amountToCharge: 0,
      products: [
        {
          id: "p001",
          price: 1.99,
          qty: 0,
          title: "Rice Pitcher",
          image: wine1,
          variety: "Rkatsiteli",
          color: "Dark brown with golden color",
          aroma: "Meadow flowers",
          taste: "soft",
          alcohol: "13%",
          description:
            '"Rkatsiteli Pitcher" - Made from the ancient Georgian grape variety Rkatsiteli, built on strict sharing of ancestral traditions with whole chacha (clover, grains). After fermentation, we will leave for 4-5 months in our unadulterated pitcher. Dark brown with golden hues. The tones of honey, flowers and roasted walnuts change dynamically, giving it fullness and elegance.'
        },
        {
          id: "p002",
          price: 2.99876,
          qty: 0,
          title: "Green pitcher",
          image: wine2,
          variety: "Green",
          color: "Beige, green",
          aroma: "Ripe fruit and various stems",
          taste: "full and velvety",
          alcohol: "13%",
          description:
            '"Green pitcher" comes from the grape variety "Kakhuri Green" grown in Kakheti. Has a light greenish tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. The aroma and taste of the ripe fruit and the different dried fruits are felt, which blend well with each other when tasting. Is complete and velvety.'
        },
        {
          id: "p003",
          price: 3.99,
          qty: 0,
          title: "Pitcher pitcher",
          image: wine3,
          variety: "Khikhvi",
          color: "Green tint, golden",
          aroma: "Meadow flowers",
          taste: "ripe fruit, velvety",
          alcohol: "13%",
          description:
            '"Khikhvi Qvevri" is made from the ancient Khikhvi grape variety. Has a golden-green tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. It is distinguished by the delicate floral aroma, the aroma of the ripe fruit and the taste, it is delicate and velvety. It has high antioxidant healing properties.'
        },
        {
          id: "p004",
          price: 4.99,
          qty: 0,
          title: "Kiss the pitcher",
          image: wine4,
          variety: "Kiss",
          color: "Dark brown",
          aroma: "gentle fruity and fruity aroma",
          taste: "harmonious, soft",
          alcohol: "13%",
          description:
            '"Kiss Qvevri" is made from the ancient Georgian grape variety Qissi. Grapes selected on the grape are pitched 4-5 with careful patronage. It has a dark brown color.'
        },
        {
          id: "p005",
          price: 5.99,
          qty: 0,
          title: "Saperavi pitcher",
          image: wine5,
          variety: "Saperavi",
          color: "Purple, dark pomegranate",
          aroma: "cherry, blackberry, forest berry, plum",
          taste: "cherries, berries, blackberries",
          alcohol: "13%",
          description:
            '"Saperavi pitcher" is made from the ancient Georgian vine variety Saperavi, cultivated in Kakheti. It is characterized by dark pomegranate, violet color.'
        }
      ]
    };
  }
  addProductToCart = productID => {
    const products = this.state.products;
    const product = products.find(product => product.id === productID);
    product.qty++;
    this.updateTotal();
    this.setState({ products });
  };
  increaseQty = productID => {
    const products = this.state.products;
    const product = products.find(product => product.id === productID);
    product.qty++;
    this.updateTotal();
    this.setState({ products });
  };
  decreaseQty = productID => {
    const products = this.state.products;
    const product = products.find(product => product.id === productID);
    product.qty--;
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
        <TextSection />
        <Footer />
      </div>
    );
  }
}
