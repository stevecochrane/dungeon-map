import { AnyAction } from "redux";
import { MouseState } from "../types/mouseState";
import { CHANGE_MOUSE_DOWN } from "../constants/actionTypes";
import { mouse } from "./initialState";

export default (state = mouse, action: AnyAction): MouseState => {
  switch (action.type) {
    case CHANGE_MOUSE_DOWN: {
      return Object.assign({}, state, {
        isMouseDown: action.payload.isMouseDown
      });
    }
    default: {
      return state;
    }
  }
};
