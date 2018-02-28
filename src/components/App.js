import React, { Component } from "react";
import "./App.css";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { Route, withRouter } from "react-router-dom";

class App extends Component {
  render = () => {
    const MainRoute = ({
      component: Component,
      match,
      location,
      history,
      ...rest
    }) => <Route {...rest} render={props => <PostsList {...props} />} />;

    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return React.createElement(component, finalProps);
    };

    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
          }}
        />
      );
    };

    return (
      <div className="app">
        <PropsRoute path="/" component={withRouter(PostsList)} />

        <Route exact path="/post" render={() => <PostDetails />} />
      </div>
    );
  };
}

export default App;
