// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CouterSlice";
import authSliceReducer from "./AuthSlice";

export const store = configureStore({
  reducer: { counterIn: counterSlice.reducer, auth: authSliceReducer },
});
export const counterActions = counterSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "changeAmount") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// export const store = createStore(counterReducer);
