import React from "react";
import { useAppContext } from "../state/AppContext";

export function NotificationBanner() {
  const {
    state: {
      ui: { notification },
    },
  } = useAppContext();

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}
