import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/1mind.jpg';

function Header() {
  return (
    <Navbar expand="lg" className="header-bg" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="1MindExch" style={{height: '40px', width: 'auto'}} />
          <span className="logo-text">1MINDEXCH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#services" className="text-light">
              Services
            </Nav.Link>
            <Nav.Link href="#exchanges" className="text-light">
              Exchanges
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;