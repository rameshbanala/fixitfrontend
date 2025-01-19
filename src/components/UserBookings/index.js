import { Component } from "react";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import NoBookingsCard from "./NoBookingsCard";
import UserNavBar from "../UserNavBar";
import LoaderComponent from "../LoaderComponent";
import Footer from "../Footer";
import {
  LoaderContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
} from "../UserPage/styledComponents";

import {
  SuccessContainer,
  Title,
  TitleAndDropDown,
  DropDownContainer,
  DropDownTitle,
  DropDown,
  OptionItem,
  BookingCardsContainer,
} from "./styledComponents";
import BookingCards from "./BookingCards";
import PaginationControls from "./PaginationControls";
import NoCurrentBookings from "./NoCurrentBookings";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
  noBookings: "NO BOOKINGS",
};
const apiUrl = process.env.REACT_APP_API_URL;

const buttonItems = [
  {
    type: "ALL",
    displayText: "All",
  },
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

class UserBookings extends Component {
  state = {
    userBookings: [],
    activeOption: buttonItems[0].type,
    activeBookingId: null,
    apiStatus: apiStatusConstants.initial,
    currentPage: 1,
    itemsPerPage: 5,
  };

  componentDidMount() {
    this.getUserBookings();
  }

  onPageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  onRetry = () => {
    this.getUserBookings();
  };

  onChangeActiveOption = (event) => {
    this.setState({ activeOption: event.target.value });
  };

  onChangeActiveBookingId = (id) => {
    this.setState((prevState) => ({
      activeBookingId: prevState.activeBookingId === id ? null : id,
    }));
  };

  getUserBookings = async () => {
    this.setState({ apiStatus: apiStatusConstants.loading });
    const jwtToken = Cookies.get("jwt_token");
    const url = `${apiUrl}/booking-details`;
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
        //if there are no bookings
        this.setState({ apiStatus: apiStatusConstants.noBookings });
      } else {
        const userBookings = data.map((eachBooking) => ({
          bookingId: eachBooking.booking_id,
          bookingUserId: eachBooking.booking_user_id,
          bookingWorkerId: eachBooking.booking_worker_id,
          bookingStatus: eachBooking.b_status,
          workType: eachBooking.work_type,
          bookedAt: eachBooking.booked_at,
          statusChangedBy: eachBooking.status_changed_by,

          userName: eachBooking.user_name,
          userEmail: eachBooking.user_email,

          workerName: eachBooking.worker_name,
          workerEmail: eachBooking.worker_email,
          workerPhoneNo: eachBooking.worker_phone_no,
          workerCity: eachBooking.worker_city,
          workerAddress: eachBooking.worker_address,
          workerPincode: eachBooking.worker_pincode,

          totalBill: eachBooking.total_bill,
          billStatus: eachBooking.bill_status,
        }));
        //console.log(userBookings);
        this.setState({ userBookings, apiStatus: apiStatusConstants.success });
      }
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  onCancelBooking = async (bookingId) => {
    const url = `${apiUrl}/cancel-booking`;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking_id: bookingId }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      this.getUserBookings();
    } else {
      alert(data.message);
    }
  };

  onPayBill = async (bookingId) => {
    const url = `${apiUrl}/complete-booking`;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking_id: bookingId }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      this.getUserBookings();
    } else {
      alert(data.message);
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

  renderNoBookings = () => (
    <>
      <NoBookingsCard />
    </>
  );

  renderSuccess = () => {
    const {
      userBookings,
      activeBookingId,
      activeOption,
      currentPage,
      itemsPerPage,
    } = this.state;
    console.log(userBookings);
    const filteredData =
      activeOption === buttonItems[0].type
        ? userBookings
        : userBookings.filter((eachBooking) =>
            eachBooking.bookingStatus
              .toUpperCase()
              .includes(activeOption.toUpperCase())
          );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBookings = filteredData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    // console.log(filteredData);
    const isDataPresent = currentBookings.length !== 0;
    return (
      <>
        <SuccessContainer>
          <TitleAndDropDown>
            <Title>Your Bookings: </Title>
            <DropDownContainer>
              <DropDownTitle htmlFor="filterItems">
                Filter Bookings:{" "}
              </DropDownTitle>
              <DropDown
                id="filterItems"
                value={activeOption}
                onChange={this.onChangeActiveOption}
              >
                {buttonItems.map((eachItem) => (
                  <OptionItem key={eachItem.type} value={eachItem.type}>
                    {eachItem.displayText}
                  </OptionItem>
                ))}
              </DropDown>
            </DropDownContainer>
          </TitleAndDropDown>
          {isDataPresent ? (
            <>
              <BookingCardsContainer>
                {currentBookings.map((eachItem) => (
                  <BookingCards
                    key={eachItem.bookingId}
                    activeBookingId={activeBookingId}
                    cardData={eachItem}
                    onChangeActiveBookingId={this.onChangeActiveBookingId}
                    onCancelBooking={this.onCancelBooking}
                    onPayBill={this.onPayBill}
                  />
                ))}
              </BookingCardsContainer>
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={this.onPageChange}
              />
            </>
          ) : (
            <NoCurrentBookings />
          )}
        </SuccessContainer>
      </>
    );
  };

  renderUserBookings = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess();
      case apiStatusConstants.failure:
        return this.renderFailure();
      case apiStatusConstants.loading:
        return this.renderLoader();
      case apiStatusConstants.noBookings:
        return this.renderNoBookings();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <UserNavBar />
        {this.renderUserBookings()}
        <Footer />
      </>
    );
  }
}

export default UserBookings;
