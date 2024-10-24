import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { HomeLink, LogoImg, LogoTitle } from "./styledComponents";

const AdminNavBar = () => {
  const navigte = useNavigate();
  const onLogout = () => {
    Cookies.remove("jwt_token");
    Cookies.remove("user_type");
    navigte("/");
  };
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <HomeLink to="/">
          <LogoImg src="/fixit_avatar.jpg" />
          <LogoTitle>Fixit</LogoTitle>
        </HomeLink>
        <Nav className="ms-auto">
          <Button variant="info" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavBar;
