export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  payload: {
    users,
  },
});

export const addUserQuestion = (questionId, authedUser) => ({
  type: ADD_USER_QUESTION,
  payload: {
    questionId,
    authedUser,
  },
});

export const handleAddUserQuestion = (questionId) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(addUserQuestion(questionId, authedUser));
};

export const addUserAnswer = (questionAnswer) => ({
  type: ADD_USER_ANSWER,
  payload: {
    questionAnswer,
  },
});
