import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";

function NavBar(){
    return (
      <>
        <Navbar bg="black" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}><b>MULTIPASS</b></Navbar.Brand>
            <Nav className="me-auto">  
              <Nav.Link as={Link} to={"/"}><b>Home</b></Nav.Link>
              <Nav.Link as={Link} to={"/categoria/peliculas"}><b>Peliculas</b></Nav.Link>
              <Nav.Link as={Link} to={"/categoria/series"}><b>Series</b></Nav.Link>
              <Nav.Link as={Link} to={""}><b>About</b></Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>
      </>
    );
  }

  export default NavBar;