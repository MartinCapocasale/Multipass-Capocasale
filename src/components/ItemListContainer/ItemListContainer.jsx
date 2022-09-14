import Card from "../Card/Card"

export default function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div className="main container" >
            <Card title="Producto 1" />
            <Card title="Producto 2" price="$1.00" />
        </div>
    </div>
  );
}
