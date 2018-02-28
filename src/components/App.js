import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { Route, withRouter } from "react-router-dom";
import { getAllPosts, getCategories } from "../actions/";

class App extends Component {
  componentDidMount = () => {
    this.props.allCategories();
    this.props.allPosts();
  };

  render = () => {
    const MainRoute = ({
      component: Component,
      match,
      location,
      history,
      ...rest
    }) => <Route {...rest} render={props => <PostsList {...props} />} />;

    // Credit to Todd Chaffee for the renderMergedProps and PropsRoute
    // implementation (https://github.com/ReactTraining/react-router/issues/4105)
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
        <div className="app-header">
          <h1>Readable</h1>
        </div>
        <PropsRoute exact path="/" component={PostsList} />
        <PropsRoute exact path="/category/:catname" component={PostsList} />
        <PropsRoute exact path="/post" component={PostDetails} />
      </div>
    );
  };
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories: categories.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: () => dispatch(getAllPosts()),
    allCategories: () => dispatch(getCategories())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
