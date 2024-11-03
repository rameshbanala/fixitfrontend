import { Component } from "react";
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import WorkerNavbar from "../WorkerNavbar";
import Footer from "../Footer";
import LoaderComponent from "../LoaderComponent";

import {
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
} from "../UserPage/styledComponents";
import NoBookings from "./NoBookings";
import {
  BookingCardsContainer,
  DashbardContainer,
  DashboardTitle,
} from "./styledComponents";
import FilterButtons from "./FilterButtons";
import { OptionsContainer } from "../AdminPage/styledComponents";
import NoDataComponent from "./NoDataComponent";
import BookingCard from "./BookingCard";

//api status should be initialized and api status should be sent to navbar

const buttonItems = [
  {
    type: "IN PROGRESS",
    displayText: "In Progress",
  },
  {
    type: "ACTIVE",
    displayText: "Active",
  },
  {
    type: "COMPLETED",
    displayText: "Completed",
  },
  {
    type: "CANCELLED",
    displayText: "Cancelled",
  },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
  noBookings: "NO BOOKINGS",
};

class WorkerDashboard extends Component {
  state = {
    workerBookings: [],
    activeButton: buttonItems[0].type,
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getBookingsData();
  }

  onRetry = () => {
    this.getBookingsData();
  };

  onChangeFilterOption = (type) => {
    this.setState({ activeButton: type });
  };

  getBookingsData = async () => {
    this.setState({ apiStatus: apiStatusConstants.loading });
    const jwtToken = Cookies.get("jwt_token");
    const url = "http://localhost:8000/booking-details";
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
      if (data.length === 0) {
        this.setState({ apiStatus: apiStatusConstants.noBookings });
      } else {
        const workerBookings = data.map((eachBooking) => ({
          bookingId: eachBooking.booking_id,
          bookingUserId: eachBooking.booking_user_id,
          bookingWorkerId: eachBooking.booking_worker_id,
          bookingStatus: eachBooking.b_status,
          workType: eachBooking.work_type,
          bookedAt: eachBooking.booked_at,
          statusChangedBy: eachBooking.status_changed_by,

          userName: eachBooking.user_name,
          userEmail: eachBooking.user_email,
          userPhoneNo: eachBooking.user_phone_no,

          workerName: eachBooking.worker_name,
          workerEmail: eachBooking.worker_email,
          workerPhoneNo: eachBooking.worker_phone_no,

          totalBill: eachBooking.total_bill,
          billStatus: eachBooking.bill_status,
        }));
        //console.log(workerBookings);
        this.setState({
          workerBookings,
          apiStatus: apiStatusConstants.success,
        });
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

  renderFilterOptions = () => {
    const { activeButton } = this.state;
    return (
      <OptionsContainer>
        {buttonItems.map((eachBtn) => (
          <FilterButtons
            key={eachBtn.type}
            button={eachBtn}
            activeButton={activeButton}
            onChangeFilterOption={this.onChangeFilterOption}
            buttonItems={buttonItems}
          />
        ))}
      </OptionsContainer>
    );
  };

  renderSuccess = () => {
    const { workerBookings, activeButton } = this.state;
    const filterData = workerBookings.filter((eachBooking) =>
      eachBooking.bookingStatus.includes(activeButton.toUpperCase())
    );

    console.log(filterData);
    const isNoData = filterData.length === 0;
    return (
      <DashbardContainer>
        <DashboardTitle>Your Dashbard</DashboardTitle>
        {this.renderFilterOptions()}
        {isNoData ? (
          <NoDataComponent />
        ) : (
          <BookingCardsContainer>
            {filterData.map((booking) => (
              <BookingCard
                key={booking.bookingId}
                booking={booking}
                onClick={() => this.handleCardClick(booking)}
              />
            ))}
          </BookingCardsContainer>
        )}
      </DashbardContainer>
    );
  };

  renderNoBookings = () => <NoBookings />;

  renderWorkerBookings = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader();
      case apiStatusConstants.success:
        return this.renderSuccess();
      case apiStatusConstants.failure:
        return this.renderFailure();
      case apiStatusConstants.noBookings:
        return this.renderNoBookings();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <WorkerNavbar />
        {this.renderWorkerBookings()}
        <Footer />
      </>
    );
  }
}

export default WorkerDashboard;
