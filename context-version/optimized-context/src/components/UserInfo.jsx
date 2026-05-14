import React from "react";
import { useUserContext } from "../state/UserContext";

export function UserInfo() {
  const { name, isLoggedIn } = useUserContext();

  return (
    <div className="inline-card">
      <span className="label">User</span>
      <strong>{name}</strong>
      <span className="muted">{isLoggedIn ? "Online" : "Offline"}</span>
    </div>
  );
}
