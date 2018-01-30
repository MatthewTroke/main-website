import React, { Component } from "react";

function Portfolio(props) {
  return (
    <div className="portfolio-background">
      <div className="home-wrapper">
        <div className="about-title">Portfolio</div>
        <div className="sub-text">What I've done.</div>
        <hr />
        <div id="portfolio" className="portfolio-wrapper">
          <img src="neoboard.jpg"/>
          <img src="https://placeimg.com/500/450/any" />
          <img src="https://placeimg.com/500/450/dogs" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
