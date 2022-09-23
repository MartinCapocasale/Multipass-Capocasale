import "./footer.css"
import {Link} from "react-router-dom";

function Footer(){
    return (
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> Acerca de nosotros</span> Somos una empresa lider en la venta de todo tipo de Peliculas y Series en formato digital,
            y formato fisico. Tambien tenemos colecciones de DVD y VHS de grandes clasicos de todo el mundo.
          </p>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span></span> Buenos Aires, Argentina</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+54) 911 9080 1540</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
             <p><Link to="">oficina@multipass.com</Link></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>Multipass<span> logo</span></h2>
          <p className="menu">
            <Link to="/">Home</Link> -
            <Link to="/categoria/peliculas">Peliculas</Link> -
            <Link to="/categoria/series">Series</Link> -
            <Link to="">Contact</Link> 
          </p>
          <p className="name"> Multipass - Copyright &copy; 2022, All Rights Reserved</p>
        </div>
      </footer>
    );
  }

export default Footer;