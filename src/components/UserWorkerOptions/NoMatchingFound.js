import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Search icon
import { useNavigate } from 'react-router-dom';

const NoMatchingsFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Content>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <MainMessage>No Results Found</MainMessage>
        <SubMessage>
          We couldn’t find what you’re looking for. Try adjusting your search or explore other options.
        </SubMessage>
        <HomeButton onClick={handleGoHome}>Back to Home</HomeButton>
      </Content>
      <BackgroundBlob />
    </Wrapper>
  );
};

export default NoMatchingsFound;

// Animations
const blobAnimation = keyframes`
  0% {
    transform: scale(1) translateX(0);
  }
  50% {
    transform: scale(1.2) translateX(-50px);
  }
  100% {
    transform: scale(1) translateX(0);
  }
`;

// Styled Components
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f8ff;
  overflow: hidden;
`;

const Content = styled.div`
  z-index: 2;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.div`
  font-size: 80px;
  color: #ff6b6b;
  animation: pulse 1.5s infinite;
  margin-bottom: 20px;
`;

const MainMessage = styled.h1`
  font-size: 36px;
  color: #2d2d2d;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

const SubMessage = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  max-width: 500px;
  line-height: 1.6;
`;

const HomeButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4);
  }
`;

const BackgroundBlob = styled.div`
  position: absolute;
  top: -100px;
  right: -150px;
  width: 600px;
  height: 600px;
  background-color: #ff6b6b;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${blobAnimation} 10s ease-in-out infinite;
`;

