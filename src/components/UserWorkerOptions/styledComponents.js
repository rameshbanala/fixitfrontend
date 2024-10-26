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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
  }
`;

export const OptionCardLink = styled(Link)`
  text-decoration: none;
  width: 28%;
  margin: 10px;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

export const WorkerCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkerImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const WorkerCardDesc = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const WorkerTitle = styled.h1`
  color: ${(props) => (props.$isTitle ? "#e08814" : "#0d0438")};
  font-family: ${(props) => (props.$isTitle ? "Bree Serif" : "Roboto")};
  font-size: 18px;
  margin-left: 8px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const NextPageBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 16px;
  align-self: flex-end;
  color: grey;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  svg {
    margin-right: 2px;
    font-size: 16px;
  }
`;
