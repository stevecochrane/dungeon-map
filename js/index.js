import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "../css/main.css";

document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<App />, document.getElementById("app"));
});
