import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css"

function Card(props) {
  return (
    <div className="card-container">
        <div className="card-img">
            <img src={props.imagen} alt=""></img> 
        </div> 
        <div className="card-content">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>
          <div className="card-body">
            <p>{props.body}</p>
            <h4>{props.precio}</h4>
          </div>
        </div>
        <Button text="Ver Mas"/>
        <ItemCount 
        initial={1}
        stock={3}/>
    </div>
  );
}

export default Card