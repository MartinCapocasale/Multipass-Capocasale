import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <FontAwesomeIcon icon={faCartShopping} style={{ color:'white', height: "20px" }}/>
  );
}

export default CartWidget