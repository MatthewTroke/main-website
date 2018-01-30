import React, { Component } from "react";

function Navbar(props) {
  return (
    <div className="navbar-wrapper">
      <img src="matthewtrokelogo.png" className="navbar-header" />
      <div className="navbar-content">
        <a href="#portfolio" uk-scroll="">
          <div>Portfolio</div>
        </a>
        <a href="#about" uk-scroll="">
          <div>About</div>
        </a>
        <a href="#about" uk-scroll="">
          <div>Technologies</div>
        </a>
        <a href="#contact" uk-scroll="">
          <div>Contact</div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
