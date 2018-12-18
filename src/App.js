import React, { Component } from "react";
import "./App.css";
import Banner from "./components/banner";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
