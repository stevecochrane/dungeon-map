import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App/App";

import "./styles/main.css";

const store = createStore(function() {});

document.addEventListener("DOMContentLoaded", () => {
	const rootElem = document.getElementById("app");

	ReactDOM.render(
		<Provider store={store}>
			<App store={store} />
		</Provider>,
		rootElem
	);
});
