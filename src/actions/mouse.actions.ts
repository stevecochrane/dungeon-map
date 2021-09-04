import { MouseAction } from "../types/mouseActions";
import { CHANGE_MOUSE_DOWN } from "../constants/actionTypes";

export const changeMouseDown = (isMouseDown: boolean): MouseAction => {
  return {
    type: CHANGE_MOUSE_DOWN,
    payload: {
      isMouseDown: isMouseDown
    }
  };
};
