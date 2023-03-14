import { createSlice } from "@reduxjs/toolkit";

export type cartItem = {
  id: number;
  quantity: number;
};

export type initialState = {
  cartItems: cartItem[];
};

const initialState: initialState = {
  cartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    increaseItems: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (selectedItem) {
        selectedItem.quantity++;
      } else {
        state.cartItems = [
          ...state.cartItems,
          { id: action.payload, quantity: 1 },
        ];
      }
    },
    decreaseItems: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (selectedItem && selectedItem.quantity > 0) {
        selectedItem.quantity--;
      } else {
        state.cartItems.filter((item) => item.id !== action.payload);
      }
    },
    resetItemQuantity: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      selectedItem!.quantity = 0;
    },
  },
});

export default shoppingCartSlice.reducer;
export const { increaseItems, decreaseItems, resetItemQuantity } =
  shoppingCartSlice.actions;
