import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Main</div>
        </Route>
        <Route path="/leaderboard">
          <div>leaderboard</div>
        </Route>
        <Route path="/questions/:question_id">
          <div>leaderboard</div>
        </Route>
        <Route path="/add">
          <div>add</div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
