import UserNavBar from "../UserNavBar";
import Footer from "../Footer";
import { Component } from "react";

//api status should be initialized and api status should be sent to navbar
class UserProfile extends Component {
    render() {
        return (
            <>
                <UserNavBar />
                <Footer />
            </>
        )
    }
}

export default UserProfile;