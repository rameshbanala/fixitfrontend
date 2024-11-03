import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  align-self: flex-start;
  font-family: Bree Serif;
  font-size: 42px;
  color: #f09322;
  text-decoration: underline;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const TitleAndDropDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DropDownContainer = styled.div`
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DropDownTitle = styled.label`
  font-size: 20px;
  color: #0a0412;
  font-family: Roboto;
  margin-right: 10px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DropDown = styled.select`
  border: 1px solid #e2eaf4;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  color: #010d1b;
  margin-left: 10px;
  width: 60%;
  outline: none;

  @media (max-width: 767px) {
    margin: 0px;
  }
`;
export const OptionItem = styled.option`
  cursor: pointer;
  height: 20px;
  padding-left: 15px;
`;
export const BookingCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  list-style-type: none;
  padding-left: 0px;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BookingCard = styled.li`
  background-color: #ffffff;
  box-shadow: ${(props) =>
    props.$isActive ? "0px 4px 16px 0px #5A85DB" : "0px 4px 14px 0px #bfbfbf"};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 15px;
  cursor: pointer;
`;

export const BookingCardTitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BookingCardTitle = styled.h1`
  font-size: 26px;
  color: #e0861f;
  font-family: Bree Serif;
  width: 30%;
  @media (max-width: 767px) {
    font-size: 18px;
    width: 30%;
  }
`;
export const StatusBadge = styled.div`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  background-color: ${(props) => {
    const { $status } = props;
    switch ($status) {
      case "IN PROGRESS":
        return "#FE990030";
      case "ACTIVE":
        return "#48E90940";
      case "CANCELLED":
        return "#E4080A40";
      case "COMPLETED":
        return "#48E90940";
      default:
        return null;
    }
  }};

  @media (max-width: 767px) {
    font-size: 10px;
    width: 30%;
  }
`;
export const BookingCardTime = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  width: 25%;

  @media (max-width: 767px) {
    font-size: 12px;
    width: 20%;
  }
`;
export const ToggleBtn = styled.button`
  background: linear-gradient(90deg, #4f8cf7, #1e40af);
  border: none;
  color: white;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #1e40af, #4f8cf7);
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    padding: 4px 6px;
  }
`;

export const ExpandableContent = styled.div`
  max-height: ${(props) =>
    props.$isActive
      ? "1000px"
      : "0"}; /* Set high max-height for active state */
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
  padding: ${(props) => (props.$isActive ? "15px" : "0")};
  background-color: #f8f9fa; /* Light background for better visibility */
  border-radius: 8px; /* Rounded corners for aesthetics */
  box-shadow: ${(props) =>
    props.$isActive
      ? "0 4px 10px rgba(0, 0, 0, 0.1)"
      : "none"}; /* Subtle shadow when active */
  margin-top: 10px; /* Space above the expandable content */

  /* Additional styles for smoother transition */
  transition-delay: ${(props) =>
    props.$isActive
      ? "0s"
      : "0.2s"}; /* Delay on closing to improve user experience */
`;
export const MainDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BookingCardDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 10px;

  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const TitleAndData = styled.h1`
  font-size: ${(props) => (props.$isTitle ? "20px" : "18px")};
  color: ${(props) => (props.$isTitle ? "#e86138" : "#0a0870")};
  font-family: Roboto;
  margin-left: 5px;

  @media (max-width: 767px) {
    font-size: ${(props) => (props.$isTitle ? "18px" : "16px")};
    width: 50%;
  }
`;

export const ButtonConatiner = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const BillCard = styled.div`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const BillCardTitle = styled.h3`
  font-family: Roboto;
  font-size: 24px;
  color: #d96b04;
  font-weight: bold;
`;
export const BillDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px;
`;
export const BillAmountContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 2px dashed #0f11a3;
`;
export const BillData = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BillAmount = styled(TitleAndData)`
  color: ${props => props.$isDiscount ? "#e30b0f":"#39ed3f"};
`