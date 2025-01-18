import { Component } from "react";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import LoaderComponent from "../LoaderComponent";
import Footer from "../Footer";
import {
  GreetingsTitle,
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  TitleContainer,
} from "../UserPage/styledComponents";
import WorkerNavbar from "../WorkerNavbar";
import WorkerHome from "./WorkerHome";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};
class WorkerPage extends Component {
  state = { workerData: undefined, apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getUserData();
  }

  onRetry = () => {
    this.getUserData();
  };

  getUserData = async () => {
    console.log("entered api");
    const jwtToken = Cookies.get("jwt_token");
    const name = Cookies.get("name");
    if (name !== undefined) {
      this.setState({ apiStatus: apiStatusConstants.success });
      return null;
    }
    this.setState({ apiStatus: apiStatusConstants.loading });
    const url = "http://localhost:8000/get-worker-data";
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
      const { worker_data } = data;
      const mainData = {
        name: worker_data.name,
        dob: worker_data.dob,
        address: worker_data.address,
        city: worker_data.city,
        pincode: worker_data.pincode,
        isVerified: worker_data.is_verified,
      };
      Cookies.set("name", mainData.name);
      this.setState({
        workerData: mainData,
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

  renderSuccess = () => <WorkerHome />;

  renderFailure = () => (
    <NotFoundContainer>
      <NotFoundImage src="/not_found.jpeg" />
      <NotFoundTitle>Sorry, There is an issue</NotFoundTitle>
      <Button variant="primary" onClick={this.onRetry}>
        Retry
      </Button>
    </NotFoundContainer>
  );

  renderWorkerPage = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader();
      case apiStatusConstants.success:
        return this.renderSuccess();
      case apiStatusConstants.failure:
        return this.renderFailure();
      default:
        return null;
    }
  };

  render() {
    const { apiStatus } = this.state;
    return (
      <>
        <WorkerNavbar apiStatus={apiStatus} />
        <TitleContainer>
          <GreetingsTitle $isTitle>Welcome, </GreetingsTitle>
          <GreetingsTitle>
            {Cookies.get("name") ? Cookies.get("name").toUpperCase() : ""}
          </GreetingsTitle>
        </TitleContainer>
        {this.renderWorkerPage()}
        <Footer />
      </>
    );
  }
}

export default WorkerPage;
