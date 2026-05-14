import { useAppStore } from "../store/useAppStore";

import React from "react";

export function UserInfo() {
  const user = useAppStore((state) => state.user);
  const { name, isLoggedIn } = user;

  return (
    <div className="inline-card">
      <span className="label">User</span>
      <strong>{name}</strong>
      <span className="muted">{isLoggedIn ? "Online" : "Offline"}</span>
    </div>
  );
}
