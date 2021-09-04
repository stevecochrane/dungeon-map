import { AnyAction } from "redux";
import { ToolsState } from "../types/toolsState";
import { CHANGE_TOOL } from "../constants/actionTypes";
import { tools } from "./initialState";

export default (state = tools, action: AnyAction): ToolsState => {
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
