import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) return (existing.quantity += 1);
      }
      state.cartItems.push({ ...product, quantity: 1 });
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

export const { addToCart } = counterSlice.actions;

export const CounterReducer = counterSlice.reducer;
