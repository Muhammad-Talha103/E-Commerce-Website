import { createSlice } from "@reduxjs/toolkit";
import Products from "@/components/Products/types";
import { StoreState } from "./types";

const initialState: StoreState = {
  productsData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productsData.find(
        (item: Products) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productsData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productsData.find(
        (item: Products) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productsData.find(
        (item: Products) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      state.productsData = state.productsData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productsData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;