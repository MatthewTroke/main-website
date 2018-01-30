import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import "./index.css";

class App extends Component {
  render() {
    return (
      <main className="outer-page">
        <Navbar />
        <Technologies />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default App;
