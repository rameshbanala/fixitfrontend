import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import LandingPageNavbar from "../LandingPageNavbar";
import Footer from "../Footer";
import {
  TitleSectionContainer,
  WelcomeMsg,
  WelcomeMsgSpan,
  CaptionForWelcome,
  TitleDesc,
} from "./styledComponents";

const welcomeMessage = () => (
  <>
    <WelcomeMsg>
      Welcome to <WelcomeMsgSpan>FixIt</WelcomeMsgSpan>
    </WelcomeMsg>
    <CaptionForWelcome>- Your Home Repair Solution</CaptionForWelcome>
    <TitleDesc>
      Connecting you with skilled professionals for all your home repair needs.
      From plumbing to electrical, we’ve got you covered.
    </TitleDesc>
  </>
);

const titleSection = () => (
  <TitleSectionContainer>{welcomeMessage()}</TitleSectionContainer>
);


const LandingPage = () => {
  const jwt_token = Cookies.get("jwt_token");
  const user_type = Cookies.get("user_type");

  if(jwt_token!==undefined){
    switch(user_type){
      case "USER":
        return <Navigate to="/user" />
      case "WORKER":
        return <Navigate to="/worker" />
      case "ADMIN":
        return <Navigate to="/admin" />
      default:
        return null
    }
  }

  return (
    <>
      <LandingPageNavbar />
      {titleSection()}
      <Footer />
    </>
  );
};

export default LandingPage;
