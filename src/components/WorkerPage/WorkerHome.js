// WorkerHome.js
import React from "react";
import CustomCarousel from "./Carousel";
import { Chrono } from "react-chrono";
import {
  WorkerHomeWrapper,
  StepsSection,
  ChronoContainer,
  FaqCard,
  FaqSection,
} from "./WorkerHomeStyles";
import DashboardCard from "./DashboardCard";

const WorkerHome = () => {
  const steps = [
    {
      title: "Step 1",
      cardTitle: "Receive the Job Order",
      cardDetailedText:
        "Check the incoming service requests for electricians, plumbers, or carpenters based on your expertise.",
    },
    {
      title: "Step 2",
      cardTitle: "Confirm the Service",
      cardDetailedText:
        "Select the job you can take, review the details, and confirm your availability to the client.",
    },
    {
      title: "Step 3",
      cardTitle: "Perform the Service",
      cardDetailedText:
        "Arrive at the job site on time and complete the service efficiently to ensure customer satisfaction.",
    },
    {
      title: "Step 4",
      cardTitle: "Process the Payment",
      cardDetailedText:
        "Ensure the payment is completed through our secure system after the job is successfully done.",
    },
  ];

  const faqs = [
    {
      question: "How do I receive service requests?",
      answer:
        "Service requests are sent through the app, and you can choose which ones to accept based on your expertise and availability.",
    },
    {
      question: "What if I need to cancel a job?",
      answer:
        "You can cancel a job request if you have a valid reason, but please notify the client as soon as possible.",
    },
    {
      question: "How is my payment processed?",
      answer:
        "Payments are processed automatically through the app once the service is confirmed by the client.",
    },
    {
      question: "Can I set my own schedule?",
      answer:
        "Yes, you can set your availability in the app to ensure you work when it suits you best.",
    },
    // Additional FAQ items...
  ];

  return (
    <WorkerHomeWrapper>
      <CustomCarousel />

      <StepsSection id="steps">
        <h2>Simple Steps to Start Your Services</h2>
        <p>
          As a professional with FixIt, follow these four simple steps to start
          earning.
        </p>

        <ChronoContainer>
          <Chrono
            items={steps}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "#007BFF",
              secondary: "#EFEFEF",
              cardForeColor: "#333",
            }}
            cardWidth={350}
          />
        </ChronoContainer>
      </StepsSection>
      <DashboardCard />
      <FaqSection>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FaqCard key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </FaqCard>
        ))}
      </FaqSection>
    </WorkerHomeWrapper>
  );
};

export default WorkerHome;
