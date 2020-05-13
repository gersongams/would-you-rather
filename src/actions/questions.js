import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { hideLoading, showLoading } from "react-redux-loading";
import { addUserAnswer, handleAddUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: {
    question,
  },
});

export const handleAddQuestion = (optionOneText, optionTwoText) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return saveQuestion({
    author: authedUser,
    optionOneText,
    optionTwoText,
  })
    .then((question) => {
      dispatch(addQuestion(question));
      dispatch(handleAddUserQuestion(question.id));
    })
    .then(() => {
      return dispatch(hideLoading());
    });
};

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    payload: {
      questions,
    },
  };
}

const saveAnswer = (questionAnswer) => ({
  type: SAVE_QUESTION_ANSWER,
  payload: {
    questionAnswer,
  },
});

export const handleSaveQuestionAnswer = (qid, answer) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();
  return saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  }).then(() => {
    dispatch(saveAnswer({ qid, answer, authedUser }));
    dispatch(addUserAnswer({ qid, answer, authedUser }));
  });
};
