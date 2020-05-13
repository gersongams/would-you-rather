import React from "react";
import styled from "styled-components";

const PodiumStyled = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 700px;
  margin-bottom: 1rem;
  & .podium-avatar {
    padding: 1.6rem;
    border-right: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    img {
      width: 150px;
      border-radius: 50%;
    }
  }
  & .podium-info {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    width: 100%;
    border-right: 1px solid #f0f0f0;
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      span {
        font-weight: 600;
      }
    }
  }
  & .podium-score {
    display: flex;
    align-items: center;
    padding: 1.6rem;
  }
  & .score {
    width: 100px;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-header {
      background: rgba(220, 220, 220, 0.4);
      width: 100%;
      text-align: center;
      padding: 0.5rem 0;
    }
    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
    }
    &-total {
      background: #1890ff;
      color: white;
      border-radius: 50%;
      font-size: 1.2rem;
      font-weight: 600;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Podium = ({ name, avatar, answered, created }) => {
  return (
    <PodiumStyled>
      <div className="podium-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="podium-info">
        <h2>{name}</h2>
        <div>
          <span>Answered questions</span>
          <span>{answered}</span>
        </div>
        <div>
          <span>Created questions</span>
          <span>{created}</span>
        </div>
      </div>
      <div className="podium-score">
        <div className="score">
          <div className="score-header">Score</div>
          <div className="score-container">
            <span className="score-total">{answered + created}</span>
          </div>
        </div>
      </div>
    </PodiumStyled>
  );
};

export default Podium;
