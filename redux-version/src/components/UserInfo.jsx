import React from "react";
import { useSelector } from "react-redux";

export function UserInfo() {
  const { name, isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="inline-card">
      <span className="label">User</span>
      <strong>{name}</strong>
      <span className="muted">{isLoggedIn ? "Online" : "Offline"}</span>
    </div>
  );
}
