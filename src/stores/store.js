import { configureStore } from "@reduxjs/toolkit";
import RetailSlice from "./slices/RetailSlice.js";

export default configureStore({
  reducer: {
    retail: RetailSlice,
  },
});
