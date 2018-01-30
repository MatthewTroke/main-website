import React, { Component } from "react";

function Technologies(props) {
  return (
    <div className="about-background">
      <div className="about-wrapper">
        <div id="about" className="technologies-wrapper">
          <div className="about-title">About Me</div>
          <div className="sub-text">Who I am and what I like.</div>
          <hr />
          <div className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis bibendum placerat. Duis dictum leo ut mattis lacinia. Nam
            quis mollis metus, in ornare nunc. Nulla et bibendum est, non
            elementum elit. Sed vulputate libero sit amet lectus varius luctus. Nam
            quis mollis metus, in ornare nunc. Nulla et bibendum est, non
            elementum elit. Sed vulputate libero sit amet lectus varius luctus. Nam
            quis mollis metus, in ornare nunc. Nulla et bibendum est, non
            elementum elit. Sed vulputate libero sit amet lectus varius luctus.
          </div>
        </div>
        <div className="technologies-wrapper">
          <div className="about-title">Proficient Technologies</div>
          <div className="sub-text">What I'm good at.</div>
          <hr />
          <div className="technologies-used">
            <div>
              <img className="technology-logo" src="js.svg" />
              <div>JavaScript</div>
            </div>
            <div>
              <img className="technology-logo" src="html.svg" />
              <div>HTML</div>
            </div>
            <div>
              <img className="technology-logo" src="css.svg" />
              <div>CSS</div>
            </div>
            <div>
              <img
                title="I like React.js =)"
                uk-tooltip=""
                className="react-spin technology-logo"
                src="react.svg"
              />
              <div>React.js</div>
            </div>
            <div>
              <img className="technology-logo" src="node.png" />
              <div>Node.js</div>
            </div>
            <div>
              <img className="technology-logo" src="sql.svg" />
              <div>MySQL</div>
            </div>
            <div>
              <img className="technology-logo" src="bootstrap.ico" />
              <div>Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
