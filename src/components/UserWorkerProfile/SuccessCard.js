import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0fff4; /* Light green background */
  border: 1px solid #c6f6d5; /* Subtle border */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 40px;
  color: #38a169; /* Green color */
  margin-right: 15px;
`;

const Message = styled.h2`
  color: #2f855a; /* Darker green */
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

const SubMessage = styled.p`
  color: #4a5568; /* Dark gray */
  font-size: 16px;
  margin: 5px 0 0;
  font-family: 'Arial', sans-serif;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const ButtonEl = styled(Button)`
  margin-left: 15px;
`

const SuccessCard = () => {
    const navigate = useNavigate();
    const onHome = () => {
        navigate("/")
    }
    const onBookings = () => {
        navigate("/user/bookings")
    }
    return (
        <CardContainer>
            <Icon>
                <FaCheckCircle />
            </Icon>
            <div>
                <Message>Booking Successful!</Message>
                <SubMessage>Your Booking is successful</SubMessage>
            </div>
            <ButtonsContainer>
                <ButtonEl variant="success" onClick={onHome}>Home</ButtonEl>
                <ButtonEl variant='success' onClick={onBookings}>My Bookings</ButtonEl>
            </ButtonsContainer>
        </CardContainer>
    );
};

export default SuccessCard;
