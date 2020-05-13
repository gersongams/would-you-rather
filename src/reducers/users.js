import {
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  RECEIVE_USERS,
} from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      const { users } = action.payload;
      return {
        ...state,
        ...users,
      };
    case ADD_USER_QUESTION:
      const { authedUser, questionId } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: [...state[authedUser].questions, questionId],
        },
      };
    case ADD_USER_ANSWER:
      const { questionAnswer } = action.payload;
      return {
        ...state,
        [questionAnswer.authedUser]: {
          ...state[questionAnswer.authedUser],
          answers: {
            ...state[questionAnswer.authedUser].answers,
            [questionAnswer.qid]: questionAnswer.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
