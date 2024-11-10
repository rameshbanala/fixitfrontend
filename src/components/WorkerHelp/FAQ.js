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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What type of document can I submit for verification?",
      answer: "You need to submit Aadhaar for document verification.",
    },
    {
      question: "How do I know if the verification is successful?",
      answer: "After submission of document, the verification is successful.",
    },
    {
      question: "How can I verify the submitted document thoroughly?",
      answer:
        "Our team further verifies the submitted document after submission.",
    },
    {
      question:
        "If after the verification of document, how can I know about this?",
      answer: "Try to log in to the details, and if you’re login then it goes.",
    },
    {
      question: "Where can I see my orders after any user book?",
      answer: "You can check orders in the Dashboard.",
    },
    {
      question: "Where can I find all the bookings?",
      answer: "You can check in the Dashboard.",
    },
    {
      question: "Can I filter the bookings?",
      answer:
        "Yes, already separated by in-progress, active, cancelled & complete.",
    },
    {
      question: "Can I have cancelled option before starting the booking?",
      answer: "Yes, you can cancel before starting.",
    },
    {
      question: "Can I cancel the booking after starting?",
      answer: "No, after starting, cancellation is not possible.",
    },
    {
      question: "Whether I have option to leave a worker which it is improper?",
      answer: "Yes, you have this type of option.",
    },
    {
      question: "Can I accept another work when active work is ongoing?",
      answer: "No, you should do the active work and complete it after.",
    },
    {
      question: "How will the bill be generated?",
      answer:
        "The person (worker) who will accept (i.e., you) to work will generate the bill.",
    },
    {
      question: "When to add all items which are needed to complete the bill?",
      answer: "While bill generating, you can add.",
    },
    {
      question: "What basis I need to change the item price I need to enter?",
      answer: "Based on your charge and the items need to complete the work.",
    },
    {
      question: "Is there any discount I need to give to customers?",
      answer:
        "No, discount you need not to give and this discount is part of the company bill generation.",
    },
    {
      question: "Can I cancel the work after bill generation?",
      answer: "No, you need to work and complete the work.",
    },
    {
      question:
        "Where I need to change my profession, change it but given in the field?",
      answer: "Yes, you can change it.",
    },
    {
      question: "Where I need to book a seat, others work is this possible?",
      answer: "Yes, but you need to sign in and sign up in user account.",
    },
    {
      question: "Can I accept another work when active work is ongoing?",
      answer: "No, you should do the active work and complete it after.",
    },
    {
      question: "How will the bill be generated?",
      answer:
        "The person (worker) who will accept (i.e., you) to work will generate the bill.",
    },
    {
      question: "When to add all items which are needed to complete the bill?",
      answer: "While bill generating, you can add.",
    },
    {
      question: "What basis I need to change the item price I need to enter?",
      answer: "Based on your charge and the items needed to complete the work.",
    },
    {
      question: "Is there any discount I need to give to customers?",
      answer:
        "No, discount you need not to give and this discount is part of the company bill generation.",
    },
    {
      question: "Can I cancel the work after bill generation?",
      answer: "No, you need to work and complete the work.",
    },
    {
      question:
        "Where I need to change my profession, change it but given in the field?",
      answer: "Yes, you can change it.",
    },
    {
      question: "Where I need to book a seat, others work is this possible?",
      answer: "Yes, but you need to sign in and sign up in the user account.",
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

export default FAQ;
