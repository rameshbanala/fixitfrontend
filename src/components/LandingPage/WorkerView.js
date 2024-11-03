import React from 'react';
import styled from 'styled-components';

const WorkerViewContainer = styled.div`
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

  ${WorkerViewContainer}:hover & {
    color: #160236;
  }
`;

const Paragraph = styled.p`
  color: #160236;
  font-size: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;

  ${WorkerViewContainer}:hover & {
    color: #160236;
  }
`;

const WorkerViewContent = styled.div`
  margin-top: 20px;
  color: #333;

  p {
    font-size: 0.95rem;
  }
`;

const WorkerView = () => {
  return (
    <WorkerViewContainer>
      <Heading>Workers Dashboard</Heading>
      <Paragraph>
        Welcome to the FixIt worker dashboard. As a registered worker, you are expected to adhere to company rules and regulations.
      </Paragraph>
      <WorkerViewContent>
        <p>
          You will receive service orders from users for various trades such as plumbing, electrical work, carpentry, and more. Once an order is placed, you must promptly go to the workplace, complete the repair or trade-related task, and calculate the total payment. The user will make the payment, which you need to confirm, and the transaction will be recorded. After completion, you can return to the company and mark the job as done.
        </p>
      </WorkerViewContent>
    </WorkerViewContainer>
  );
};

export default WorkerView;
