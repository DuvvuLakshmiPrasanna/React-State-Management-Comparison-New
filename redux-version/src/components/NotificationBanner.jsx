import React from "react";
import { useSelector } from "react-redux";

export function NotificationBanner() {
  const notification = useSelector((state) => state.ui.notification);

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}
