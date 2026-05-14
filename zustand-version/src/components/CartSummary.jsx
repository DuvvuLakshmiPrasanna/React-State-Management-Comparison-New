import React from "react";

export function CartSummary({ items }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <footer className="cart-summary card">
      <div>
        <span className="label">Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
      <button className="primary-button" type="button">
        Checkout
      </button>
    </footer>
  );
}
