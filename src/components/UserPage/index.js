import { Component } from "react";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import UserNavBar from "../UserNavBar";
import LoaderComponent from "../LoaderComponent";
import UserHome from "./UserHome";
import Footer from "../Footer";
import {
  GreetingsTitle,
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  TitleContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

class UserPage extends Component {
  state = { userData: undefined, apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getUserData();
  }

  onRetry = () => {
    this.getUserData();
  };

  getUserData = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const name = Cookies.get("name");
    if (name !== undefined) {
      this.setState({ apiStatus: apiStatusConstants.success });
      return null;
    }
    this.setState({ apiStatus: apiStatusConstants.loading });
    const url = `${process.env.REACT_APP_API_URL}/get-user-data`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      const { user_data } = data;
      console.log(user_data);
      const mainData = {
        id: user_data.id,
        name: user_data.name,
        email: user_data.email,
        dob: user_data.dob,
        phoneNo: user_data.phone_no,
        city: user_data.city,
        address: user_data.address,
        pincode: user_data.pincode,
      };
      Cookies.set("name", mainData.name);
      this.setState({
        userData: mainData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderLoader = () => (
    <LoaderContainer>
      <LoaderComponent />
    </LoaderContainer>
  );

  renderFailure = () => (
    <NotFoundContainer>
      <NotFoundImage src="/not_found.jpeg" />
      <NotFoundTitle>Sorry, There is an issue</NotFoundTitle>
      <Button variant="primary" onClick={this.onRetry}>
        Retry
      </Button>
    </NotFoundContainer>
  );

  renderSuccess = () => <UserHome />;

  renderUserPage = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader();
      case apiStatusConstants.failure:
        return this.renderFailure();
      case apiStatusConstants.success:
        return this.renderSuccess();
      default:
        return null;
    }
  };

  render() {
    const { apiStatus } = this.state;
    return (
      <>
        <UserNavBar apiStatus={apiStatus} />
        <TitleContainer>
          <GreetingsTitle $isTitle>Welcome, </GreetingsTitle>
          <GreetingsTitle>
            {Cookies.get("name") ? Cookies.get("name").toUpperCase() : ""}
          </GreetingsTitle>
        </TitleContainer>
        {this.renderUserPage()}
        <Footer />
      </>
    );
  }
}
export default UserPage;
