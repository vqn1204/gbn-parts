import React, { Component } from "react";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.png";

class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <img className="logo" src={logo} alt="" />
        <img className="banner" src={banner} alt="" />
      </div>
    );
  }
}

export default Banner;
