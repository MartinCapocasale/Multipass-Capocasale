import getItems, { getItemsByCaterogy } from "../../services/mockAPI";
import React, {useState,useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

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
        <h1>{props.greeting}</h1>
        <div className="main-container" >
          <ItemList data={data}/>
        </div>
    </div>
  );
}
