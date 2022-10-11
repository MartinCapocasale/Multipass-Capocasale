import React, {useContext} from 'react';
import {cartContext} from "../../context/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {Badge} from "@mui/material"
import { Link } from 'react-router-dom';

function CartWidget() {
  const {getItemQty} = useContext(cartContext);
  return (
    <div>
      <Badge badgeContent={getItemQty()} color="success" height="20px" >
        <Link to="/cart">
          <ShoppingCartIcon style={{ color: 'white' }} />
        </Link>
      </Badge>
    </div>
  );
}

export default CartWidget