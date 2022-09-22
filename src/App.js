import './App.css';
import Footer from "./components/Footer/Footer"; 
import NavBar from "./components/NavBar/NavBar"; 
import Header from './components/Header/Header';
/*import ItemListContainer from './components/Item/ItemListContainer';*/
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      {/*<ItemListContainer greeting="Hola!! Bienvenido a mi tienda de Peliculas y Series"/>*/}
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}


export default App;