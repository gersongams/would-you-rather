import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 1rem;
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
      a {
        width: 100%;
      }
    }
  }
`;

const QuestionPreview = ({ id }) => {
  const {
    user: { name, avatarURL },
    optionOne: { text },
  } = useSelector((state) => {
    const allQuestions = state.questions;
    const allUsers = state.users;
    const question = allQuestions[id];
    const user = allUsers[question.author];
    return {
      ...question,
      user,
    };
  });

  return (
    <QuestionPreviewStyled>
      <div className="question-header">{name} asks:</div>
      <div className="question-container">
        <div className="question-avatar">
          <img src={avatarURL} alt="avatar" />
        </div>
        <div className="question-body">
          <h2>Would you rather</h2>
          <p>...{text}...</p>
          <Link to={`/questions/${id}`}>
            <Button ghost>View poll</Button>
          </Link>
        </div>
      </div>
    </QuestionPreviewStyled>
  );
};

export default QuestionPreview;
