import { Component } from "react";
import Cookies from "js-cookie";
import { Button, Container } from "react-bootstrap";
import { RiArrowRightWideLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import UserNavBar from "../UserNavBar";
import Footer from "../Footer";
import LoaderComponent from "../LoaderComponent";
import withRouter from "./withRouter";
import {
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
} from "../UserPage/styledComponents";
import NoMatchingsFound from "./NoMatchingFound";
import { Heading } from "../UserServices/styledComponents";
import {
  WorkerCardsContainer,
  OptionCardLink,
  WorkerCard,
  WorkerImage,
  WorkerCardDesc,
  WorkerTitle,
  NextPageBtn,
  StarContainer,
} from "./styledComponents";

//navbar should have to send api status here api status constants to be initialized

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
  nodata: "NODATA",
};

class UserWorkerOptions extends Component {
  state = { workerData: [], apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getWorkerData();
  }

  onRetry = () => {
    this.getWorkerData();
  };

  getWorkerData = async () => {
    this.setState({ apiStatus: apiStatusConstants.loading });
    const jwtToken = Cookies.get("jwt_token");
    const reqType = this.props.params.type;
    const url = `http://localhost:8000/user-worker-options/?req_type=${reqType}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (data.length !== 0) {
        this.setState({
          workerData: data,
          apiStatus: apiStatusConstants.success,
        });
      } else {
        this.setState({ apiStatus: apiStatusConstants.nodata });
      }
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

  renderNoData = () => <NoMatchingsFound />;

  renderSuccess = () => {
    const { workerData } = this.state;
    const reqType = this.props.params.type;
    return (
      <WorkerCardsContainer>
        {workerData.map((eachWorker) => {
          const avatarUrl = `https://ui-avatars.com/api/?name=${eachWorker.name}&background=random`;
          const rating = Math.floor(Math.random() * 5) + 1; // Random rating from 1 to 5
          return (
            <OptionCardLink
              key={eachWorker.id}
              to={`/user/services/${reqType}/${eachWorker.id}`}
            >
              <WorkerCard>
                <WorkerImage src={avatarUrl} alt={`Worker${eachWorker.name}`} />
                <WorkerCardDesc>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <WorkerTitle $isTitle>Name:</WorkerTitle>
                    <WorkerTitle>{eachWorker.name}</WorkerTitle>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <WorkerTitle $isTitle>Profession:</WorkerTitle>
                    <WorkerTitle>{reqType}</WorkerTitle>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <WorkerTitle $isTitle>Rating:</WorkerTitle>
                    <StarContainer>
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color={index < rating ? "#ffc107" : "#e4e5e9"}
                        />
                      ))}
                    </StarContainer>
                  </div>
                  <NextPageBtn>
                    Click Here
                    <RiArrowRightWideLine />
                  </NextPageBtn>
                </WorkerCardDesc>
              </WorkerCard>
            </OptionCardLink>
          );
        })}
      </WorkerCardsContainer>
    );
  };
  renderOptionsPage = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader();
      case apiStatusConstants.failure:
        return this.renderFailure();
      case apiStatusConstants.success:
        return this.renderSuccess();
      case apiStatusConstants.nodata:
        return this.renderNoData();
      default:
        return null;
    }
  };

  onBack = () => {
    this.props.navigate(-1);
  };

  render() {
    return (
      <>
        <UserNavBar />
        <Container className="p-3">
          <Heading>Choose a worker</Heading>

          {this.renderOptionsPage()}

          <Button variant="secondary" onClick={this.onBack}>
            back
          </Button>
        </Container>

        <Footer />
      </>
    );
  }
}

export default withRouter(UserWorkerOptions);
