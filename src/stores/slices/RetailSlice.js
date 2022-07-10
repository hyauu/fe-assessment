// flow
import { createSlice } from "@reduxjs/toolkit";
import type { RetailState } from "../../types/retail.js";

const initialState: RetailState = {
  id: "",
  title: "",
  image: "",
  subtitle: "",
  brand: "",
  reviews: [],
  tags: [],
  sales: [],
};

export const retailSlice = createSlice({
  name: "retail",
  initialState: initialState,
  reducers: {
    setState: (state, action) => {
      const data = action.payload;
      Object.keys(state).forEach((key) => {
        state[key] = data[key];
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setState } = retailSlice.actions;

export default retailSlice.reducer;
