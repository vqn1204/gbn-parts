import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <img src={this.props.image} alt="" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Product;
