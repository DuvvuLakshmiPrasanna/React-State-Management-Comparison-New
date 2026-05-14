import React from "react";
import { useAppStore } from "../store/useAppStore";
import { useRenderCount } from "../hooks/useRenderCount";
import { UserInfo } from "./UserInfo";
import { CartItemCount } from "./CartItemCount";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const toggleCart = useAppStore((state) => state.toggleCart);
  const renderCount = useRenderCount();

  return (
    <header className="panel header">
      <div>
        <p className="eyebrow">Partnr benchmark</p>
        <h1>React State Management Comparison</h1>
        <p className="muted">
          Context API baseline with a single shared provider.
        </p>
        {
          <small data-testid="render-count">Render count: {renderCount}</small>
        }
      </div>
      <div className="header-actions">
        <UserInfo />
        <CartItemCount />
        <ThemeSwitcher />
        <button className="ghost-button" type="button" onClick={toggleCart}>
          Toggle cart
        </button>
      </div>
    </header>
  );
}
