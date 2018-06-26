import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./assets/css/bootstrap.min.css";

import Routes from "./routes/index";

ReactDOM.render(Routes, document.getElementById("root"));
registerServiceWorker();
