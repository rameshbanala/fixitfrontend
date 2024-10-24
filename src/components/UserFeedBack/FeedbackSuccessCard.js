import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Confetti Animation
const confettiAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  top: -10px;
  left: ${(props) => props.$left}%;
  animation: ${confettiAnimation} ${(props) => props.$duration}s ease-in infinite;
`;

const Emoji = styled.div`
  font-size: 80px;
`;

const ThankYouText = styled.h2`
  color: #333;
  font-size: 2em;
  margin: 20px 0;
`;

const MessageText = styled.p`
  color: #555;
  font-size: 1.1em;
  margin-bottom: 30px;
`;

const ActionButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;



const FeedbackSuccessCard = () => {
  const navigate = useNavigate();

  // Generate confetti elements
  const confettiElements = [...Array(10)].map((_, index) => ({
      left: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      duration: Math.random() * 3 + 2,
  }));

  const onReturnHome = () => {
      navigate("/");
  };

  return (
      <CardContainer>
          {/* Confetti Elements */}
          {confettiElements.map((confetti, index) => (
              <Confetti
                  key={index}
                  $left={confetti.left} // Use $ prefix for transient prop
                  color={confetti.color}
                  $duration={confetti.duration} // Use $ prefix for transient prop
              />
          ))}

          {/* Success Emoji */}
          <Emoji>🎉</Emoji>

          {/* Text Content */}
          <ThankYouText>Thank You!</ThankYouText>
          <MessageText>We appreciate your feedback. It helps us improve!</MessageText>

          {/* Action Button */}
          <ActionButton onClick={onReturnHome}>Return to Homepage</ActionButton>
      </CardContainer>
  );
};


export default FeedbackSuccessCard;
