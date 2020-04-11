import React from "react";

import NotificationItem from "../NotificationItem";

const data = [
  { message: "Hoang Truong publish a post aaa", isRead: true },
  { message: "Welcome Hoang Truong", isRead: false },
];

function Notification() {
  return (
    <div className="notification">
      <NotificationItem notification={data[0]} />
      <NotificationItem notification={data[1]} />
    </div>
  );
}

export default Notification;
