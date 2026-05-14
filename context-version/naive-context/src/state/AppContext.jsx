import React, { createContext, useContext, useMemo, useReducer } from "react";

const initialState = {
  cart: {
    items: [],
    isOpen: false,
  },
  user: {
    name: "Lakshmi Prasanna Duvvu",
    isLoggedIn: true,
  },
  ui: {
    theme: "light",
    notification: null,
  },
};

const AppContext = createContext(null);

function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.product;
      const existingItem = state.cart.items.find(
        (item) => item.productId === product.id,
      );
      const items = existingItem
        ? state.cart.items.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [
            ...state.cart.items,
            {
              productId: product.id,
              name: product.name,
              quantity: 1,
              price: product.price,
            },
          ];

      return {
        ...state,
        cart: { ...state.cart, items },
        ui: {
          ...state.ui,
          notification: {
            message: `${product.name} added to cart`,
            type: "success",
          },
        },
      };
    }
    case "INCREASE_QUANTITY": {
      const items = state.cart.items.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      return { ...state, cart: { ...state.cart, items } };
    }
    case "DECREASE_QUANTITY": {
      const items = state.cart.items
        .map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
      return { ...state, cart: { ...state.cart, items } };
    }
    case "REMOVE_FROM_CART": {
      const items = state.cart.items.filter(
        (item) => item.productId !== action.productId,
      );
      return { ...state, cart: { ...state.cart, items } };
    }
    case "TOGGLE_CART": {
      return { ...state, cart: { ...state.cart, isOpen: !state.cart.isOpen } };
    }
    case "SET_THEME": {
      return { ...state, ui: { ...state.ui, theme: action.theme } };
    }
    case "CLEAR_NOTIFICATION": {
      return { ...state, ui: { ...state.ui, notification: null } };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => ({ state, dispatch, cartTotal: cartTotal(state.cart.items) }),
    [state],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
