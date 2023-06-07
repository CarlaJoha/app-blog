import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
      <div  className="navBar-container">
        <Navbar className="navBar" >
          <Container >
            <Navbar.Brand href="/">YOUR LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <NavDropdown title="Información" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">Acerca de ...</NavDropdown.Item>
                  <NavDropdown.Item href="/testimonios" >
                    Testimonios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact">Contacto</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dashboard">
                    Acceder
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      );
};

export default NavBar;
