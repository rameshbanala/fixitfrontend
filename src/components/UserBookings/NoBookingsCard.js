import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoBookingsCard = () => {
  const navigate = useNavigate();
  const onClickExplore = () => {
    navigate("/user/services");
  };
  return (
    <Wrapper>
      <CardContainer>
        <Icon>📅</Icon>
        <Title>Place Your First Booking</Title>
        <Description>
          You currently have no upcoming bookings. Explore our services and make
          your first booking today.
        </Description>
        <ActionButton onClick={onClickExplore}>Explore Services</ActionButton>
      </CardContainer>
    </Wrapper>
  );
};

export default NoBookingsCard;

// Styled Components

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const CardContainer = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 60px;
  margin-bottom: 25px;
  color: #2ecc71;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #333333;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 30px;
`;

const ActionButton = styled.button`
  padding: 12px 28px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #27ae60;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;
