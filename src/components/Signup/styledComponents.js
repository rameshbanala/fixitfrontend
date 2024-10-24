import styled from "styled-components";
import { LoginTitle } from "../Login/styledComponents";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const SignupMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #faf7f0;
`;
export const SignupContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 4px 0px 16px 0px #bfbfbf;
  width: 65%;
  padding: 20px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  height: 60px;
  width: 60px;
`;
export const TitleOfThePage = styled(LoginTitle)`
  text-align: center !important;
  width: 100%;
`;
export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const TypeContainerTitle = styled.label`
  font-size: 28px;
  color: #0c0547;
  font-family: Roboto;
  margin-right: 12px;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;
export const SelectEl = styled.select`
  height: 35px;
  width: 50%;
  border: 1px solid #0e0b24;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
`;
export const OptionEl = styled.option`
  font-size: 18px;
  color: #0c0547;
  margin: 8px;
`;
export const SignupFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const InputContainer = styled.div`
  margin: 10px;
  width: 45%;
  margin-top: 15px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const InputLabelEl = styled.label`
  font-size: 22px;
  color: ${(props) => (props.$isPasswordNotMatched ? "red" : "#0b0352")};
  margin-bottom: 7px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const InputEl = styled.input`
  border: 1px solid
    ${(props) => (props.$isPasswordNotMatched ? "red" : "#04021a")};
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
  font-size: 18px;
  color: ${(props) => (props.$isPasswordNotMatched ? "red" : "#04021a")};
  height: 38px;
  width: 100%;
  outline: none;
`;
export const TempContainer = styled.div`
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 13px;
    margin-top: 10px;
  }
`;
export const TextAreaEl = styled.textarea`
  border: 1px solid #04021a;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
  font-size: 18px;
  color: #04021a;
  width: 100%;
`;
export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
export const SubmitBtnEl = styled(Button)`
  width: 50%;
  @media (max-width: 767px) {
    width: 75%;
  }
`;
export const ChangeText = styled.p`
  font-size: 16px;
  color: grey;
  margin: 5px;
  margin-top: 10px;
`;
export const RouteChangeLink = styled(Link)`
  text-decoration: underline;
`;
export const ChangeBtn = styled.button`
  background-color: transparent;
  text-decoration: underline;
  outline: none;
  cursor: pointer;
  border: 0px;
  color: grey;
`;
export const WorkOptionsMainContainer = styled.div`
  width: 100%;
  padding: 10px;
`;
export const WorkOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const WorkOptionItem = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin: 10px;
  @media (max-width: 767px) {
    width: 43%;
  }
`;
export const CheckBoxEl = styled.input`
  height: 22px;
  width: 22px;
  @media (max-width: 767px) {
    height: 18px;
    width: 18px;
  }
`;
export const CheckBoxLabel = styled.label`
  font-size: 16px;
  color: #020270;
  margin-left: 8px;
  @media (max-width: 767px) {
    font-size: 14px;
    margin-left: 5px;
  }
`;
