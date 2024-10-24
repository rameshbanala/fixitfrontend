import styled from "styled-components";

export const TitleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`
export const WelcomeMsg = styled.h1`
  font-family: Sofia;
  font-size: 48px;
  color: #030436;
  text-align: center;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 42px;
  }
`
export const WelcomeMsgSpan = styled.span`
  font-size: 62px;
  color: #e66312;
  font-weight: 500;
  font-family: Bree Serif;
`
export const CaptionForWelcome = styled.p`
  font-size: 28px;
  color: #e66312;
  font-family: Sofia;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
export const TitleDesc = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  max-width: 80%;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`