import Button from "../Button/Button";
import "./card.css"

function Card(props) {
    console.log(props);
  return (
    <div className="card">
        <div className="card-img">
            <img src="https://place-hold.it/300X300" alt="card img"></img> 
        </div> 
        <div className="card-detail">
            <h3>{props.title}</h3>
            <p>Descripcion</p>
            <h4>Precio</h4>
        </div>
        <Button text="Ver Mas"/>
    </div>
  );
}

export default Card