import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const fadeInOut = keyframes`
  0%, 90% { opacity: 1; }
  100% { opacity: 0; }
`;

const reduceBar = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

const SuccessCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #15d147; /* Updated color */
  color: #FFFBE6;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeInOut} 8s forwards;
  z-index: 10; /* Ensures it's on top of other elements */
`;

const Message = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(FaCheckCircle)`
  margin-right: 10px;
  font-size: 24px;
`;

const LoadingBarContainer = styled.div`
  width: 300px;
  background-color: #d3d3d3;
  height: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  position: fixed;
  top: 64px; /* Adjusted to be right under the card */
  left: 50%;
  transform: translateX(-50%);
  z-index: 9; /* Positioned beneath the card */
`;

const LoadingBar = styled.div`
  height: 100%;
  background-color: grey;
  animation: ${reduceBar} 7s linear forwards;
`;

const SuccessMessage = () => {
  return (
    <>
      <SuccessCard>
        <Message>
          <Icon />
          Submitted Details Successfully
        </Message>
      </SuccessCard>
      <LoadingBarContainer>
        <LoadingBar />
      </LoadingBarContainer>
    </>
  );
};

export default SuccessMessage;
