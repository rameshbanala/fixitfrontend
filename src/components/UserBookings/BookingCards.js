import React, { useState } from "react";
import styled from "styled-components";
import { GrInProgress } from "react-icons/gr";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaThumbsUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Button } from "react-bootstrap";
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
  MainDetailsContainer,
  ButtonConatiner,
  BillCard,
  BillCardTitle,
  BillDataContainer,
  BillAmountContainer,
  BillData,
  BillAmount,
} from "./styledComponents";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background */
  z-index: 999;
`;

const PopupContent = styled.div`
  text-align: center;
  padding: 30px;
  max-width: 400px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000; /* Higher than overlay */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ConfirmButton = styled(Button)`
  background-color: #ff6347;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  color: #fff;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff4500;
  }
`;

const CancelPopupButton = styled(Button)`
  background-color: #ddd;
  color: #333;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #bbb;
  }
`;

const BookingCards = (props) => {
  const {
    cardData,
    activeBookingId,
    onChangeActiveBookingId,
    onCancelBooking,
    onPayBill,
  } = props;

  const [openPopup, setOpenPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // State to store the popup type

  const cancelBooking = () => {
    onCancelBooking(cardData.bookingId);
    setOpenPopup(false); // Close popup after cancellation
  };

  const payBill = () => {
    onPayBill(cardData.bookingId); // Function to handle bill payment
    setOpenPopup(false); // Close popup after payment
  };

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
  const showCancel =
    cardData.bookingStatus === "CANCELLED" ||
    cardData.bookingStatus === "COMPLETED";
  const showBill =
    cardData.bookingStatus !== "IN PROGRESS" && cardData.totalBill !== null;
  const showPayBill = cardData.bookingStatus === "ACTIVE";

  return (
    <BookingCard $isActive={isActive}>
      <BookingCardTitleSection
        onClick={() => onChangeActiveBookingId(cardData.bookingId)}
      >
        <BookingCardTitle>{cardData.workType.toUpperCase()}</BookingCardTitle>
        {getStatusBadge()}
        <BookingCardTime>
          Booked at: {new Date(cardData.bookedAt).toLocaleString()}
        </BookingCardTime>
        <ToggleBtn>{isActive ? <FaChevronUp /> : <FaChevronDown />}</ToggleBtn>
      </BookingCardTitleSection>
      <ExpandableContent $isActive={isActive}>
        <MainDetailsContainer>
          <BookingCardDetailsContainer>
            <TitleAndData $isTitle>Booking id:</TitleAndData>
            <TitleAndData>{cardData.bookingId}</TitleAndData>
          </BookingCardDetailsContainer>
          <BookingCardDetailsContainer>
            <TitleAndData $isTitle>Booking Status:</TitleAndData>
            <TitleAndData>{cardData.bookingStatus}</TitleAndData>
          </BookingCardDetailsContainer>
          <BookingCardDetailsContainer>
            <TitleAndData $isTitle>
              Current Change in Booking Status:
            </TitleAndData>
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
        </MainDetailsContainer>
        {showBill ? (
          <BillCard>
            <BillCardTitle>Bill Summary:</BillCardTitle>
            <BillDataContainer>
              <BillAmountContainer>
                <BillData>
                  <TitleAndData $isTitle>Cost Of The Work:</TitleAndData>
                  <BillAmount>
                    +
                    <BiRupee />
                    {cardData.totalBill - 20}
                  </BillAmount>
                </BillData>
                <BillData>
                  <TitleAndData $isTitle>Platform Fee:</TitleAndData>
                  <BillAmount>
                    +
                    <BiRupee />
                    20
                  </BillAmount>
                </BillData>
              </BillAmountContainer>
              <BillAmountContainer>
                <BillData>
                  <TitleAndData $isTitle>Total Bill:</TitleAndData>
                  <BillAmount>
                    <BiRupee />
                    {cardData.totalBill}
                  </BillAmount>
                </BillData>
              </BillAmountContainer>
            </BillDataContainer>
            {showPayBill && (
              <Button
                variant="success"
                onClick={() => {
                  setPopupType("PAY");
                  setOpenPopup(true);
                }}
              >
                Pay Bill
              </Button>
            )}
          </BillCard>
        ) : (
          ""
        )}

        {!showCancel && (
          <ButtonConatiner>
            <Button
              variant="danger"
              onClick={() => {
                setPopupType("CANCEL");
                setOpenPopup(true);
              }}
            >
              Cancel Booking
            </Button>
          </ButtonConatiner>
        )}

        {openPopup && (
          <>
            <Overlay onClick={() => setOpenPopup(false)} />
            <PopupContent>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                {popupType === "CANCEL"
                  ? "Confirm Cancellation"
                  : "Confirm Payment"}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {popupType === "CANCEL"
                  ? "Are you sure you want to cancel this booking? This action cannot be undone."
                  : "Are you sure you want to proceed with the payment? This action cannot be undone."}
              </p>
              <ConfirmButton
                onClick={popupType === "CANCEL" ? cancelBooking : payBill}
              >
                {popupType === "CANCEL" ? "Yes, Cancel" : "Yes, Pay"}
              </ConfirmButton>
              <CancelPopupButton onClick={() => setOpenPopup(false)}>
                Close
              </CancelPopupButton>
            </PopupContent>
          </>
        )}
      </ExpandableContent>
    </BookingCard>
  );
};

export default BookingCards;
