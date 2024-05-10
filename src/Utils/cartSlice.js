import React from "react";
import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    AddItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => state.items.pop(),
    clearItem: (state) => (state.items.length = 0),
  },
});

export const { AddItemToCart, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
