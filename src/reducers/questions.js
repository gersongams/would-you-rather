import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      const { questions } = action.payload;
      return {
        ...state,
        ...questions,
      };
    case ADD_QUESTION:
      const { question } = action.payload;
      return {
        ...state,
        [question.id]: question,
      };
    case SAVE_QUESTION_ANSWER:
      const { questionAnswer } = action.payload;
      return {
        ...state,
        [questionAnswer.qid]: {
          ...state[questionAnswer.qid],
          [questionAnswer.answer]: {
            ...state[questionAnswer.qid][questionAnswer.answer],
            votes: [
              ...state[questionAnswer.qid][questionAnswer.answer].votes,
              questionAnswer.authedUser,
            ],
          },
        },
      };
    default:
      return state;
  }
};
export default questions;
