import { useNavigate } from "react-router-dom";
import { FaHandPointDown } from "react-icons/fa";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px 25px;
  text-align: center;
  background-color: #fffaf3;
  border: 1px solid #c37808;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: rgb(253, 131, 50);
  margin-bottom: 15px;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #333333;
  margin-bottom: 25px;
  line-height: 1.5;
`;

const ActionButton = styled.button`
  background-color: #ff6600;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e55b00;
    transform: scale(1.05);
  }
`;
const IconWrapper = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  color: rgb(247, 127, 47);
`;
const ServiceCard = () => {
  const navigte = useNavigate();
  const onGetServices = () => {
    navigte("/user/services");
  };
  return (
    <CardContainer>
      <CardTitle>Need Services Right Away?</CardTitle>
      <CardDescription>
        Don’t wait! Click below to explore and book services instantly.
      </CardDescription>
      <IconWrapper>
        <FaHandPointDown />
        <FaHandPointDown />
      </IconWrapper>
      <ActionButton onClick={onGetServices}>Get Services</ActionButton>
    </CardContainer>
  );
};

export default ServiceCard;
