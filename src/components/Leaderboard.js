import React from "react";
import styled from "styled-components";
import Podium from "./Podium";
import { useSelector } from "react-redux";

const LeaderboardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const Leaderboard = () => {
  const users = useSelector((state) => {
    const allUsers = state.users;
    return Object.keys(allUsers)
      .map((u) => ({
        ...allUsers[u],
        score:
          Object.keys(allUsers[u].answers).length +
          Object.keys(allUsers[u].questions).length,
      }))
      .sort((a, b) => b.score - a.score);
  });

  return (
    <LeaderboardStyled>
      {users.map((user) => (
        <Podium
          key={user.id}
          name={user.name}
          avatar={user.avatarURL}
          answered={Object.keys(user.answers).length}
          created={user.questions.length}
        />
      ))}
    </LeaderboardStyled>
  );
};

export default Leaderboard;
