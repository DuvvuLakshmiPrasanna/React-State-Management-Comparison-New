import React, { memo } from "react";
import { useAppStore } from "../store/useAppStore";
import { useRenderCount } from "../hooks/useRenderCount";

function CartItemBase({ item }) {
  const decreaseQuantity = useAppStore((state) => state.decreaseQuantity);
  const increaseQuantity = useAppStore((state) => state.increaseQuantity);
  const removeFromCart = useAppStore((state) => state.removeFromCart);
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

export const CartItem = memo(CartItemBase);
