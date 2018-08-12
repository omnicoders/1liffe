import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Router from "./Router";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router className="Router" />
        <Footer />
      </div>
    );
  }
}

export default App;
