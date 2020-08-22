import { CHANGE_MOUSE_DOWN } from "../constants/actionTypes";

export const changeMouseDown = isMouseDown => {
  return {
    type: CHANGE_MOUSE_DOWN,
    payload: {
      isMouseDown: isMouseDown
    }
  };
};
