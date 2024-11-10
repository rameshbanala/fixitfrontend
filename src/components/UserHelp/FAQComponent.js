import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  background: #fff;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  background: #ed903e;
  color: #fff;

  &:hover {
    background: #0056b3;
  }
`;

const Answer = styled.div`
  padding: 15px;
  font-size: 1em;
  color: #555;
  background: #f1f1f1;
  line-height: 1.5;
`;

const IconWrapper = styled.div`
  font-size: 1.2em;
`;

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "I can't sign up with my email.",
      answer: "This might be due to an existing account with that email.",
    },
    {
      question: "I can't sign up as a USER.",
      answer: "Change the type of account from Customer to USER.",
    },
    {
      question: "Can I change my profile details?",
      answer: "Yes, go to Settings > Profile.",
    },
    {
      question: "Can I book multiple workers?",
      answer: "Yes, our platform provides this option.",
    },
    {
      question: "Can I book the same worker multiple times?",
      answer: "Yes, you can book them multiple times.",
    },
    {
      question: "Can I cancel the booking at any time?",
      answer:
        "No, you can only cancel if the booking is in In Progress or Active status.",
    },
    {
      question: "Can I view my booking history?",
      answer:
        "Yes, by clicking My Bookings and using the Filter option set to All.",
    },
    {
      question: "Can I view a particular status of bookings?",
      answer: "Yes, make sure to use the Filter option.",
    },
    {
      question: "Can I pay the bill even if I don’t like the price of work?",
      answer: "Yes, you can still make the payment.",
    },
    {
      question: "Can I give feedback on the service I booked?",
      answer: "Yes, you can provide feedback on the service.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {item.question}
            <IconWrapper>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </IconWrapper>
          </Question>
          {openIndex === index && <Answer>{item.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQSection>
  );
};

export default FAQComponent;
