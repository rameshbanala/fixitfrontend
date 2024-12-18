import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RouteChangeLink } from "./styledComponents";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Example icons
import styled from "styled-components";

const LogoTitle = styled.h1`
  font-family: Bree Serif;
  letter-spacing: 4px;
  font-size: 42px;
  color: #e87715;
`;
const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;

function LandingPageNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <LogoImg src="/fixit_avatar.jpg" />
          <LogoTitle>FixIt</LogoTitle>
        </Navbar.Brand>
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
