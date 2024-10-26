import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProfileCard from "../UserPage/ProfileCard";
import { CustomNavDropdown, DropdownLink } from "../UserPage/styledComponents";
import { HomeLink, LogoImg, LogoTitle } from "../AdminPage/styledComponents";

const UserNavBar = ({ apiStatus }) => {
  const userName = Cookies.get("name");
  const navigte = useNavigate();
  const onLogout = () => {
    Cookies.remove("jwt_token");
    Cookies.remove("user_type");
    Cookies.remove("name");
    navigte("/");
  };
  return (
    <Navbar expand="lg" className="p-3" style={{ backgroundColor: "#FBFAF8" }}>
      <HomeLink to="/">
        <LogoImg src="/fixit_avatar.jpg" />
        <LogoTitle>Fixit</LogoTitle>
      </HomeLink>
      {apiStatus === "FAILURE" ||
      apiStatus === "LOADING" ||
      apiStatus === "INITIAL" ? null : (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <DropdownLink to="/">Home</DropdownLink>
              <DropdownLink to="/user/services">Services</DropdownLink>
              <DropdownLink to="/user/bookings">My Bookings</DropdownLink>
              <CustomNavDropdown
                title={<ProfileCard name={userName} />}
                id="basic-nav-dropdown"
                align="end"
              >
                <DropdownLink to="/user/profile">My Profile</DropdownLink>
                <NavDropdown.Divider />
                <DropdownLink to="/user/help">Help</DropdownLink>
                <NavDropdown.Divider />
                <DropdownLink to="/user/feedback">Feedback</DropdownLink>
                <NavDropdown.Divider />
                <Button variant="info" onClick={onLogout} className="m-2">
                  Logout
                </Button>
              </CustomNavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default UserNavBar;
