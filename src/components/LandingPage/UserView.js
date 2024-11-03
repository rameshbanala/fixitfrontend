import React from 'react';
import styled from 'styled-components';

const UserViewContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #160236;
    transform: scale(1.02);
  }
`;

const Heading = styled.h2`
  color: #ed7f1f;
  font-size: 1.8rem;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  ${UserViewContainer}:hover & {
    color: #160236;
  }
`;

const Paragraph = styled.p`
  color: #160236;
  font-size: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;

  ${UserViewContainer}:hover & {
    color: #160236;
  }
`;

const UserViewContent = styled.div`
  margin-top: 20px;
  color: #333;

  p {
    font-size: 0.95rem;
  }
`;

const UserView = () => {
  return (
    <UserViewContainer>
      <Heading>User Dashboard</Heading>
      <Paragraph>
        Welcome to the FixIt user dashboard. As a registered user, you are expected to adhere to our rules and regulations.
      </Paragraph>
      <UserViewContent>
        <p>
          Sign up today to access a world of home repair services at your fingertips. Once registered, you can order services, pause or cancel them as needed, and make payments securely. Our platform ensures a seamless experience, connecting you with trusted professionals for all your repair needs.
        </p>
      </UserViewContent>
    </UserViewContainer>
  );
};

export default UserView;
