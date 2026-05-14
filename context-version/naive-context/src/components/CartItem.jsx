import React from "react";
import { useAppContext } from "../state/AppContext";
import { useRenderCount } from "../hooks/useRenderCount";

export function CartItem({ item }) {
  const { dispatch } = useAppContext();
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
          onClick={() =>
            dispatch({ type: "DECREASE_QUANTITY", productId: item.productId })
          }
        >
          -
        </button>
        <strong>{item.quantity}</strong>
        <button
          className="icon-button"
          type="button"
          onClick={() =>
            dispatch({ type: "INCREASE_QUANTITY", productId: item.productId })
          }
        >
          +
        </button>
        <button
          className="ghost-button"
          type="button"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", productId: item.productId })
          }
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
