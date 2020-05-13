import { NavLink, useHistory } from "react-router-dom";
import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const NavbarStyled = styled.nav`
  display: flex;
  height: 64px;
  padding: 0 4rem;
  border-bottom: 2px solid #1890ff;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      & .selected {
        background: #1890ff;
        cursor: pointer;
        color: white;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        text-decoration: none;
        color: #282c34;
        animation: all 0.3s ease-in-out;
        height: 100%;
      }
    }
  }
  & .actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    .user {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-left: 0.4rem;
      }
    }
    .logout {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);
  const { name, avatarURL } = useSelector((state) => {
    const allUsers = state.users;
    const user = allUsers[state.authedUser];
    return {
      ...user,
    };
  });

  const logOutHandler = useCallback(() => {
    dispatch(setAuthedUser(null));
    history.push("/signIn");
  }, [dispatch, history]);

  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/add">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/leaderboard">
            Leaderboard
          </NavLink>
        </li>
      </ul>
      {authedUser && (
        <div className="actions">
          <div className="user">
            Hello, {name}
            <img src={avatarURL} alt="avatr" />
          </div>
          <div className="logout" onClick={logOutHandler}>
            Logout
          </div>
        </div>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
