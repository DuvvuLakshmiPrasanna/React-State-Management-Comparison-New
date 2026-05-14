import React from "react";
import { useUIActions, useUIState } from "../state/UIContext";

export function ThemeSwitcher() {
  const { theme } = useUIState();
  const { setTheme } = useUIActions();

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
