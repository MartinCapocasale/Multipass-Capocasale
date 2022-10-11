import './App.css';
import Footer from "./components/Footer/Footer"; 
import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Cart from "./components/Cart/CartView"; 
import MyProvider from './context/cartContext';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <MyProvider>
          <NavBar/>
            <Routes>
                <Route path='/' element={
                  <ItemListContainer greeting="Hola!! Bienvenido a Multipass tienda de Peliculas y Series"/>
                }/>
                <Route path='/categoria/:cat' element={
                  <ItemListContainer/>
                }/>
                <Route path='/item-type/:id' element={
                  <ItemDetailContainer/>
                }/>
                <Route path='/cart' element={
                  <Cart/>
                }/>
                <Route path='*' element={
                  <h1>Error 404: Not Found</h1>
                }/>
            </Routes>
          <Footer/>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;