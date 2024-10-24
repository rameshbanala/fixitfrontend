import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const LogoTitle = styled.h4`
  font-family: Bree Serif;
  color: #f26f18;
  font-size: 32px;
  margin-left: 10px;
`;
export const OptionsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OptionEl = styled.li`
  margin: 10px;
  @media (max-width: 767px) {
    margin: 7px;
  }
`;
export const TableHeader = styled.th`
  color: #13034c !important;
  font-size: 18px;
  font-family: Bree Serif;
  letter-spacing: 1.3px;
`;
export const OptionBtn = styled.button`
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
  border-bottom: ${(props) => (props.$isactive ? "4px solid #ed7811" : "0px")};
  background-color: ${(props) => (props.$isactive ? "#f0e7e4" : "transparent")};
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 22px;
  color: ${(props) => (props.$isactive ? "#ed7811" : "#03052e")};
  font-family: Bree Serif;
  @media (max-width: 767px) {
    font-size: 18px;
    height: 40px;
  }
`;
export const AdminMainContianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 4px 0px 16px 0px #bfbfbf;
  padding: 20px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 95%;
  }
`;
export const NoDataFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const NoDataFoundImage = styled.img`
  width: 30%;
  @media (max-width: 767px) {
    width: 80%;
  }
`;
export const PdfLinkText = styled.a`
  color: blue !important;
  text-decoration: underline !important;
`;

export const NoDataTitle = styled.h1`
  font-size: 32px;
  color: orange;
  font-family: Bree Serif;
`;
