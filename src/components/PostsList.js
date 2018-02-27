import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts, getCategories } from "../actions/";
import PostSummary from "./PostSummary";

class PostsList extends Component {
  state = { category: "all" };

  componentDidMount() {
    this.props.allCategories();
    this.props.allPosts();
  }

  componentWillReceiveProps(props) {
    this.props = props;
    console.log("props updated", this.props);
  }

  handleChangeCategory = data => {
    this.setState({ category: data });
  };

  renderPosts = () => {
    // If not posts then return a null
    if (!this.props.posts || this.props.posts.length === 0) return null;

    // Get either the full ist of posts or a filtered list and map
    // it for display
    let posts;
    if (this.state.category === "" || this.state.category === "all") {
      posts = this.props.posts;
    } else {
      posts = this.props.posts.filter(
        post => post.category === this.state.category
      );
    }

    return posts.map(post => <PostSummary key={post.id} post={post} />);
  };

  render = () => {
    return (
      <div className="post-list">
        <div className="category-selector">
          <div>
            <label className="category-selector-label" for="categorySelector">
              Filter:
            </label>
            <select
              id="categorySelector"
              value={this.state.category}
              onChange={e => this.handleChangeCategory(e.target.value)}
            >
              <option value="all">All</option>
              {this.props.categories &&
                this.props.categories.map(cat => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="post-list">{this.renderPosts()}</div>
      </div>
    );
  };
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories: categories.categories.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: () => dispatch(getAllPosts()),
    allCategories: () => dispatch(getCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
