import React, { useEffect } from "react";
import { AppProvider, useAppContext } from "./state/AppContext";
import { Header } from "./components/Header";
import { NotificationBanner } from "./components/NotificationBanner";
import { ProductListPage } from "./components/ProductListPage";
import { CartSidebar } from "./components/CartSidebar";

function AppShell() {
  const {
    state: {
      ui: { theme },
    },
  } = useAppContext();

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
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
