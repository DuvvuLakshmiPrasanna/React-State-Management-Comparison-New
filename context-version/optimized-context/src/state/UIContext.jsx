import React, { createContext, useContext, useMemo, useReducer } from "react";

const UIStateContext = createContext(null);
const UIActionsContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme };
    case "SET_NOTIFICATION":
      return { ...state, notification: action.notification };
    case "CLEAR_NOTIFICATION":
      return { ...state, notification: null };
    default:
      return state;
  }
}

export function UIProvider({ children }) {
  const [ui, dispatch] = useReducer(reducer, {
    theme: "light",
    notification: null,
  });

  const actions = useMemo(
    () => ({
      setTheme: (theme) => dispatch({ type: "SET_THEME", theme }),
      setNotification: (notification) =>
        dispatch({ type: "SET_NOTIFICATION", notification }),
      clearNotification: () => dispatch({ type: "CLEAR_NOTIFICATION" }),
    }),
    [],
  );

  return (
    <UIActionsContext.Provider value={actions}>
      <UIStateContext.Provider value={ui}>{children}</UIStateContext.Provider>
    </UIActionsContext.Provider>
  );
}

export function useUIState() {
  const context = useContext(UIStateContext);
  if (!context) {
    throw new Error("useUIState must be used within UIProvider");
  }
  return context;
}

export function useUIActions() {
  const context = useContext(UIActionsContext);
  if (!context) {
    throw new Error("useUIActions must be used within UIProvider");
  }
  return context;
}
