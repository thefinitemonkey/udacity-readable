import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
//import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store.js";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
