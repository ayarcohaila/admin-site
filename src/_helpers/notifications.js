import React from "react";

class Notifications {
  _notificationSystem = null;

  setNotificationSystem(ref) {
    this._notificationSystem = ref;
  }

  show(message, level = "success") {
    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        title: <span data-notify="icon" className="pe-7s-gift" />,
        message: <div>{message}</div>,
        level,
        position: "tr",
        autoDismiss: 15
      });
    }
  }
}

export const notifications = new Notifications();
