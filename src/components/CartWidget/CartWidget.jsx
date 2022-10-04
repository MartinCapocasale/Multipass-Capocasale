import React, {useContext} from 'react';
import {cartContext} from "../../context/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {Badge} from "@mui/material"

function CartWidget() {
  const {getItemQty} = useContext(cartContext);
  return (
    <div>
      <Badge badgeContent={getItemQty()} color="success" height="20px" >
        <ShoppingCartIcon style={{ color: 'white' }}  />
      </Badge>
    </div>
  );
}

export default CartWidget