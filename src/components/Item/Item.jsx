import Button from "../Button/Button";
import ItemCount from "./ItemCount";
import "./item.css";

function Item(props) {
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
        <Button text="Ver Mas"/>
        <ItemCount 
        initial={1}
        stock={3}/>
      </div>
    </div>
  );
}
export default Item;