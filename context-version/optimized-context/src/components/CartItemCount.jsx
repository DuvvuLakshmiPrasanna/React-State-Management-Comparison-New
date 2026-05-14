import React from "react";
import { useCartState } from "../state/CartContext";

export function CartItemCount() {
  const { items } = useCartState();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="inline-card">
      <span className="label">Cart items</span>
      <strong>{count}</strong>
    </div>
  );
}
