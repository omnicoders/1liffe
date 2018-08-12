import React, { Component } from "react";
import "./ContactPage.css";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className="ContactPage">
        <div className="contactInfo">
          <p>Linked In</p>
          <p>FaceBook</p>
          <p>E-mail</p>
          <p>Phone</p>
        </div>
        <div className="donate">
          <p>This is where the embeded goFundme page can go</p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
