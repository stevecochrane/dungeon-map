import { CHANGE_TOOL } from "../constants/actionTypes";
import { tools } from "./initialState";

export default (state=tools, action) => {
	switch (action.type) {

		case CHANGE_TOOL:
			return Object.assign({}, state, {
				activeTool: action.payload.tool
			});

		default:
			return state;

	}
};
