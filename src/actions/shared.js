import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(hideLoading());
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    // dispatch(setAuthedUser(AUTHED_ID))
  });
};
