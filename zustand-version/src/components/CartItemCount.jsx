import React from "react";
import { useAppStore } from "../store/useAppStore";

export function CartItemCount() {
  const count = useAppStore((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div className="inline-card">
      <span className="label">Cart items</span>
      <strong>{count}</strong>
    </div>
  );
}
