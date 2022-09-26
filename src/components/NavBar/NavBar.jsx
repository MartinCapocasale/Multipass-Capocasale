import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import NotificationWidget from '../NotificationWidget/NotificationWidget';
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
              <Nav.Link as={Link} to={"#"}><b>About</b></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="Buscar"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </Form>
            <CartWidget/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NotificationWidget/>
          </Container>
        </Navbar>
      </>
    );
  }

  export default NavBar;