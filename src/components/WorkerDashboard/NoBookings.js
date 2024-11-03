import React from "react";
import styled from "styled-components";
import { FaRegCalendarTimes } from "react-icons/fa";

const NoBookingsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 450px;
  margin: 20px auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6f61;
  margin-bottom: 20px;
`;

const Message = styled.h2`
  font-size: 1.4rem;
  color: #333333;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Encouragement = styled.p`
  font-size: 1rem;
  color: #666666;
  margin-top: 0;
`;

const NoBookings = () => {
  return (
    <NoBookingsCard>
      <IconWrapper>
        <FaRegCalendarTimes />
      </IconWrapper>
      <Message>Ready and Waiting for Your First Booking!</Message>
      <Encouragement>
        As a dedicated professional, you’re all set for your first booking. Stay
        tuned!
      </Encouragement>
    </NoBookingsCard>
  );
};

export default NoBookings;
