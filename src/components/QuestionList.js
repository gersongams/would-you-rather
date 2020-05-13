import React, { useCallback, useState } from "react";
import QuestionPreview from "./QuestionPreview";
import styled from "styled-components";
import { useSelector } from "react-redux";

const QuestionListStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 700px;
  & .questionList-header {
    background: white;
    font-size: 1.2rem;
    display: flex;
    & .questionList-tab {
      width: 50%;
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
      padding: 1.2rem 0;
      cursor: pointer;
      &:first-child {
        border-right: 1px solid #f0f0f0;
      }
    }
  }
  & .questionList-body {
    padding: 1.6rem;
  }
`;

const QuestionList = () => {
  const [selectedQuestions, setSelectedQuestions] = useState("unanswered");

  const questionIds = useSelector((state) => {
    const allQuestions = state.questions;
    return Object.keys(state.questions).sort(
      (a, b) => allQuestions[b].timestamp - allQuestions[a].timestamp
    );
  });

  const answerIds = useSelector((state) => {
    const allUsers = state.users;
    const user = allUsers[state.authedUser];
    return Object.keys(user.answers);
  });

  const getQuestions = useCallback(() => {
    if (selectedQuestions === "unanswered") {
      return questionIds.filter((item) => !answerIds.includes(item));
    } else if (selectedQuestions === "answered") {
      return questionIds.filter((item) => answerIds.includes(item));
    }
  }, [answerIds, questionIds, selectedQuestions]);

  return (
    <QuestionListStyled>
      <div className="questionList-header">
        <div
          style={
            selectedQuestions === "unanswered"
              ? { background: "#1890ff", color: "white" }
              : {}
          }
          onClick={() => setSelectedQuestions("unanswered")}
          className="questionList-tab"
        >
          Unaswered Questions
        </div>
        <div
          style={
            selectedQuestions === "answered"
              ? { background: "#1890ff", color: "white" }
              : {}
          }
          onClick={() => setSelectedQuestions("answered")}
          className="questionList-tab"
        >
          Answered Questions
        </div>
      </div>
      <div className="questionList-body">
        {getQuestions().map((id) => (
          <QuestionPreview key={id} id={id} />
        ))}
      </div>
    </QuestionListStyled>
  );
};

export default QuestionList;
