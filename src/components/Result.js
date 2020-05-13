import React, { useCallback } from "react";
import styled from "styled-components";

const ResultCard = styled.div`
  background: ${(props) =>
    props.selected ? "rgba(24,144,255,0.25)" : "rgba(220,220,220,.4)"};
  border: 1px solid ${(props) => (props.selected ? "#1890ff" : "#d9d9d9")};
  border-radius: 5px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1.2rem;
  p {
    color: ${(props) => (props.selected ? "#1890ff" : "black")};
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 1.6rem 0;
    text-align: left;
    width: 100%;
  }
  .result {
    margin-bottom: 0;
    text-align: center;
    font-weight: 600;
  }
`;

const Progress = styled.div`
  width: 100%;
  color: white;
  border-radius: 5px;
  background: gray;
  position: relative;
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    z-index: 2;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }
  &::after {
    position: absolute;
    width: ${(props) => props.percentage}%;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    background: #1890ff;
  }
`;

const YourVote = styled.div`
  background: #e3c627;
  color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  font-size: 0.8rem;
`;

const Result = ({ question, votes, total, selected }) => {
  const getPercentage = useCallback(() => {
    return (votes * 100) / total;
  }, [total, votes]);

  return (
    <ResultCard selected={selected}>
      {selected && (
        <YourVote>
          <span>Your</span>
          <span>vote</span>
        </YourVote>
      )}
      <p>{question}</p>
      <Progress percentage={getPercentage()}>
        <span>{getPercentage().toFixed(1)} %</span>
      </Progress>
      <div className="result">
        {votes} out of {total} votes
      </div>
    </ResultCard>
  );
};

export default Result;
