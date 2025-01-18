import styled from "styled-components";

export const TitleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
export const WelcomeMsg = styled.h1`
  font-family: Sofia;
  font-size: 48px;
  color: #030436;
  text-align: center;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 42px;
  }
`;
export const WelcomeMsgSpan = styled.span`
  font-size: 62px;
  color: #e66312;
  font-weight: 500;
  font-family: Bree Serif;
`;
export const CaptionForWelcome = styled.p`
  font-size: 28px;
  color: #e66312;
  font-family: Sofia;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
export const TitleDesc = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  max-width: 80%;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const ImpactSection = styled.section`
padding: 40px 20px;
background-color: #f9f9f9;
text-align: center;
border-radius: 8px;
margin: 20px auto;
max-width: 900px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  padding: 30px 15px;

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}
`;
