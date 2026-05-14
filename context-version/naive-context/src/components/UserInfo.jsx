import React from "react";
import { useAppContext } from "../state/AppContext";

export function UserInfo() {
  const {
    state: {
      user: { name, isLoggedIn },
    },
  } = useAppContext();

  return (
    <div className="inline-card">
      <span className="label">User</span>
      <strong>{name}</strong>
      <span className="muted">{isLoggedIn ? "Online" : "Offline"}</span>
    </div>
  );
}
