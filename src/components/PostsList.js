import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts, getCategories } from "../actions/";
import PostSummary from "./PostSummary";

class PostsList extends Component {
  componentDidMount() {
    this.props.allCategories();
    this.props.allPosts();
  }

  componentWillReceiveProps(props) {
    this.props = props;
    console.log("props updated", this.props);
  }

  render = () => {
    return (
      <div className="post-list">
        {this.props.posts.map(post => (
          <PostSummary post={post} />
        ))}
      </div>
    );
  };
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: () => dispatch(getAllPosts()),
    allCategories: () => dispatch(getCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
