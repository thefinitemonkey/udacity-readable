import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store.js";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
