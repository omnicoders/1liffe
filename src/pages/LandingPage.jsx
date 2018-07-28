import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="profile">
          <div className="intro">
            <div>
              <p>Ahmadeen Nassar</p>
              <p>Founder</p>
            </div>
          </div>
        </div>
        <div className="display">
          <p>Building librairies in Ethiopia</p>
          <iframe
            title="amadeen"
            src="https://www.youtube.com/embed/Yq8rjPQ9hZs?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
