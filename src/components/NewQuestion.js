import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { handleAddQuestion } from "../actions/questions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NewQuestionStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 700px;
  & .newQuestion-header {
    background: rgba(220, 220, 220, 0.4);
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
  }
  & .newQuestion-container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    p {
      margin: 0 0 1rem 0;
    }
    h2 {
      margin: 0 0 1.2rem 0;
    }
    .divider {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      span {
        display: flex;
        position: relative;
        align-items: center;
      }
      & .line {
        border-bottom: 0.5px solid #d9d9d9;
        width: 100%;
      }
    }
    input {
      border-radius: 5px;
      padding: 0.8rem 1rem;
      border: 1px solid #d9d9d9;
      font-size: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  }
`;
const NewQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(value1, value2));
    setValue1("");
    setValue2("");
    history.push("/");
  };

  return (
    <NewQuestionStyled>
      <div className="newQuestion-header">Create New Question</div>
      <form onSubmit={handleSubmit} className="newQuestion-container">
        <p>Complete the questions</p>
        <h2>Would you rather...</h2>
        <input
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Enter Option One Text here"
          type="text"
        />
        <div className="divider">
          <span className={"line"} />
          <span style={{ margin: "0 1rem" }}>OR</span>
          <span className={"line"} />
        </div>
        <input
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Enter Option Two Text here"
          type="text"
        />
        <Button disabled={value1 === "" || value2 === ""} type="submit">
          Submit
        </Button>
      </form>
    </NewQuestionStyled>
  );
};

export default NewQuestion;
