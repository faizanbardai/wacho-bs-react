import React from "react";
import Navigation from "../../Components/Navigation";
import Products from "../../Components/Products";
import PhilosophySection from "../../Components/PhilosophySection";
import SociologySection from "../../Components/SociologySection";
import Footer from "../../Components/Footer";
import Helmet from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AboutMe from "../../Components/AboutMe";
import MyDreamSection from "../../Components/MyDreamSection";
import MyTeamSection from "../../Components/MyTeamSection";
import YourRights from "../../Components/YourRights";
import ArtGallery from "../../Components/ArtGallery";

export default function Home(props) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: props.lang }} />
      <Navigation />
      <Products section={props.content.products} />
      <ArtGallery />
      <AboutMe section={props.content.aboutMe} />
      <MyTeamSection section={props.content.myTeam} />
      <PhilosophySection section={props.content.philosophySection} />
      <SociologySection section={props.content.sociologySection} />
      <MyDreamSection section={props.content.myDream} />
      <YourRights />
      <Footer />
    </>
  );
}
