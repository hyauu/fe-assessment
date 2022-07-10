// flow
import { createSlice } from "@reduxjs/toolkit";
import type RetailState from "../../types/retail.js";

const initialState: RetailState = {};

export const retailSlice = createSlice({
  name: "retail",
  initialState: initialState,
  reducers: {
    setState: (state, action) => (state = action.playload),
  },
});

// Action creators are generated for each case reducer function
export const { setState } = retailSlice.actions;

export default retailSlice.reducer;
