import styled from "styled-components";

export const FeedbackContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 30px;
  background-color: #f2f7fb;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export const FeedbackTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const EmojiContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
`;

export const EmojiButton = styled.button`
  background: ${(props) => (props.$isSelected ? "#ed261f" : "none")};
  border-radius: 50%;
  border: none;
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CommentsTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

export const Question = styled.h4`
  margin-top: 20px;
  color: #555;
`;