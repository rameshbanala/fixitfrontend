import styled from "styled-components";

// Styled components for modern UI
export const FeedBackFormContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 12px #bfbfbf;
  @media (max-width: 767px) {
    width: 85%;
  }
`;
export const QuestionContainer = styled.div`
  margin-top: 15px;
`
export const MainTitle = styled.h1`
  font-size: 38px;
  color: #ed751f;
  font-family: Bree Serif;
  @media (max-width: 767px) {
    font-size: 32px;
    text-decoration: underline;
  }
`

export const QuestionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const EmojiRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px 0 20px 0;
`;

export const EmojiButton = styled.button`
  background-color: ${(props) => (props.$isSelected ? "#ed261f" : "transparent")};
  border: none;
  border-radius: 50%;
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CommentBox = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 16px;
  resize: none;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;