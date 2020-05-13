import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Question from "./components/Question";
import styled from "styled-components";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import SignIn from "./components/SignIn";
import QuestionList from "./components/QuestionList";
import { LoadingBar } from "react-redux-loading";
import { createBrowserHistory } from "history";
import NoMatch from "./components/NoMatch";

const history = createBrowserHistory();

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const App = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router history={history}>
      <Container>
        <LoadingBar />
        <React.Fragment>
          <Navbar />
          <Main>
            {!authedUser ? (
              <SignIn />
            ) : (
              <Switch>
                <Route exact path="/">
                  <QuestionList />
                </Route>
                <Route path="/leaderboard">
                  <Leaderboard />
                </Route>
                <Route path="/questions/:questionId">
                  <Question />
                </Route>
                <Route path="/add">
                  <NewQuestion />
                </Route>
              </Switch>
            )}
          </Main>
        </React.Fragment>
      </Container>
    </Router>
  );
};

export default App;
