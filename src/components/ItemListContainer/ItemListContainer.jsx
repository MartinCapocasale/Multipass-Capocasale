import Item from "../Item/Item";

export default function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div className="main-container" >
            <Item
            title="Producto 1"
            imagen="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
            body="cuerpo de tarjeta"
            precio="$100"
            />
        </div>
    </div>
  );
}
