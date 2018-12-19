import React, { Component } from "react";
import SideSplitters from "../assets/side_splitters.jpg";
import Product from "./product";

class ProductList extends Component {
  render() {
    return (
      <div className="products-container">
        <Product
          image={SideSplitters}
          description={
            <React.Fragment>
              <h4>Carbon Fiber Side Splitters</h4>
              <p>Trims: All</p>
              <p>Years: 2014-2019</p>
            </React.Fragment>
          }
        />
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
