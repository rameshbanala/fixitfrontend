import { Button } from "react-bootstrap";
import styled from "styled-components";

export const WorkerProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 10px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    height: 85vh;
  }
`;

export const Containers = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$isLeft ? "flex-end" : "flex-start"};
  padding: 15px;

  @media (max-width: 767px) {
    align-items: flex-start;
    width: 90%;
  }
`;

export const WorkerImage = styled.img`
  max-height: 300px;
  width: 85%;
`;

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WorkerTitle = styled.h1`
  font-family: ${props => props.$isTitle ? "Bree Serif" : "Roboto"};
  font-size: ${props => props.$isTitle ? "22px" : "20px"};
  margin: 0px;
  color: ${props => props.$isTitle ? "#ed7615" : "#07043d"};
  margin-left: 10px;
  margin-top: 10px;
  font-weight: ${props => props.$isTitle ? "bold" : "500"};
  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const WorkerDesc = styled.p`
  font-size: 16px;
  color: #07043d;
  padding: 10px;
`;

export const RatingStars = styled.p`
  font-size: 28px;
  color: ${props => props.$isFill ? "#ed7615" : "grey"};
  margin-left: 10px;
  padding-top: 22px;
`
export const RatingStarsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  align-self: flex-end;
`

export const BookingBtns = styled(Button)`
  margin-left: 15px;
`