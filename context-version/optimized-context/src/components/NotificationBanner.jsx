import React from "react";
import { useUIState } from "../state/UIContext";

export function NotificationBanner() {
  const { notification } = useUIState();

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}
