export const addToCart = product => ({
  type: "ADD_TO_CART",
  product
});
export const removeFromCart = product => ({
  type: "REMOVE_FROM_CART",
  product
});

export const removeAllFromCart = product => ({
  type: "REMOVE_ALL_FROM _CART",
  product
});
export const checkOut = () => ({
  type: "CHECK_OUT"
});
