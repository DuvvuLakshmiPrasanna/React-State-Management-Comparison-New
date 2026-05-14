import React from "react";
import { useCartActions } from "../state/CartContext";
import { useRenderCount } from "../hooks/useRenderCount";

export function CartItem({ item }) {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useCartActions();
  const renderCount = useRenderCount();

  return (
    <article className="cart-item card">
      <div>
        <h3>{item.name}</h3>
        <p className="muted">${item.price} each</p>
      </div>
      <div className="cart-item-controls">
        <button
          className="icon-button"
          type="button"
          onClick={() => decreaseQuantity(item.productId)}
        >
          -
        </button>
        <strong>{item.quantity}</strong>
        <button
          className="icon-button"
          type="button"
          onClick={() => increaseQuantity(item.productId)}
        >
          +
        </button>
        <button
          className="ghost-button"
          type="button"
          onClick={() => removeFromCart(item.productId)}
        >
          Remove
        </button>
      </div>
      {
        <small data-testid="render-count">Render count: {renderCount}</small>
      }
    </article>
  );
}
