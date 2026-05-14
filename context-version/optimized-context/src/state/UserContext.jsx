import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, name: action.name };
    case "SET_LOGIN_STATE":
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [user] = useReducer(reducer, {
    name: "Lakshmi Prasanna Duvvu",
    isLoggedIn: true,
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return context;
}
