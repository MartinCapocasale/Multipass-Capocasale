const data = [
    {
        id: 1,
        title:"El Señor de los Anillos",
        imagen : "/assets/peliculas/theLordOfTheRings.jpg",
        description: "La comunidad del anillo es la primer entrega de esta saga de peliculas basadas en los libro de Tolkien",
        price: "$1000",
        category: "peliculas",

    },
    {   id: 2,
        title:"The Dark Knight",
        imagen : "/assets/peliculas/El_caballero_oscuro.jpg",
        description: "Pelicula de Batman y el Guason",
        price: "$5000",
        category: "peliculas",},
    
    {   id: 3,
        title:"Breaking Bad",
        imagen : "/assets/series/breaking_bad.jpg",
        description: "Serie de 8 temporadas de un profesore que hace Drogas",
        price: "$15000",
        category: "series",}
];

function getItems(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(data)
        },1500);
    })
}

export function getItemsByCaterogy(cat){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const itemFound = data.filter( (item) => { 
                return cat === item.category  
              })
              resolve(itemFound);
            }, 1500);
    })
}


export function getSingleItem(idItem){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const itemFound = data.find((item) => { 
                return item.id === parseInt(idItem)
              });
              if(itemFound) resolve(itemFound);
              else reject(new Error("Item no encontrado"));
            }, 1500);
    });
}

export default getItems;