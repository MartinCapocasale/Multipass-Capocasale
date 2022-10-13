import  {getItems,getItemsByCaterogy } from "../../services/firestore";
import React, {useState,useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Header from '../Header/Header';

export default function ItemListContainer(props) {
  let[data, setData] = useState([]);

  const {cat} = useParams();

  useEffect(()=> {
    if (cat === undefined){
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    }
    else{
      getItemsByCaterogy(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
},[cat]);
  
 
return (
    <div>
        <Header titulo = {props.greeting}/>
        <ItemList data={data}/>
    </div>
  );
}
