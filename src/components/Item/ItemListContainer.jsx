import getItems from "../../services/mockAPI";
import React, {useState,useEffect} from "react";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  let[data, setData] = useState([]);

  useEffect(()=> {
    getItems().then((respuestaDatos)=>{
      setData(respuestaDatos);
    });
  },[]);
 
return (
    <div>
        <h1>{props.greeting}</h1>
        <div className="main-container" >
          <ItemList data={data}/>
        </div>
    </div>
  );
}
