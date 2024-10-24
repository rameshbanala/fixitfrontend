import { Link } from "react-router-dom";
import { NotFoundContainer, NotFoundImg, GotoText } from "./styledComponents";
import Cookies from "js-cookie";

const NotFound = () => {
  const jwt_token = Cookies.get("jwt_token");
  const user_type = Cookies.get("user_type");

  const getHomeLink = () => {
    if (!jwt_token) {
      return "/";
    }
    switch (user_type) {
      case "USER":
        return "/user";
      case "WORKER":
        return "/worker";
      case "ADMIN":
        return "/admin";
      default:
        return "/";
    }
  };

  return (
    <NotFoundContainer>
      <NotFoundImg src="/not_found.jpeg" />
      <GotoText>
        Go to Home Page <Link to={getHomeLink()} style={{ color: "blue", textDecoration: "underline" }}>Click Here</Link>
      </GotoText>
    </NotFoundContainer>
  );
};

export default NotFound;
