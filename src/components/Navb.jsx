import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className = "navbar-brand" to="/">Home</Link>
            <Link className = "navbar-brand" to="/other">Other</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;