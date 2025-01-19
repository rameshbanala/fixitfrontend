import { Component } from "react";
import Table from 'react-bootstrap/Table';
import Cookies from "js-cookie";
import AdminNavBar from "./AdminNavBar";
import OptionItem from "./OptionItem";
import LoaderComponent from "../LoaderComponent";
import DetailsTable from "./DetailsTable";


import {
  OptionsContainer,
  DetailsContainer,
  AdminMainContianer,
  NoDataFoundImage,
  NoDataFoundContainer,
  NoDataTitle,
  LogoTitle,
  TableHeader,
} from "./styledComponents";

const options = [
  {
    optionType: "USER_DATA",
    displayText: "Users",
  },
  {
    optionType: "WORKERS_DATA",
    displayText: "Workers",
  },
  {
    optionType: "WORKER_APPLICATIONS",
    displayText: "Applications",
  },
  {
    optionType: "FEEDBACK",
    displayText: "Feedback"
  },
];

class AdminPage extends Component {
  state = {
    usersData: [],
    workersData: [],
    feedback: [],
    activeOption: options[0].optionType,
    isLoading: false,
  };

  onChangeActiveOption = (type) => {
    this.setState({ activeOption: type });
  };

  componentDidMount() {
    this.getData();
  }

  onVerified = () => {
    this.getData();
  };

  getData = async () => {
    this.setState({ isLoading: true });
    const jwtToken = Cookies.get("jwt_token");
    const url = `${process.env.REACT_APP_API_URL}/admin-page-details`;//"http://localhost:8000/admin-page-details"
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    const resData = await response.json();
    if (response.ok) {
      const userData = resData.usersData;
      const workerData = resData.workerData;
      const feedbackData = resData.feedback;
      this.setState({
        usersData: userData,
        workersData: workerData,
        feedback: feedbackData,
        isLoading: false,
      });
    } else {
      alert(resData.message);
    }
  };

  renderTheOptions = () => {
    const { activeOption } = this.state;
    return (
      <OptionsContainer>
        {options.map((eachOption) => (
          <OptionItem
            key={eachOption.optionType}
            optionData={eachOption}
            activeOption={activeOption}
            onChangeActiveOption={this.onChangeActiveOption}
          />
        ))}
      </OptionsContainer>
    );
  };

  renderLoader = () => <LoaderComponent />;

  renderFeedBack = () => {
    let count = 1;
    const { feedback } = this.state
    return (
      <>
        <Table responsive bordered striped>
          <thead>
            <tr>
              <TableHeader>S.no</TableHeader>
              <TableHeader>User_Type</TableHeader>
              <TableHeader>Rating</TableHeader>
              <TableHeader>Comments</TableHeader>
            </tr>
          </thead>
          <tbody>
            {feedback.map(eachFeedback => (
              <tr key={eachFeedback.id+count}>
                <td>{count++}</td>
                <td>{eachFeedback.user_type}</td>
                <td>{eachFeedback.rating}</td>
                <td>{eachFeedback.comments}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }

  renderNoDataView = () => (
    <NoDataFoundContainer>
      <NoDataFoundImage src="/no_data_found.jpg" />
      <NoDataTitle>No Data Found</NoDataTitle>
    </NoDataFoundContainer>
  );

  renderTheDetails = () => {
    const { activeOption, usersData, workersData } = this.state;

    const getVisibleData = () => {
      switch (activeOption) {
        case options[0].optionType:
          return usersData;
        case options[1].optionType:
          return workersData.filter((worker) => worker.is_verified !== "false");
        case options[2].optionType:
          return workersData.filter((worker) => worker.is_verified === "false");
        default:
          return [];
      }
    };

    if (activeOption === options[3].optionType) {
      return (
        <>
          <LogoTitle>Feedback Data</LogoTitle>
          {this.renderFeedBack()}
        </>
      )
    }
    const visibleData = getVisibleData();

    return (
      <>
        {visibleData.length === 0 ? (
          this.renderNoDataView()
        ) : (
          <DetailsTable
            activeOption={activeOption}
            visibleData={visibleData}
            onVerified={this.onVerified}
          />
        )}
      </>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <AdminNavBar />
        {this.renderTheOptions()}
        <AdminMainContianer>
          <DetailsContainer>
            {isLoading ? this.renderLoader() : this.renderTheDetails()}
          </DetailsContainer>
        </AdminMainContianer>

      </>
    );
  }
}

export default AdminPage;
