import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { useRenderCount } from "../hooks/useRenderCount";

function CartItemBase({ item }) {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(decreaseQuantity(item.productId))}
        >
          -
        </button>
        <strong>{item.quantity}</strong>
        <button
          className="icon-button"
          type="button"
          onClick={() => dispatch(increaseQuantity(item.productId))}
        >
          +
        </button>
        <button
          className="ghost-button"
          type="button"
          onClick={() => dispatch(removeFromCart(item.productId))}
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
