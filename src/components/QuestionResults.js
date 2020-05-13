import React, { useCallback } from "react";
import Result from "./Result";

const QuestionResults = ({ optionOne, optionTwo, response }) => {
  const getTotalVotes = useCallback(() => {
    return optionOne.votes.length + optionTwo.votes.length;
  }, [optionOne.votes.length, optionTwo.votes.length]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Results</h2>
      <Result
        selected={response === "optionOne"}
        question={optionOne.text}
        total={getTotalVotes()}
        votes={optionOne.votes.length}
      />
      <Result
        selected={response === "optionTwo"}
        question={optionTwo.text}
        total={getTotalVotes()}
        votes={optionTwo.votes.length}
      />
    </div>
  );
};

export default QuestionResults;
