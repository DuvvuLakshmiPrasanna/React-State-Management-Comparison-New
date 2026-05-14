import { create } from 'zustand';

export const useAppStore = create((set, get) => ({
  cart: {
    items: [],
    isOpen: false,
  },
  user: {
    name: 'Lakshmi Prasanna Duvvu',
    isLoggedIn: true,
  },
  ui: {
    theme: 'light',
    notification: null,
  },
  addToCart: (product) => {
    const existingItem = get().cart.items.find((item) => item.productId === product.id);
    const items = existingItem
      ? get().cart.items.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      : [
          ...get().cart.items,
          {
            productId: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
          },
        ];

    set((state) => ({
      cart: { ...state.cart, items },
      ui: {
        ...state.ui,
        notification: {
          message: `${product.name} added to cart`,
          type: 'success',
        },
      },
    }));
  },
  increaseQuantity: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      },
    })),
  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items
          .map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      },
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter((item) => item.productId !== productId),
      },
    })),
  toggleCart: () =>
    set((state) => ({
      cart: {
        ...state.cart,
        isOpen: !state.cart.isOpen,
      },
    })),
  setTheme: (theme) =>
    set((state) => ({
      ui: {
        ...state.ui,
        theme,
      },
    })),
  setNotification: (notification) =>
    set((state) => ({
      ui: {
        ...state.ui,
        notification,
      },
    })),
  clearNotification: () =>
    set((state) => ({
      ui: {
        ...state.ui,
        notification: null,
      },
    })),
}));