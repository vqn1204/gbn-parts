import React, { Component } from "react";
import SideSplitters from "../assets/side_splitters.jpg";
import Product from "./product";

class ProductList extends Component {
  render() {
    return (
      <div className="products-container">
        <Product image={SideSplitters} />
        <Product image={SideSplitters} />
        <Product image={SideSplitters} />
        <Product image={SideSplitters} />
        <Product image={SideSplitters} />
        <Product image={SideSplitters} />
      </div>
    );
  }
}

export default ProductList;
