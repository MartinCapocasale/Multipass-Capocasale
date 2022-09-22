import Button from "../Button/Button";
import ItemCount from "./ItemCount";
import "./item.css";
import {Link} from "react-router-dom";

function Item(props) {
  const urlDetalle = `/item-type/${props.id}`;
  return (
    <div className="item">
      <div className="item-body">
        <div className="item-imagen ">
            <img src={props.imagen}alt=""></img> 
        </div> 
        <div className="item-title">
          <h3>{props.title}</h3>
        </div>
        <div className="item-description">
          <p>{props.description}</p>
          <h4>{props.price}</h4>
        </div>
        <Link to={urlDetalle}>
          <Button text="Ver Mas"/>
        </Link>
        <ItemCount 
        initial={1}
        stock={3}/>
      </div>
    </div>
  );
}
export default Item;