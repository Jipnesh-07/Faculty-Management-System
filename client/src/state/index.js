import { createSlice } from "@reduxjs/toolkit";

const id = localStorage.getItem("userID");
// console.log("index console is ", id);


const initialState = {
  mode: "dark",
  userId: `${id}`,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
