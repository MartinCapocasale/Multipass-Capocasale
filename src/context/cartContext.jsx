import React, {useState,createContext} from "react";

export const cartContext = createContext();

const{Provider} = cartContext
const MyProvider =({children}) => {

    const [cart,setCart]= useState([])

    const isInCart = (id) =>{
        return cart.some(x => x.id === id)
    }
    const addItem = (item,count) =>{

        const newItem = {
            ...item,
            count
        }
        if (isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].count += count
            setCart(auxArray)
        }
        else {
            setCart([...cart,newItem])
        }
        
    }
    const emptyCart = () =>{
        return setCart([])
    }
    const deleteItem = (id) =>{
        return setCart(cart.filter(x => x.id !== id))
    }
    const getItemQty = () =>{
        return cart.reduce((acc,x) => acc += x.count, 0 )
    }
    const getItemPrice = () =>{
        return cart.reduce((acc, x) => acc += x.price * x.count, 0 )
    }
    function totalPriceCart() {
        let total = 0;
        cart.forEach((x) => (total = total + x.count * x.price));
        return total;
    }
    return <Provider value = {{cart,isInCart,addItem,emptyCart,deleteItem,getItemQty,getItemPrice,totalPriceCart}}> {children} </Provider>

} 

export default MyProvider;
