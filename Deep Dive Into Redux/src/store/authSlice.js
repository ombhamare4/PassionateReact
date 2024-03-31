import { createSlice } from "@reduxjs/toolkit";

const intialAutheticationState = {
  isAutheticated: false,
  email: "",
  password: "",
};
const autheticationSlice = createSlice({
  name: "authetication",
  initialState: intialAutheticationState,
  reducers: {
    login(state) {
      state.isAutheticated = true;
      state.email = "";
      state.password = "";
    },
    logout(state) {
      state.isAutheticated = false;
      state.email = "";
      state.password = "";
    },
  },
});

export default autheticationSlice;
