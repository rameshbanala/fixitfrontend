import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RouteChangeLink } from "./styledComponents";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Example icons

function LandingPageNavbar() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="ms-auto d-flex flex-row">
          {/* Use RouteChangeLink directly without wrapping Nav.Link */}
          <Nav.Item className="d-none d-lg-block">
            <RouteChangeLink to="/">
              <b>Home</b>
            </RouteChangeLink>
          </Nav.Item>
          <Nav.Item className="d-none d-lg-block">
            <RouteChangeLink to="/login">
              <b>Login</b>
            </RouteChangeLink>
          </Nav.Item>
          <Nav.Item className="d-none d-lg-block">
            <RouteChangeLink to="/signup">
              <b>Signup</b>
            </RouteChangeLink>
          </Nav.Item>
          {/* Icons for small devices */}
          <Nav.Item className="d-lg-none">
            <RouteChangeLink to="/">
              <FaHome size={24} />
            </RouteChangeLink>
          </Nav.Item>
          <Nav.Item className="d-lg-none">
            <RouteChangeLink to="/login">
              <FaSignInAlt size={24} />
            </RouteChangeLink>
          </Nav.Item>
          <Nav.Item className="d-lg-none">
            <RouteChangeLink to="/signup">
              <FaUserPlus size={24} />
            </RouteChangeLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default LandingPageNavbar;
