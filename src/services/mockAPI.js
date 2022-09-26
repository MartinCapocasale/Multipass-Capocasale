const data = [
    {
        id: 1,
        title:"El Señor de los Anillos",
        imagen : "/assets/peliculas/theLordOfTheRings.jpg",
        description: "La comunidad del anillo",
        price: "$1000",
        category: "peliculas",
        director: "Peter Jackson",
        anio: "2001",
        estrellas: 4.5,

    },
    {   id: 2,
        title:"The Dark Knight",
        imagen : "/assets/peliculas/El_caballero_oscuro.jpg",
        description: "Pelicula de Batman y el Guason",
        price: "$5000",
        category: "peliculas",
        director: "Christopher Nolan",
        anio: "2008",
        estrellas: 4,
    },
    
    {   id: 3,
        title:"Breaking Bad",
        imagen : "/assets/series/breaking_bad.jpg",
        description: "Serie de 8 temporadas",
        price: "$15000",
        category: "series",
        director: "Vince Gilligan",
        anio: "2008-2013",
        estrellas: 4.5,
    },
    {
        id: 4,
        title:"El Padrino 1",
        imagen : "/assets/peliculas/Elpadrino.jpg",
        description: "La novela de Mario Puzo acerca de la familia Corleone.",
        price: "$2000",
        category: "peliculas",
        director: "Francis Ford Coppola",
        anio: "1972",
        estrellas: 4.5,

    },
    {   id: 5,
        title:"Thor Love And Thunder",
        imagen : "/assets/peliculas/Thor_Love_and_Thunder.jpg",
        description: "Thor intenta evitar la extinción de los dioses.",
        price: "$6000",
        category: "peliculas",
        director: "Taika Waititi",
        anio: "2022",
        estrellas: 3,
    },
    
    {   id: 6,
        title:"The Office",
        imagen : "/assets/series/the_office.jpg",
        description: "La adaptación de Estados Unidos",
        price: "$10000",
        category: "series",
        director: "Greg Daniels",
        anio: "2005-2013",
        estrellas: 4,
    },

    {   id: 7,
        title:"Vikings",
        imagen : "/assets/series/vikings.jpg",
        description: "El vikingo Ragnar Lothbrok",
        price: "$10000",
        category: "series",
        director: "	Michael Hirst",
        anio: "2013-2020",
        estrellas: 3.5,
    }
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