import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #db6b0f;
  font-family: Bree Serif;
  text-decoration: underline;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const SubHeading = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  font-family: Roboto;
`;

// ProfessionCards.styles.js

export const StyledCard = styled.div`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const CardBody = styled.div`
  padding: 15px;
  text-align: center;
`;

export const CardTitle = styled.h5`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  color: #555;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
