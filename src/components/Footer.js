import React, { Component } from "react";

function Footer(props) {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-information">
          <div className="copyright">
            Handcrafted with ❤️ and <img className="react-symbol" src="react.svg" /> by
            Matthew Troke
          </div>
          <div className="socials">
            <a href="" title="Github" uk-tooltip="" class="social-icon" uk-icon="icon: github" />
            <a href="" title="Linked In" uk-tooltip="" class="social-icon" uk-icon="icon: linkedin" />
            <a href="" title="Twitter" uk-tooltip="" class="social-icon" uk-icon="icon: twitter" />
            <a href="" title="Google+" uk-tooltip="" class="social-icon" uk-icon="icon: google-plus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
