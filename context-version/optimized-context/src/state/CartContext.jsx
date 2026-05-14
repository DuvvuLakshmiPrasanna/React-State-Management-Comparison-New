import React, { createContext, useContext, useMemo, useReducer } from "react";

const CartStateContext = createContext(null);
const CartActionsContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.product;
      const existingItem = state.items.find(
        (item) => item.productId === product.id,
      );
      const items = existingItem
        ? state.items.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [
            ...state.items,
            {
              productId: product.id,
              name: product.name,
              quantity: 1,
              price: product.price,
            },
          ];

      return { ...state, items };
    }
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.productId === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.productId,
        ),
      };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, {
    items: [],
    isOpen: false,
  });

  const actions = useMemo(
    () => ({
      addToCart: (product) => dispatch({ type: "ADD_TO_CART", product }),
      increaseQuantity: (productId) =>
        dispatch({ type: "INCREASE_QUANTITY", productId }),
      decreaseQuantity: (productId) =>
        dispatch({ type: "DECREASE_QUANTITY", productId }),
      removeFromCart: (productId) =>
        dispatch({ type: "REMOVE_FROM_CART", productId }),
      toggleCart: () => dispatch({ type: "TOGGLE_CART" }),
    }),
    [],
  );

  return (
    <CartActionsContext.Provider value={actions}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartActionsContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("useCartState must be used within CartProvider");
  }
  return context;
}

export function useCartActions() {
  const context = useContext(CartActionsContext);
  if (!context) {
    throw new Error("useCartActions must be used within CartProvider");
  }
  return context;
}
