import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      return {
        users,
        questions,
      };
    }
  );
}

export function saveQuestion(quesion) {
  return _saveQuestion(quesion);
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
