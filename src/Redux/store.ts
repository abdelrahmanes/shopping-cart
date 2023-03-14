import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";

const store = configureStore({
  reducer: {
    cartReducer: shoppingCartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
