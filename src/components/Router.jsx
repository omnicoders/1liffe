import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MediaPage from "../pages/MediaPage";
import ContactPage from "../pages/ContactPage";

class Router extends Component {
  render() {
    const landingPage = () => {
      return <LandingPage {...this.props} />;
    };
    const mediapage = () => {
      return <MediaPage {...this.props} />;
    };
    const contactpage = () => {
      return <ContactPage {...this.props} />;
    };
    return (
      <main>
        <Switch>
          <Route exact path="/" render={landingPage} />
          <Route exact path="/media" render={mediapage} />
          <Route exact path="/contact" render={contactpage} />
        </Switch>
      </main>
    );
  }
}

export default Router;
