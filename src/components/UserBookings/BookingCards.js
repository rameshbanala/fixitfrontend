import { GrInProgress } from "react-icons/gr";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  BookingCard,
  BookingCardTitle,
  BookingCardTitleSection,
  StatusBadge,
  BookingCardTime,
  ToggleBtn,
  ExpandableContent,
  BookingCardDetailsContainer,
  TitleAndData,
} from "./styledComponents";

const BookingCards = (props) => {
  const { cardData, activeBookingId, onChangeActiveBookingId } = props;

  const getStatusBadge = () => {
    switch (cardData.bookingStatus) {
      case "IN PROGRESS":
        return (
          <StatusBadge $status="IN PROGRESS">
            <GrInProgress />
            <span style={{ marginLeft: "5px" }}>In Progress</span>
          </StatusBadge>
        );
      case "ACTIVE":
        return (
          <StatusBadge $status="ACTIVE">
            <FaThumbsUp />
            <span style={{ marginLeft: "5px" }}>Accepted</span>
          </StatusBadge>
        );
      case "CANCELLED":
        return (
          <StatusBadge $status="CANCELLED">
            <MdCancel />
            <span style={{ marginLeft: "5px" }}>Cancelled</span>
          </StatusBadge>
        );
      case "COMPLETED":
        return (
          <StatusBadge $status="COMPLETED">
            <BiSolidBadgeCheck />
            <span style={{ marginLeft: "5px" }}>Completed</span>
          </StatusBadge>
        );
      default:
        return null;
    }
  };

  const isActive = cardData.bookingId === activeBookingId;

  return (
    <BookingCard
      onClick={() => onChangeActiveBookingId(cardData.bookingId)}
      $isActive={isActive}
    >
      <BookingCardTitleSection>
        <BookingCardTitle>{cardData.workType}</BookingCardTitle>
        {getStatusBadge()}
        <BookingCardTime>
          Booked at: {new Date(cardData.bookedAt).toLocaleString()}
        </BookingCardTime>
        <ToggleBtn>{isActive ? <FaChevronUp /> : <FaChevronDown />}</ToggleBtn>
      </BookingCardTitleSection>
      <ExpandableContent $isActive={isActive}>
      <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Booking id:</TitleAndData>
          <TitleAndData>{cardData.bookingId}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Booking Status:</TitleAndData>
          <TitleAndData>{cardData.bookingStatus}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Current Change in Booking Status:</TitleAndData>
          <TitleAndData>{cardData.statusChangedBy}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Worker Name:</TitleAndData>
          <TitleAndData>{cardData.workerName}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Worker Email:</TitleAndData>
          <TitleAndData>{cardData.workerEmail}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Worker Phone No:</TitleAndData>
          <TitleAndData>{cardData.workerPhoneNo}</TitleAndData>
        </BookingCardDetailsContainer>
        <BookingCardDetailsContainer>
          <TitleAndData $isTitle>Booked For:</TitleAndData>
          <TitleAndData>{cardData.workType}</TitleAndData>
        </BookingCardDetailsContainer>
      </ExpandableContent>
    </BookingCard>
  );
};

export default BookingCards;
