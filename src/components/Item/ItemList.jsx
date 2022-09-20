import React from 'react'
import Item from './Item';

function ItemList(props) {
  return (
    <div>
        {props.data.map((item) => {
            return(
                <Item
                key={item.id}
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