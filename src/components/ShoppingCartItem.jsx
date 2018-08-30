import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, removeAllFromCart, checkOut } from "../modules/action";

class ShoppingCartItem extends Component {
  render() {
    const { items } = this.props;
    const { removeFromCart, removeAllFromCart, checkOut } = this.props;
    const { product } = this.props;

    return (
      <div className="border border-dark rounded container m-auto">
        {items.map(product => (
          <li key={product.id}>
            <p>
              {product.title} /{product.price}/{product.quantity}
            </p>
            <button
              className="btn btn-dark m-5"
              onClick={() => {
                removeFromCart(product);
              }}
            >
              removeFromCart
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                removeAllFromCart(product);
              }}
            >
              removeAllFromCart
            </button>
          </li>
        ))}
        <p className="total badge badge-secondary">
          Total: ${items.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}
        </p>
        <button
          className="btn btn-dark col-lg-12 w-25"
          onClick={() => {
            checkOut(product);
          }}
        >
          CheckOut
        </button>
      </div>
    );
  }
}
const mapStoreToProps = store => ({
  items: Object.values(store.cart)
});
const mapActionsToProps = {
  removeFromCart: removeFromCart,
  removeAllFromCart: removeAllFromCart,
  checkOut: checkOut
};

export default connect(
  mapSoreToProps,
  mapActionsToProps
)(ShoppingCartItem);
