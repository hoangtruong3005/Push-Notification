import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

import queueIcon from "../queue_notification.svg";
import markOutline from "../queue_mark_outline.svg";
import markSolid from "../queue_mark_solid.svg";

const UserNotificationItem = ({ notification }) => {
  const { message, isRead } = notification;

  return (
    <div className={`User-notification-item ${!isRead ? "isRead" : ""}`}>
      <Link to="/" className="User-notification-item__notice">
        <div className="User-notification-item__notice__icon">
          <img src={queueIcon} alt="" />
        </div>
        <div className="User-notification-item__notice__message">
          <div className="content">
            <p>{message}</p>
          </div>
          <div className="time">
            <p>2 minutes ago</p>
          </div>
        </div>
      </Link>
      <div className="User-notification-item__tooltip">
        <Tooltip
          placement="top"
          title={isRead ? "Mark as UnRead" : "Mark as Read"}
        >
          <div className="icon">
            <img
              className="User-notification-item__mark"
              src={isRead ? markOutline : markSolid}
              alt=""
              // onClick={() => actToggleIsRead(notification)}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default UserNotificationItem;

UserNotificationItem.propTypes = {
  notification: PropTypes.objectOf(PropTypes.any),
  // actToggleIsRead: PropTypes.func,
};

UserNotificationItem.defaultProps = {
  notification: [],
  // actToggleIsRead: () => {},
};
