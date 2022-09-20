const data = [
    {
        id: 1,
        title:"El Señor de los Anillos",
        imagen : "/assets/peliculas/theLordOfTheRings.jpg",
        description: "La comunidad del anillo es la primer entrega de esta saga de peliculas basadas en los libro de Tolkien",
        price: "$1000",

    },
    {   id: 2,
        title:"The Dark Knight",
        imagen : "/assets/peliculas/El_caballero_oscuro.jpg",
        description: "Pelicula de Batman y el Guason",
        price: "$5000",}
];

function getItems(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(data)
        },1500);
    })
}

export default getItems;