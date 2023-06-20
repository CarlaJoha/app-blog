import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
      <div  className="navBar-container">
        <Navbar className="navBar" >
          <Container >
            <Navbar.Brand href="/">YOUR LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="link" to='/' >Home</Link>
                <Link className="link" to='/blog' >Blog</Link>
                <NavDropdown className="dropDown" title="Información" id="basic-nav-dropdown">
                  <Link className="link-drop" to='/about' >Acerca de...</Link>
                  <Link className="link-drop" to='/testimonios' >Testimonios</Link>
                  <Link className="link-drop" to='/contact' >Contacto</Link>
                  <NavDropdown.Divider />
                  <Link className="link-drop" to='/login' >Acceder</Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      );
};

export default NavBar;
