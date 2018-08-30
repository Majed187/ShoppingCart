import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addToCart } from "../modules/action";
import ProducstListItem from "./ProductListItem";

class ProductList extends Component {
  render() {
    return (
      <ul>
        <ProducstListItem />
      </ul>
    );
  }
}
export default ProductList;
