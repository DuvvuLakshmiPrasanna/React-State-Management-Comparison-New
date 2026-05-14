import React from "react";
import { useAppContext } from "../state/AppContext";

export function CartItemCount() {
  const {
    state: {
      cart: { items },
    },
  } = useAppContext();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="inline-card">
      <span className="label">Cart items</span>
      <strong>{count}</strong>
    </div>
  );
}
