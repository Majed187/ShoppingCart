import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
class ShoppingCart extends Component {
  render() {
    return (
      <ul>
        <ShoppingCartItem />
      </ul>
    );
  }
}

export default ShoppingCart;
