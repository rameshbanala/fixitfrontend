import styled from "styled-components";

export const MainDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const WorkDataContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding: 15px;
  background-color: #007bff;
  border-radius: 8px 8px 0 0;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px;
  }
`;

export const CardBody = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  color: #007bff;
  font-weight: 600;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  color: #007bff;
  margin-right: 8px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const DetailText = styled.div`
  font-size: 16px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #555;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StatusTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$status === "PAID" ? "#25e635" : "#dc3545"};

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;
export const ExtraButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;
