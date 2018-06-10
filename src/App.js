import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
