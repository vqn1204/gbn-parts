import React, { Component } from "react";
import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductList from "./components/productList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Header title="Q50" />
        <ProductList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
