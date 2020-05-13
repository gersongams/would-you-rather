import React from "react";
import QuestionCard from "./QuestionCard";
import QuestionForm from "./QuestionForm";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import QuestionResults from "./QuestionResults";

const Question = () => {
  const { questionId } = useParams();
  const questionBody = useSelector((state) => {
    const allQuestions = state.questions;
    const allUsers = state.users;
    const question = allQuestions[questionId];
    const user = question ? allUsers[question.author] : null;
    const answeredQuestions = allUsers[state.authedUser].answers;
    return {
      ...question,
      user,
      hasUserResponded: Object.keys(answeredQuestions).includes(questionId),
      response: answeredQuestions[questionId],
    };
  });

  if (!questionBody.user) {
    return <Redirect to="/" />;
  }

  const {
    user: { name, avatarURL },
    optionOne,
    optionTwo,
    hasUserResponded,
    response,
  } = questionBody;

  return (
    <QuestionCard title={`${name} asks:`} avatar={avatarURL}>
      <div className="question-body">
        {hasUserResponded ? (
          <QuestionResults
            optionOne={optionOne}
            optionTwo={optionTwo}
            response={response}
          />
        ) : (
          <QuestionForm
            qid={questionId}
            question1={optionOne.text}
            question2={optionTwo.text}
          />
        )}
      </div>
    </QuestionCard>
  );
};

export default Question;
