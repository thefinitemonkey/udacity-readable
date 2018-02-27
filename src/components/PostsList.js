import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts } from "../actions/";

class PostsList extends Component {
  componentDidMount() {
    getAllPosts();
  }

  render = () => {
    return null;
  };
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(getAllPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
