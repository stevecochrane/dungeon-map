import { CHANGE_TOOL } from "../constants/actionTypes";

export const changeTool = (toolId) => {
	return {
		type: CHANGE_TOOL,
		payload: {
			tool: toolId
		}
	}
};
