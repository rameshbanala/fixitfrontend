import styled from "styled-components";
import { NavDropdown as BootstrapNavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoaderContainer = styled.div`
  height: 70vh;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const GreetingsTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => (props.$isTitle ? "#050a42" : "#e37814")};
  font-family: Bree Serif;
  margin-left: 12px;
`;

export const UserProfileCard = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
`;
export const DropdownLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 8px 16px;
  display: block;
  border-radius: 5px;
  &:hover {
    background-color: #f1f1f1;
    color: #000;
  }
`;

export const CustomNavDropdown = styled(BootstrapNavDropdown)`
  .dropdown-toggle::after {
    display: none;
  }
  @media (max-width: 767px) {
  }
`;

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundImage = styled.img`
  width: 60%;
  max-width: 250px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 32px;
  color: #cc6d0e;
`;
