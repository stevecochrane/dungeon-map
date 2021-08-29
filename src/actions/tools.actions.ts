import { CHANGE_TOOL } from "../constants/actionTypes";

export const changeTool = (toolId: string) => {
  return {
    type: CHANGE_TOOL,
    payload: {
      tool: toolId
    }
  };
};
