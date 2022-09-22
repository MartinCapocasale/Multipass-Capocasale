import {getSingleItem} from "../../services/mockAPI";
import React, {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(id) {
    let[data, setData] = useState({});
  
    useEffect(()=> {getSingleItem(2).then((respuestaDatos)=>{setData(respuestaDatos)})},[]);
 
return (
    <section className="text-gray-600 body-font"> 
        <ItemDetail data={data}/>
        {/*<h1>{data.title}</h1>*/}
        {/*<img src={data.imagen}alt=""></img>*/}
    </section>
  );
}
