import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store.js";


ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
