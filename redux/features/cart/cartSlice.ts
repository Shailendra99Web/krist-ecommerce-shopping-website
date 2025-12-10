import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartState {
  cartItems: any[];
  totalAmount: number;
}

const initialState = { cartItems: [], totalAmount: 0 } satisfies cartState as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<{cartItems: any[], totalAmount: number}>) {
      state.cartItems = action.payload.cartItems
      state.totalAmount = action.payload.totalAmount
      console.log("action.payload", action.payload);
      console.log("Proxy state", state.cartItems);
    },
    addCartItem(
      state,
      action: PayloadAction<{ product: string; quantity: number }>
    ) {
      console.log("Proxy state", state.cartItems);
      console.log("ProductId", action.payload);
    }
    // decrement(state) {
    //   state.value--;
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // }
  }
});

export const { addCart, addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
