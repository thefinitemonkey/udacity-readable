import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts, getCategories } from "../actions/";

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
    return null;
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
