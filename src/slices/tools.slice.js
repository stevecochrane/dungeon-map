import { createSlice } from "@reduxjs/toolkit";
import toolTypes from "../constants/toolTypes";

const INITIAL_STATE = { activeTool: toolTypes.ROOM };

const toolsSlice = createSlice({
  name: "tools",
  initialState: INITIAL_STATE,
  reducers: {
    changeTool: (state, action) => {
      state.tool = action.payload;
    }
  }
});

export const { changeTool } = toolsSlice.actions;
export default toolsSlice.reducer;
