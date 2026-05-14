import React from "react";
import { useAppContext } from "../state/AppContext";
import { useRenderCount } from "../hooks/useRenderCount";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

export function CartSidebar() {
  const {
    state: {
      cart: { items, isOpen },
    },
    dispatch,
  } = useAppContext();
  const renderCount = useRenderCount();

  return (
    <aside className={`panel cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Cart</p>
          <h2>Selected items</h2>
        </div>
        <button
          className="ghost-button"
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <small data-testid="render-count">Render count: {renderCount}</small>
      {items.length === 0 ? (
        <p className="empty-state">
          Your cart is empty. Add a product to begin benchmarking.
        </p>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
          <CartSummary items={items} />
        </div>
      )}
    </aside>
  );
}
