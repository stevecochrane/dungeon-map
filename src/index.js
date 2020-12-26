import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import DungeonMap from "./containers/DungeonMap";

const store = createStore(reducers, composeWithDevTools());

document.addEventListener("DOMContentLoaded", () => {
  const rootElem = document.getElementById("app");

  ReactDOM.render(
    <Provider store={store}>
      <DungeonMap />
    </Provider>,
    rootElem
  );
});
