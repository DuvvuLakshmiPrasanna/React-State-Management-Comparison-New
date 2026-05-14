import React, { useEffect } from "react";
import { CartProvider } from "./state/CartContext";
import { UIProvider, useUIState } from "./state/UIContext";
import { UserProvider } from "./state/UserContext";
import { Header } from "./components/Header";
import { NotificationBanner } from "./components/NotificationBanner";
import { ProductListPage } from "./components/ProductListPage";
import { CartSidebar } from "./components/CartSidebar";

function AppShell() {
  const { theme } = useUIState();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell">
      <Header />
      <NotificationBanner />
      <main className="layout">
        <ProductListPage />
        <CartSidebar />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <UIProvider>
        <CartProvider>
          <AppShell />
        </CartProvider>
      </UIProvider>
    </UserProvider>
  );
}
