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
        if (existing.quantity < product.stock) {
          existing.quantity += 1;
        }
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existing = state.cartItems.find((item) => item.id === productId);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== productId
          );
        }
      }
    },
    deleteFromCartPage: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
  },
});

export const { addToCart, removeFromCart,deleteFromCartPage,} = counterSlice.actions;

export const CounterReducer = counterSlice.reducer;
