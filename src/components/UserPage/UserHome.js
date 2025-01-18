// src/components/UserHome.js
import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
import AutoSlidingCarousel from "./Carousel";
import ServiceCard from "./ServiceCard";

// Styled components for layout and improved styling
const Container = styled.div`
  font-family: "Roboto", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #f4f8fb; /* Light background for contrast */
  border-radius: 12px;
`;

const StepsSection = styled.section`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const SectionTitle = styled.h2`
  font-family: "Briseric", serif;
  font-size: 2.5rem;
  color: #2b2b2b;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const FAQSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  text-align: left;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  font-family: "Briseric", serif;
  text-align: center;
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FAQCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background-color: #fafafa;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Question = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
`;

const Answer = styled.p`
  margin: 0.5rem 0 0;
  color: #555;
`;

const ChronoContainer = styled.div`
  margin-top: 1.5rem;

  .chrono-icons:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .chrono-timeline,
  .chrono-vertical-item {
    max-width: 100%;
  }
`;

const UserHome = () => {
  const steps = [
    {
      title: "Step 1",
      cardTitle: "Find Your Service",
      cardDetailedText:
        "Search for the service you need, whether it’s an electrician, plumber, or carpenter.",
    },
    {
      title: "Step 2",
      cardTitle: "Book a Professional",
      cardDetailedText:
        "Select the best professional for the job and confirm your booking in a few clicks.",
    },
    {
      title: "Step 3",
      cardTitle: "Get Service Quickly",
      cardDetailedText:
        "Our professionals arrive promptly to handle your repairs, saving you time and stress.",
    },
    {
      title: "Step 4",
      cardTitle: "Pay Securely",
      cardDetailedText:
        "Complete payment with our secure system after service completion.",
    },
  ];

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Select the service, choose a date, and confirm your booking.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including credit cards, debit cards, and digital wallets.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel up to 24 hours in advance without any charges.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support via the help section on our website or by calling our support number.",
    },
  ];

  return (
    <Container>
      {/* Carousel Section */}
      <AutoSlidingCarousel />

      {/* Steps Section */}
      <StepsSection>
        <SectionTitle>Easy Steps to Get Repairs Done</SectionTitle>
        <SectionSubtitle>
          Using FixIt is as easy as following these steps.
        </SectionSubtitle>

        {/* Chrono Timeline for Steps */}
        <ChronoContainer>
          <Chrono
            items={steps}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "#007BFF",
              secondary: "#F0F4F8",
              cardForeColor: "#333",
            }}
            cardWidth={350}
            slideShow
            hideControls
          />
        </ChronoContainer>
      </StepsSection>
      <ServiceCard />

      {/* FAQ Section */}
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        {faqs.map((faq, index) => (
          <FAQCard key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQCard>
        ))}
      </FAQSection>
    </Container>
  );
};

export default UserHome;
