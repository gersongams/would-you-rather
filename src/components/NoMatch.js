import React from "react";
import styled from "styled-components";

const NoMatchStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoMatch = () => {
  return (
    <NoMatchStyled>
      <img
        src="https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
        alt="404"
      />
    </NoMatchStyled>
  );
};

export default NoMatch;
