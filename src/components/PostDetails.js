import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPosts, getCategories, setSort, deletePost } from "../actions/";
import EditDialog from "./EditDialog.js";

class PostDetails extends Component {
  state = {
    category: "none",
    isShowingModal: false,
    modalAction: "",
    modalType: "",
    modalItem: null
  };

  componentWillReceiveProps = props => {
    this.props = props;
    const id = this.props.match.params.id;
    const post = this.props.posts.filter(post => post.id === id)[0];
    this.setState({ category: post.category });
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

  render = () => {
    console.log("prop", this.props);
    // Get the one post from the id in the route match
    const id = this.props.match.params.id;
    const post = this.props.posts.filter(post => post.id === id)[0];

    // If the post does not exist then give a friendly message
    if (!post) return <div>This post does not exist</div>;

    // Lay out the details for the post
    const displayDate = new Date(post.timestamp);

    return (
      <div className="post-details">
        <div className="post-details-heading">
          <div className="post-details-title">
            <div>
              <Link className="close-details" to="/">
                Close
              </Link>
            </div>
            <div className="post-details-info">
              <div className="post-author">{post.author}</div>
              <div className="post-edit-controls">
                <div className="post-last-edit">
                  <a
                    href="nowhere"
                    className="edit-link"
                    onClick={e =>
                      this.handleEditClick(e, {
                        action: "edit",
                        type: "post",
                        item: post
                      })
                    }
                  >
                    {`Edited - `}
                  </a>
                  {displayDate.toLocaleString()}
                </div>
                <div className="post-delete">
                  <a
                    href="nowhere"
                    className="edit-link"
                    onClick={e => this.handleDeleteClick(e, post)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>{post.title}</h2>
          </div>
        </div>
        <div className="post-details-body">{post.body}</div>
        <div className="post-comments">&nbsp;</div>
        <div className="open-new-item">
          <a
            href="nowhere"
            onClick={e =>
              this.handleOpenDialogClick(e, { action: "add", type: "comment" })
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

function mapStateToProps({ posts, comments }) {
  return { posts, comments };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: () => dispatch(getAllPosts()),
    allCategories: () => dispatch(getCategories()),
    setSort: data => dispatch(setSort(data)),
    deletePost: id => dispatch(deletePost(id))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);
