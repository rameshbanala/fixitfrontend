// WorkerHomeStyles.js
import styled from "styled-components";

// Wrapper for the entire WorkerHome component
export const WorkerHomeWrapper = styled.div`
  font-family: "Roboto", sans-serif;
`;

// Styles for the steps section
export const StepsSection = styled.section`
  text-align: center;
  padding: 2rem;

  h2 {
    font-family: "Briseric", serif;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

// Styling for the Chrono container
export const ChronoContainer = styled.div`
  .chrono-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .chrono-title,
  .chrono-subtitle {
    transition: color 0.3s ease, font-weight 0.3s ease;
  }

  .chrono-card:hover .chrono-title,
  .chrono-card:hover .chrono-subtitle {
    color: #007bff;
    font-weight: bold;
  }

  .chrono-navigation,
  .chrono-layout {
    display: none;
  }
`;

// FAQ card styles
export const FaqCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

// FAQ section styles
export const FaqSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  color: #007bff;
  h2 {
    font-family: "Briseric", serif;
    text-align: center;
    font-size: 2rem;
  }
`;
