import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="profile">
          <div>
            <p>
              <tab1>
                Ahmadeen Nassar has been sending used books to his native land,
                Ethiopia, for over 10 years. Through determination and tireless
                work Amadeen has managed to establish 15 differnet libraries in
                the region to help fight against a problem he sees as a major
                issue blocking his people from opportunity. Illiteracy.
              </tab1>
            </p>
            <p>Founder</p>
          </div>
        </div>
        <div className="display">
          <p>Building librairies in Ethiopia</p>
          <iframe
            title="amadeen"
            src="https://www.youtube.com/embed/Yq8rjPQ9hZs?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
