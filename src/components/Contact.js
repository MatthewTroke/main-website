import React, { Component } from "react";
import GoogleMap from "./GoogleMap";

function Contact(props) {
  return (
    <div className="background-contact-wrapper">
      <div>
        <div id="contact" className="contact-wrapper">
          <fieldset class="uk-fieldset">
            <div className="contact-title white">Contact Me</div>
            <div className="sub-text white">Let's work together.</div>
            <hr />

            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Name" />
            </div>

            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Email" />
            </div>

            <div class="uk-margin">
              <textarea class="uk-textarea" rows="5" placeholder="Message" />
            </div>
            <button class="uk-button  orange-button">Contact Me</button>
          </fieldset>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
