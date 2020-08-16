import { CHANGE_MOUSE_DOWN } from "../constants/actionTypes";
import { mouse } from "./initialState";

export default (state = mouse, action) => {
  switch (action.type) {
    case CHANGE_MOUSE_DOWN:
      return Object.assign({}, state, {
        mouseDown: action.payload.mouseDown
      });

    default:
      return state;
  }
};
