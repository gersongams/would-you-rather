import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import questions from "./questions";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  simpleReducer,
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
