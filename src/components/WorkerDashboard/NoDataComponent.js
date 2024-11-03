import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #666;
  max-width: 400px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.6);
  }
`;

// Main Component
const NoBookingData = () => {
  const navigate = useNavigate();
  const clickOnHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Title>No Booking Data Found</Title>
      <Message>
        It seems you haven't received any bookings yet. Consider promoting your
        services to attract clients!
      </Message>
      <Button onClick={clickOnHome}>Home</Button>
    </Container>
  );
};

export default NoBookingData;
