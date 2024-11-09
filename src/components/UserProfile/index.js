import UserNavBar from "../UserNavBar";
import ProfilePageWorker from "./ProfilePageWorker";
import Footer from "../Footer";
import { Component } from "react";

//api status should be initialized and api status should be sent to navbar
class UserProfile extends Component {
  render() {
    return (
      <>
        <UserNavBar />
        <ProfilePageWorker />
        <Footer />
      </>
    );
  }
}

export default UserProfile;
