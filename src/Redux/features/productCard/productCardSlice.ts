import { createSlice } from "@reduxjs/toolkit";
import data from "../../../Data/Data.json";
type initialState = {
  id: number | null;
  quantity: number;
};

const initialState: initialState = {
  id: null,
  quantity: 0,
};

export const productCardSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    getQuantity: (state, action) => {
      return data.find((item) => item.id === action.payload);
    },
  },
});
