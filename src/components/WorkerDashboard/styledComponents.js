import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashbardContainer = styled.div`
  padding: 20px;
`;

export const DashboardTitle = styled.h1`
  font-family: Bree Serif;
  font-size: 32px;
  color: #de5c25;
`;

export const OptionBtn = styled.button`
  height: 50px;
  padding: 0 10px;
  border: ${(props) => (props.$isactive ? `2px solid ${props.$border}` : "0")};
  background-color: ${(props) =>
    props.$isactive ? props.$background : "transparent"};
  color: ${(props) => (props.$isactive ? props.$text : "black")};
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 22px;
  display: flex;
  align-items: center;
  font-family: Bree Serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  @media (max-width: 767px) {
    font-size: 15px;
    height: 40px;
  }

  &:hover {
    background-color: ${(props) => props.$background};
    color: ${(props) => props.$text};
  }
`;

export const BtnIcon = styled.span`
  font-size: 20px;
  margin-right: 5px;
  color: inherit; // Inherits color from parent button
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const BookingCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  @media (max-width: 767px) {
    justify-content: center;
  }
  @media (max-width: 767px) {
    padding: 0px;
  }
`;

export const BookingDataCard = styled(Link)`
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  width: 30%;
  flex: 0 1 450px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 10px;
    margin: 5px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
