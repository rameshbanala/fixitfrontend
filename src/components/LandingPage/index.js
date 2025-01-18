import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import LandingPageNavbar from "../LandingPageNavbar";
import Footer from "../Footer";
import Feedback from "./Feedback";
import UserView from "./UserView";
import WorkerView from "./WorkerView";
import "./index.css";
import {
  TitleSectionContainer,
  WelcomeMsg,
  WelcomeMsgSpan,
  CaptionForWelcome,
  TitleDesc,
  ImpactSection,
} from "./styledComponents";
import LandingPageCarousel from "./Carousel";

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

  if (jwt_token !== undefined) {
    switch (user_type) {
      case "USER":
        return <Navigate to="/user" />;
      case "WORKER":
        return <Navigate to="/worker" />;
      case "ADMIN":
        return <Navigate to="/admin" />;
      default:
        return null;
    }
  }

  return (
    <>
      <LandingPageNavbar />
      {titleSection()}
      <div className="main-container">
        <section className="carousel-section">
          <LandingPageCarousel />
        </section>

        {/* Workers View Section */}
        <section className="workers-view-section">
          <WorkerView /> {/* Worker View Component */}
        </section>

        {/* Users View Section */}
        <section className="users-view-section">
          <UserView /> {/* User View Component */}
        </section>

        {/* Feedback Section */}
        <section className="feedback-section">
          <Feedback />
        </section>

        {/* Impact Section */}
        <ImpactSection>
          <h2>Our Impact</h2>
          <p>
            FixIt has revolutionized home repair services by helping thousands
            of homeowners maintain and improve their homes with confidence.
          </p>
        </ImpactSection>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
