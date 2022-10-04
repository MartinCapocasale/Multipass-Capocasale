import React from 'react'


function ItemCount(props) {
    const [count,setCount] = React.useState(props.initial)
    console.log("stock:",props.stock)

    function handleAdd(){
        if (count < props.stock){
            setCount(count+1)
        }
    }
    function handleSubs(){
        if (1 < count ){
            setCount(count-1)
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleSubs}><b> - </b></button>
            <span><b> {count} </b></span>
            <button onClick={handleAdd}><b> + </b></button>
        </div>
    <button onClick={() => props.onAddToCart(count)}>Agregar al Carrito</button>
    </div>
  )
}
export default ItemCount