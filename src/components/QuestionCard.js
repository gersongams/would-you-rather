import React from "react";
import styled from "styled-components";

const QuestionCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 700px;
  & .question-header {
    background: rgba(220, 220, 220, 0.4);
    padding: 1.2rem 1.6rem;
    font-size: 1.2rem;
  }
  & .question-container {
    display: flex;
    & .question-avatar {
      padding: 1.6rem;
      border-right: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      img {
        width: 150px;
        border-radius: 50%;
      }
    }
    & .question-body {
      display: flex;
      flex-direction: column;
      padding: 1.6rem;
      width: 100%;
      h2 {
        margin: 0 0 1rem 0;
      }
      .form-item {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        input {
          cursor: pointer;
        }
        label {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

const QuestionCard = ({ title, avatar, children }) => {
  return (
    <QuestionCardStyled>
      <div className="question-header">{title}</div>
      <div className="question-container">
        <div className="question-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        {children}
      </div>
    </QuestionCardStyled>
  );
};

export default QuestionCard;
