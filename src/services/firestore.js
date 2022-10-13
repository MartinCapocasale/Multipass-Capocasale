// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs,doc,getDoc,query,where} from "firebase/firestore"

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

export default firestore;