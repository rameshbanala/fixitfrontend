import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #faf7f0;
`;
export const LoginTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LogoImg = styled.img`
  height: 60px;
  width: 60px;
`;

export const LoginContainer = styled.form`
  width: 40%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 4px 0px 16px 0px #bfbfbf;
  padding: 10px;
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;

export const LoginTitle = styled.h1`
  font-family: Bree Serif;
  font-size: 42px;
  color: #f26f18;
  text-decoration: underline;
  font-weight: 800;
  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

export const InputContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-family: Roboto;
  font-size: 18px;
  color: #14112b;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const InputElement = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #0d0530;
  font-size: 18px;
  padding: 5px;
  color: #0d0530;
  padding-left: 14px;
  margin-top: 5px;
  outline: none;
  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
    font-size: 16px;
    margin-top: 8px;
  }
`;
export const SubmitBtn = styled(Button)`
  width: 90%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DontHaveAccountText = styled.p`
  font-size: 14px;
  color: grey;
  margin-bottom: 5px;
`;
export const DonthaveLink = styled(Link)`
  font-size: 15px;
  text-decoration: underline;
`;
export const PasswordElementContainer = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #0d0530;
  padding: 5px;
  color: #0d0530;
  padding-left: 14px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
    margin-top: 8px;
  }
`;
export const PasswordInputEl = styled.input`
  font-size: 18px;
  outline: none;
  border: 0px;
  width: 80%;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  color: #0d0530;
  &:hover {
    color: #f26f18;
  }
`;
export const SuccessCard = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;
