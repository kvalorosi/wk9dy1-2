import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function Navb() {
  return (
  
    <>
    
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">One Stop Bike Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className = "navbar-brand" to="/">Home</Link>
            <Link className = "navbar-brand" to="/other">Bikes</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;