import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./cartview.css";
import { Link } from "react-router-dom";


function CartView() {

    const { cart,isInCart, deleteItem,totalPriceCart,emptyCart} = useContext(cartContext);

    const [endInCart, setEndInCart] = useState(true);
    
    function handleBuyOrder(id) {
      if(isInCart(id)){
        setEndInCart(false);
      }
    }

  return (
      <div className="contenedor">
        <h1>Tu Carrito</h1>
        <table>
          <thead>
            <tr>
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
                <tr>
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
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <h3><b>Total de Compra: ${totalPriceCart()}</b></h3>
          <p><button type="alert" onClick={() => emptyCart()}>Vaciar Todo el Carrito</button></p>
          { endInCart?
                        <Link to="/"><button onClick={handleBuyOrder}>Finalizar Compra</button> </Link> 
                        :
                        <h3>Segui Comprando</h3>
				              }
        </div>
      </div>
  );
}

export default CartView;