import React from "react";
import { useSelector } from "react-redux";

export function CartItemCount() {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div className="inline-card">
      <span className="label">Cart items</span>
      <strong>{count}</strong>
    </div>
  );
}
