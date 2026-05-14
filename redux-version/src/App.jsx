import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "./components/Header";
import { NotificationBanner } from "./components/NotificationBanner";
import { ProductListPage } from "./components/ProductListPage";
import { CartSidebar } from "./components/CartSidebar";

function AppShell() {
  const theme = useSelector((state) => state.ui.theme);

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
  return <AppShell />;
}
