import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Medico from "../assets/medico.svg";
import "../NavBar/navBar.scss";

const NavBar = () => {
  return (
    <Navbar  bg="light" expand="lg">
      <Container className="nav p-3" fluid>
        <Navbar.Brand as={Link} to='/Inicio'>
            <img className="img" src={ Medico } alt="Otorrinolaringólogo en Monterrey" />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to='/Inicio'>Otorrinolaringólogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='a' as={Link} to='/Inicio'>Inicio</Nav.Link>
            <Nav.Link className='a' as={Link} to='/Contacto'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;