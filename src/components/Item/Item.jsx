import ItemCount from "./ItemCount";
import "./item.css";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Item(props) {
  const urlDetalle = `/item-type/${props.id}`;
  return (
    <div className="card">
      <Link to={urlDetalle}>
        <img src={props.imagen} alt="" />
      </Link>
      <div className="card-body">
        <h2><b>{props.title}</b></h2>
        <p>{props.description}</p>
        <b>{props.price}</b>
        <ItemCount initial={1}stock={3}/>
        <Link to={urlDetalle}>
          <div className="d-grid gap-2">
            <Button variant="primary" >Ver Más</Button>{' '}
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Item;