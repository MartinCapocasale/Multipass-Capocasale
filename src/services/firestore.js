// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs,doc,getDoc,query,where,addDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKYJm9yo3iJvrFE7LlAsNl6PSq3dm2s04",
  authDomain: "multipass-247c2.firebaseapp.com",
  projectId: "multipass-247c2",
  storageBucket: "multipass-247c2.appspot.com",
  messagingSenderId: "859400265556",
  appId: "1:859400265556:web:19421d78320e40e3b232c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export async function getItems(){
    const miColleccion = collection(firestore,"data");
    let snapShotDB = await getDocs(miColleccion);
    let dataDocs = snapShotDB.docs.map((documento) => {
        let docFormateado = {...documento.data(), id:documento.id}
        return docFormateado;
    });
    return dataDocs;
}
export async function getSingleItem(idParams){
    const docRef = doc(firestore,"data",idParams);
    const docSnapShot = await getDoc(docRef);
    return {...docSnapShot.data(),id: docSnapShot.id}
    

}
export async function getItemsByCaterogy(catParams){
    const collectionRef = collection(firestore,"data");
    const queryCategory =  query(collectionRef,where("category", "==",catParams));
    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = {...documento.data(), id:documento.id}
        return docFormateado;
    });
    return dataDocs;
    

}

export async function createBuyOrder(orderData){
    const miColleccion = collection(firestore,"orders");
    let respuesta = await addDoc(miColleccion,orderData);
    return (respuesta.id)
}

export async function exportDataToFirestore(){
    const bdd = [
        {
            id: 1,
            title:"El Señor de los Anillos",
            imagen : "/assets/peliculas/theLordOfTheRings.jpg",
            description: "La comunidad del anillo",
            price: 1000,
            category: "peliculas",
            director: "Peter Jackson",
            anio: "2001",
            estrellas: 4.5,
    
        },
        {   id: 2,
            title:"The Dark Knight",
            imagen : "/assets/peliculas/El_caballero_oscuro.jpg",
            description: "Pelicula de Batman y el Guason",
            price: 5000,
            category: "peliculas",
            director: "Christopher Nolan",
            anio: "2008",
            estrellas: 4,
        },
        
        {   id: 3,
            title:"Breaking Bad",
            imagen : "/assets/series/breaking_bad.jpg",
            description: "Serie de 8 temporadas",
            price: 15000,
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
            price: 2000,
            category: "peliculas",
            director: "Francis Ford Coppola",
            anio: "1972",
            estrellas: 4.5,
    
        },
        {   id: 5,
            title:"Thor Love And Thunder",
            imagen : "/assets/peliculas/Thor_Love_and_Thunder.jpg",
            description: "Thor intenta evitar la extinción de los dioses.",
            price: 6000,
            category: "peliculas",
            director: "Taika Waititi",
            anio: "2022",
            estrellas: 3,
        },
        
        {   id: 6,
            title:"The Office",
            imagen : "/assets/series/the_office.jpg",
            description: "La adaptación de Estados Unidos",
            price: 10000,
            category: "series",
            director: "Greg Daniels",
            anio: "2005-2013",
            estrellas: 4,
        },
    
        {   id: 7,
            title:"Vikings",
            imagen : "/assets/series/vikings.jpg",
            description: "El vikingo Ragnar Lothbrok",
            price: 10000,
            category: "series",
            director: "	Michael Hirst",
            anio: "2013-2020",
            estrellas: 3.5,
        }
    ];
    const collectionRef = collection(firestore,"data")
    
    /**let itemSinId = bdd.map(item =>{
        return {item.title,item.imagen,item.description,item.price,item.category,item.director,item.anio,item.estrellas}
    } )
    **/
    for(let item of bdd){
        const newDoc = await addDoc(collectionRef,item);
        console.log("Doc created",newDoc.id)
    }
}


export default firestore;