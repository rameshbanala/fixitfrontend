import styled from "styled-components";
import { Link } from "react-router-dom";

export const WorkerCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  list-style-type: none;
  padding-left: 0px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const OptionCardLink = styled(Link)`
  text-decoration: none;
  width: 30%;
  margin: 10px;
  @media (max-width: 767px) {
    width: 43%;
  }
`;

export const WorkerCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 10px;
  width: 100%;
`;

export const WorkerImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media (max-width: 767px) {
    height: 150px;
  }
`;

export const WorkerCardDesc = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    padding: 5px;
  }
`;

export const WorkerTitle = styled.h1`
  color: ${props => props.$isTitle ? "#e08814" : "#0d0438"};
  font-family: ${props => props.$isTitle ? "Bree Serif" : "Roboto"};
  font-size: 18px;
  margin-left: 8px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NextPageBtn = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 16px;
  align-self: flex-end;
  color: grey;
  &:hover {
    color: blue;
  }
`