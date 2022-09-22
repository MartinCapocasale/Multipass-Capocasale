import './App.css';
import Footer from "./components/Footer/Footer"; 
import NavBar from "./components/NavBar/NavBar"; 
import Header from './components/Header/Header';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Header/>
        <Routes>
          <Route path='/' element={
            <ItemListContainer greeting="Hola!! Bienvenido a mi tienda de Peliculas y Series"/>
          }/>
          <Route path='/categoria/:cat' element={
            <ItemListContainer/>
          }/>
          <Route path='/item-type/:id' element={
            <ItemDetailContainer/>
          }/>
          <Route path='*' element={
            <h1>Error 404: Not Found</h1>
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;