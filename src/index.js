import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import products from "./products";
import { appReducer } from "./modules/redusers2";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  appReducer,

  {
    products: products.reduce(
      (products, product) => ({
        ...products,
        [product.id]: product
      }),
      {}
    ),
    cart: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
