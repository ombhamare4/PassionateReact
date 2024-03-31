import {configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import autheticationSlice from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: autheticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = autheticationSlice.actions;

export default store;
