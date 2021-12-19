// import logo from "../../assets/images/logo.jpg";
// import { NavLink as Link } from 'react-router-dom';
// import SignInButton from "../SignInButton/SignInButton";
// import SignUpButton from "../SignUpButton/SignUpButton";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import './Header.css'
const Header = () => {
    return ( <header>
     <Navbar className='navBar' expand="lg">
  <Container>
    <Navbar.Brand href="#home">Switch</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='navBarButtons' href="#home">Search</Nav.Link>
        <Nav.Link className='navBarButtons' href="#link">Profile</Nav.Link>
        <Nav.Link className='navBarButtons' href="#link">Diet</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </header>  );
}
 
export default Header;
