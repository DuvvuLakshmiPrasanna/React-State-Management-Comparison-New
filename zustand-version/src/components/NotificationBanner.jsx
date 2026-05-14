import React from "react";
import { useAppStore } from "../store/useAppStore";

export function NotificationBanner() {
  const notification = useAppStore((state) => state.ui.notification);

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}
