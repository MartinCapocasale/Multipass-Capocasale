

function ItemDetail(props) {
        return (
            <section className="text-gray-600 body-font"> 
                <h1>{props.data.title}</h1>
                <img src={props.data.imagen}alt=""></img>
                <h3>{props.data.description}</h3>
                <h3>{props.data.price}</h3>
            </section>
        )
      }
export default ItemDetail;