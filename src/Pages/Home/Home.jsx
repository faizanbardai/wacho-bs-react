import React from "react";
import Navigation from "../../Components/Navigation";
import Products from "../../Components/Products";
import PhilosophySection from "../../Components/PhilosophySection";
import SociologySection from "../../Components/SociologySection";
import Footer from "../../Components/Footer";
import Helmet from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BannarText from "../../Components/BannarText";
import AboutMe from "../../Components/AboutMe";
import MyDreamSection from "../../Components/MyDreamSection";
import MyTeamSection from "../../Components/MyTeamSection";

export default function Home(props) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: props.lang }} />
      <Navigation />
      <AboutMe section={props.content.aboutMe} />
      <BannarText text="Be smart, just drink the best and fuck the rest!" />
      <Products />
      <MyTeamSection section={props.content.myTeam} />
      <PhilosophySection section={props.content.philosophySection} />
      <SociologySection section={props.content.sociologySection} />
      <MyDreamSection section={props.content.myDream} />
      <Footer />
    </>
  );
}
