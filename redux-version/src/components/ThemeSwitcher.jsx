import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setTheme } from "../store/uiSlice";

export function ThemeSwitcher() {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  return (
    <button
      className="secondary-button"
      type="button"
      onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
