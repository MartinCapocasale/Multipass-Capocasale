import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';

function NavBar(){
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Multipass</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#peliculas">Peliculas</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

  export default NavBar;