import { FaRegClock, FaRegSmile } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { BookingDataCard } from "./styledComponents";

import styled from "styled-components";
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BookingType = styled.h3`
  font-size: 22px;
  color: #007bff;
  margin-right: 10px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Status = styled.span`
  font-size: 18px;
  color: ${(props) => {
    switch (props.$status) {
      case "COMPLETED":
        return "#155724"; // Dark green for completed
      case "IN PROGRESS":
        return "#856404"; // Dark yellow for in progress
      case "CANCELLED":
        return "#721c24"; // Dark red for cancelled
      default:
        return "#000"; // Fallback to black
    }
  }};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${(props) => {
    switch (props.$status) {
      case "COMPLETED":
        return "#d4edda";
      case "ACTIVE":
        return "#d4edda";
      case "IN PROGRESS":
        return "#fff3cd"; // Light yellow background
      case "CANCELLED":
        return "#f8d7da"; // Light red background
      default:
        return "#fff"; // Fallback to white
    }
  }};

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 4px 8px;
  }
`;
const Details = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #6c757d;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ClickButton = styled.button`
  border: 0px;
  color: grey;
  font-size: 18px;
  background-color: transparent;

  &:hover {
    color: blue;
  }
`;
const Icons = styled.span`
  margin-left: 5px;
  font-size: 16px;
`;

const BookingCard = (props) => {
  const { booking } = props;

  return (
    <BookingDataCard to={`/worker/dashboard/${booking.bookingId}`}>
      <Header>
        <BookingType>{booking.workType.toUpperCase()}</BookingType>
        <Status $status={booking.bookingStatus}>{booking.bookingStatus}</Status>
      </Header>
      <Details>
        <div>
          <FaRegClock style={{ marginRight: "5px" }} /> Booked at:{" "}
          {new Date(booking.bookedAt).toLocaleString()}
        </div>
        <div>
          <FaRegSmile style={{ marginRight: "5px" }} /> Contact:{" "}
          {booking.userEmail}
        </div>
      </Details>
      <ButtonContainer>
        <ClickButton>
          Click Here
          <Icons>
            <FaAnglesRight />
          </Icons>
        </ClickButton>
      </ButtonContainer>
    </BookingDataCard>
  );
};
export default BookingCard;
