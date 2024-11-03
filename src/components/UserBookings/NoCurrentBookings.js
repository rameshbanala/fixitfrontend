// NoBookingsCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #007bff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  color: #007bff;
  margin-bottom: 10px;
`;

const Message = styled.p`
  color: #6c757d;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoCurrentBookings = () => {
  const navigate = useNavigate();
  const onBookNow = () => {
    navigate("/user/services");
  };
  return (
    <CardContainer>
      <Title>No Current Bookings</Title>
      <Message>You don't this type of bookings at this moment.</Message>
      <Message><b>Change the filters or Explore our Services....</b></Message>
      <div>
        <ActionButton onClick={onBookNow}>Explore Services</ActionButton>
      </div>
    </CardContainer>
  );
};

export default NoCurrentBookings;
