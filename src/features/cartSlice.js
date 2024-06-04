// features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      saveCartToLocalStorage(state.items);
    },

    deleteFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state.items);
    },
    
    addAllToCart: (state, action) => {
      action.payload.forEach((item) => {
        const existingItem = state.items.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.items.push({ ...item });
        }
        saveCartToLocalStorage(state.items);
      });
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, addAllToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
