import { AnyAction } from "redux";
import { CHANGE_TOOL } from "../constants/actionTypes";
import { tools } from "./initialState";

export default (state = tools, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_TOOL: {
      return Object.assign({}, state, {
        activeTool: action.payload.tool
      });
    }
    default: {
      return state;
    }
  }
};
