import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/cartContext";

function Checkout() {

  const context = useContext(cartContext);
  const { emptyCart } = context;

  return (
    <div>
      <h2>Gracias por tu compra en Multipass!!!!!</h2>

      <h5>Te va a llegar un mail a tu correo con la confirmacion de compra!</h5>

      <Link to="/"><button type="alert" onClick={() => emptyCart()}>Empeza una nueva compra</button></Link>
    </div>
  )
}

export default Checkout