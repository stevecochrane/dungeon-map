import { combineReducers } from "redux";
import mouse from "./mouse.reducers";
import tools from "./tools.reducers";

const rootReducer = combineReducers({
  mouse,
  tools
});

export default rootReducer;
