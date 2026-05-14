import React from "react";
import { useAppStore } from "../store/useAppStore";
import { useRenderCount } from "../hooks/useRenderCount";

export function ProductCard({ product }) {
  const cartItem = useAppStore((state) =>
    state.cart.items.find((item) => item.productId === product.id),
  );
  const addToCart = useAppStore((state) => state.addToCart);
  const renderCount = useRenderCount();

  return (
    <article className="card product-card">
      <div>
        <p className="label">Product</p>
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
      </div>
      <div className="price-row">
        <strong>${product.price}</strong>
        <span className="stat-chip">
          {cartItem ? `${cartItem.quantity} in cart` : "Fresh pick"}
        </span>
      </div>
      {
        <small data-testid="render-count">Render count: {renderCount}</small>
      }
      <button
        className="primary-button"
        type="button"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </article>
  );
}
