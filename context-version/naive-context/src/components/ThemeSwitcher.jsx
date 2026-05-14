import React from "react";
import { useAppContext } from "../state/AppContext";

export function ThemeSwitcher() {
  const {
    state: {
      ui: { theme },
    },
    dispatch,
  } = useAppContext();

  return (
    <button
      className="secondary-button"
      type="button"
      onClick={() =>
        dispatch({
          type: "SET_THEME",
          theme: theme === "light" ? "dark" : "light",
        })
      }
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
