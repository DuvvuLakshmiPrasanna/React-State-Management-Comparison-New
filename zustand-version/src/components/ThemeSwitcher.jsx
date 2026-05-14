import React from "react";
import { useAppStore } from "../store/useAppStore";

export function ThemeSwitcher() {
  const theme = useAppStore((state) => state.ui.theme);
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <button
      className="secondary-button"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
