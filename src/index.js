import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";

import App from "../src/app/layout/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
