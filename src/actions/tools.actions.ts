import { ToolsAction } from "../types/toolsActions";
import { CHANGE_TOOL } from "../constants/actionTypes";

export const changeTool = (toolId: string): ToolsAction => {
  return {
    type: CHANGE_TOOL,
    payload: {
      tool: toolId
    }
  };
};
