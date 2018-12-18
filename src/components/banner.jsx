import React, { Component } from "react";
import logo from "../assets/logo.png";

class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <img className="logo" src={logo} alt="" />
      </div>
    );
  }
}

export default Banner;
