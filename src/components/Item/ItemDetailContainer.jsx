import {getSingleItem} from "../../services/mockAPI";
import React, {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {
    let[data, setData] = useState({});

    const {id} = useParams();
  
    useEffect(()=> {getSingleItem(id).then((respuestaDatos)=>{setData(respuestaDatos)})},[id]);
 
return (
    <section className="text-gray-600 body-font"> 
        <ItemDetail data={data}/>
    </section>
  );
}
