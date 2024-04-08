import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export const uiAction = uiSlice.action;

export default store;
