import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./cartview.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


function CartView() {
  const context = useContext(cartContext);
  const { cart, deleteItem,totalPriceCart,emptyCart} = context;

  let carritovacio = cart.length === 0;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <>
      <h1>Tu Carrito</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key ={item.id} className="cartList">
                  <td>
                    <img height={50} src={item.imagen} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.count}</td>
                  <td><button type="alert" onClick={() => deleteItem(item.id)}>X</button></td>
                  <td>${item.price * item.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>El total de tu compra es de $ {totalPriceCart()}</h3>
      <p><button type="alert" onClick={() => emptyCart()}>Vaciar Todo el Carrito</button></p>
      <CheckoutForm />
    </>
  );
}

export default CartView;