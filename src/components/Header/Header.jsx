import "./header.css";
import Carousel from 'react-bootstrap/Carousel';

    function Header(props) {
      return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="500"
                    src="/assets/portada/portada2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <b><h1>Multipass</h1></b>
                    <b><h4>{props.titulo}</h4></b>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
    }
    
export default Header;