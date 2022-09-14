import './App.css';
import Footer from "./components/Footer/Footer"; 
import NavBar from "./components/NavBar/NavBar"; 
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Header/>
      <ItemListContainer greeting="Hola!! Bienvenido a mi tienda de Peliculas y Series"/>
      <Footer/>
    </div>
  );
}


export default App;