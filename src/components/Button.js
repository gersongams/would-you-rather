import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${(props) => (props.ghost ? "transparent" : "#1890ff")};
  border: ${(props) => (props.ghost ? "1px solid #1890ff" : "none")};
  color: ${(props) => (props.ghost ? "#1890ff" : "white")};
  padding: 0.8rem;
  font-size: 1.125rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  width: 100%;
  &:disabled {
    background: #999999;
    cursor: not-allowed;
  }
  &:focus,
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
