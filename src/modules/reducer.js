

export const appReducer = (state = {}, action) => {
  const { products, cart } = state;
  const { product } = action;
  const { id, title, price } = product || {};

  let inventory, quantity, newCart;

  switch (action.type) {
    case "ADD_TO_CART":
      inventory = product.inventory;

      quantity = cart[id] ? cart[id].quantity : 0;

      if (inventory <= 0) return state;

      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory: inventory - 1
          }
        },
        cart: {
          ...cart,
          [id]: {
            id,
            title,
            price,
            quantity: quantity + 1
          }
        }
      };
    case "REMOVE_FROM_CART":
      quantity = product.quantity;
      inventory = products[id].inventory;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: inventory + 1
          }
        },
        cart:
          quantity <= 1? newCart: {
                ...cart,
                [id]: {
                  ...cart[id],
                  quantity: quantity - 1
                }
              }
      };
    case "REMOVE_ALL_FROM _CART":
      quantity = product.quantity;
      inventory = products[id].inventory;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: inventory + quantity
          }
        },
        cart: newCart
      };

    case "CHECK_OUT":
      return {
        ...state,
        cart: {}
      };

    default:
      return state;
  }
};
