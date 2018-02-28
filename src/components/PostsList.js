import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts, getCategories, setSort } from "../actions/";
import PostSummary from "./PostSummary";
import EditDialog from "./EditDialog.js";

class PostsList extends Component {
  state = {
    category: (this.props.match && this.props.match.params.catname) || "all",
    isShowingModal: false,
    modalAction: "default",
    modalType: "",
    modalItem: null
  };

  handleChangeCategory = data => {
    this.props.history.push(`/category/${data}`);
  };

  handleChangeSort = data => {
    this.props.setSort(data);
  };

  handleOpenDialogClick = (e, data) => {
    e.preventDefault();
    this.setState({
      modalAction: data.action,
      modalType: data.type,
      modalItem: data.item,
      isShowingModal: true
    });
  };

  handleCloseDialog = () => {
    this.setState({
      modalAction: "",
      modalType: "",
      modalItem: null,
      isShowingModal: false
    });
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

    // Sort the posts based on the state sort selection
    let compare;
    let direction;
    direction =
      this.props.sorts.sort === "dateUp" || this.props.sorts.sort === "voteUp"
        ? 1
        : -1;
    compare =
      this.props.sorts.sort === "dateUp" || this.props.sorts.sort === "dateDown"
        ? "timestamp"
        : "voteScore";
    posts = posts.sort((a, b) => {
      if (a[compare] * direction < b[compare] * direction) return -1;
      if (a[compare] * direction > b[compare] * direction) return 1;
      return 0;
    });

    return posts.map(post => <PostSummary key={post.id} post={post} handleEditClick={this.handleOpenDialogClick} />);
  };

  render = () => {
    return (
      <div className="post-list">
        <div className="posts-heading">
          <div>
            <h2>Posts</h2>
          </div>
          <div className="posts-selectors">
            <div className="posts-selector">
              <label className="category-sort-label" htmlFor="categorySort">
                Sort:
              </label>
              <select
                id="categorySort"
                value={this.props.sorts.sort}
                onChange={e => this.handleChangeSort(e.target.value)}
              >
                <option value="dateUp">Date (ascending)</option>
                <option value="dateDown">Date (descending)</option>
                <option value="voteUp">Votes (ascending)</option>
                <option value="voteDown">Votes (descending)</option>
              </select>
            </div>
            <div className="posts-selector">
              <label
                className="category-selector-label"
                htmlFor="categorySelector"
              >
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
        </div>
        <div className="post-list">{this.renderPosts()}</div>
        <div className="open-new-item">
          <a
            href="nowhere"
            onClick={e =>
              this.handleOpenDialogClick(e, { action: "add", type: "post" })
            }
          >
            Create New Post
          </a>
        </div>
        <EditDialog
          {...this.state}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  };
}

function mapStateToProps({ posts, categories, sorts }) {
  return { posts, categories: categories.categories, sorts };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: () => dispatch(getAllPosts()),
    allCategories: () => dispatch(getCategories()),
    setSort: data => dispatch(setSort(data))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsList)
);
