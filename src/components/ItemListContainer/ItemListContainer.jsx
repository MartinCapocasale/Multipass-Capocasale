import Card from "../Card/Card"

export default function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div className="main container" >
            <Card 
            title="Producto 1"
            imagen="https://place-hold.it/300X300"
            body="cuerpo de tarjeta"
            precio="$100"
             />
        </div>
    </div>
  );
}
