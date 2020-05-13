import React, { useCallback, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

const QuestionForm = ({ qid, question1, question2 }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState();

  const submitQuestion = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(handleSaveQuestionAnswer(qid, selectedOption));
    },
    [dispatch, qid, selectedOption]
  );

  const handleChangeRadioButton = useCallback((e) => {
    const { value } = e.target;
    setSelectedOption(value);
  }, []);

  return (
    <form onSubmit={submitQuestion}>
      <h2>Would You Rather...</h2>
      <div className="form-item">
        <input
          type="radio"
          id="optionOne"
          name="question"
          value="optionOne"
          onChange={handleChangeRadioButton}
        />
        <label htmlFor="optionOne">{question1}</label>
      </div>
      <div className="form-item">
        <input
          type="radio"
          id="optionTwo"
          name="question"
          value="optionTwo"
          onChange={handleChangeRadioButton}
        />
        <label htmlFor="optionTwo">{question2}</label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default QuestionForm;
