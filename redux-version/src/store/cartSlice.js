import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        productId: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    },
    increaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.productId === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      state.items = state.items
        .map((item) =>
          item.productId === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.productId !== action.payload);
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;