import { combineReducers } from "redux";

function products(oldProducts = {}, action) {
  const { product } = action;
  const { id } = product || {};

  let inventory;

  switch (action.type) {
    case "ADD_TO_CART":
      inventory = product.inventory;
      if (inventory <= 0) return oldProducts;

      return {
        ...oldProducts,
        [id]: {
          ...oldProducts[id],
          inventory: inventory - 1
        }
      };
    case "REMOVE_FROM_CART":
      inventory = oldProducts[id].inventory;

      return {
        ...oldProducts,
        [id]: {
          ...oldProducts[id],
          inventory: inventory + 1
        }
      };

    case "REMOVE_ALL_FROM_CART":
      inventory = product[id].inventory;

      return {
        ...oldProducts,
        [id]: {
          ...oldProducts[id],
          inventory: inventory + product.quantity
        }
      };
    default:
      return oldProducts;
  }
}
function cart(oldCart = {}, action) {
  const { product } = action;
  const { id, title, price } = product || {};
  const cartItem = oldCart[id] || { id, title, price, quantity: 0 };

  let newCart = { ...oldCart };

  delete newCart[id];

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...oldCart,
        [id]: {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      };

    case "REMOVE_FROM_CART":
      return cartItem.quantity <= 1
        ? newCart
        : {
            ...oldCart,
            [id]: {
              ...cartItem,
              quantity: cartItem.quantity - 1
            }
          };

    case "REMOVE_ALL_FROM _CART":
      return newCart;

    case "CHECK_OUT":
      return {};

    default:
      return oldCart;
  }
}
export const appReducer = combineReducers({
  products,
  cart
});
