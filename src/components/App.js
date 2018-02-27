import React, { Component } from "react";
import "./App.css";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { Route } from "react-router-dom";

class App extends Component {
  render = () => {
    return (
      <div className="app">
        <Route exact path="/" render={() => <PostsList />} />

        <Route exact path="/post" render={() => <PostDetails />} />
      </div>
    );
  };
}

export default App;