import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";

function NotificationWidget() {
  return (
    <FontAwesomeIcon icon={faBell} style={{ color:'white', height: "20px" }}/>
  );
}

export default NotificationWidget