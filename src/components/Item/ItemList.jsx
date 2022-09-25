import Item from './Item';
import "./item.css";


function ItemList(props) {
  return (
        <div className="cards">
          {props.data.map((item) => {
              return(
                
                  <Item
                  key={item.id}
                  id ={item.id}
                  title={item.title}
                  imagen={item.imagen}
                  description={item.description}
                  price={item.price}
                  />
              );
          })}
        </div>
   )
}

export default ItemList