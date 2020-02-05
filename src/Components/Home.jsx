import React from "react";
import Navigation from "./Navigation";
import Products from "./Products";
import PhilosophySection from "./PhilosophySection";
import SociologySection from "./SociologySection";
import Footer from "./Footer";
import Helmet from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BannarText from "./BannarText";
import AboutMe from "./AboutMe";

export default function Home(props) {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: props.lang }} />
      <Navigation />
      <BannarText text="Be smart, just drink the best and fuck the rest!" />
      <Products />
      <PhilosophySection section={props.content.philosophySection} />
      <SociologySection section={props.content.sociologySection} />
      <AboutMe section={props.content.aboutMe} />

      <Footer />
    </div>
  );
}
