import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Footer from "../layouts/Footer";
import SlideShow from "../layouts/slideShow";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SlideShow />
        <Services />
        <About />

        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
