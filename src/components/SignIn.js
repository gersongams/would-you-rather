import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import logo from "../logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useHistory } from "react-router-dom";

const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  width: 700px;
  & .signIn-header {
    background: rgba(220, 220, 220, 0.4);
    padding: 1.2rem 1.6rem;
    font-size: 1.2rem;
    text-align: center;
  }
  & .signIn-container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    h2 {
      text-align: center;
    }
    & .logo {
      display: flex;
      justify-content: center;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
  & .userList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.isUserSelected ? "#1890ff" : "#f0f0f0")};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: 300px;
  &:hover {
    border: 1px solid #1890ff;
    cursor: pointer;
  }
  & .user-avatar {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
`;

const SignIn = () => {
  const [userSelected, setUserSelected] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const selectUser = useCallback((user) => {
    setUserSelected(user);
  }, []);

  const signInHandler = useCallback(() => {
    console.log(userSelected);
    dispatch(setAuthedUser(userSelected));
    history.push("/");
  }, [dispatch, history, userSelected]);

  return (
    <SignInStyled>
      <div className="signIn-header">Welcome to Would you Rather App!</div>
      <div className="signIn-container">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>Select your user</h2>
        <div className="userList">
          {Object.keys(users).map((user) => (
            <UserCard
              isUserSelected={user === userSelected}
              key={user}
              onClick={() => selectUser(user)}
            >
              <div className="user-avatar">
                <img src={users[user].avatarURL} alt="avatar" />
              </div>
              <div className="user-name">{users[user].name}</div>
            </UserCard>
          ))}
        </div>
        <Button onClick={signInHandler}>Sign In</Button>
      </div>
    </SignInStyled>
  );
};

export default SignIn;
