import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counterStart: 0, showCounter: true };

export const counterSlice = createSlice({
  name: "counterIn",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counterStart++;
    },
    decrement(state) {
      state.counterStart--;
    },
    changeAmount(state, action) {
      state.counterStart = state.counterStart + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
