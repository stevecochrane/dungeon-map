import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isMouseDown: false };

const mouseSlice = createSlice({
  name: "mouse",
  initialState: INITIAL_STATE,
  reducers: {
    changeMouseDown: (state, action) => {
      state.mouse = action.payload;
    }
  }
});

export const { changeMouseDown } = mouseSlice.actions;
export default mouseSlice.reducer;
