import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost, getPost, getPostComments, deleteComment } from "../actions/";
import EditDialog from "./EditDialog.js";
import Comment from "./Comment.js";
import VotesDisplay from "./VotesDisplay.js";

class PostDetails extends Component {
  state = {
    category: "none",
    isShowingModal: false,
    modalAction: "",
    modalType: "",
    modalItem: null,
    post: null,
    prevPath: "/"
  };

  componentDidMount = () => {
    // If there aren't any posts yet then bail out
    if (!this.props.posts.length) return;

    // Set some initial state, including the post we're looking at,
    // and get all the comments for the post
    const id = this.props.match.params.post;
    const post = this.props.posts.filter(post => post.id === id)[0];
    const catname = (post && post.category) || "none";
    this.setState({ category: catname, post: post });
    if (post && post.id) this.props.getPostComments(post.id);
  };

  handleNavBack = e => {
    // Navigate back to the main page with the category from
    // the current location url
    e.preventDefault();
    this.props.history.push(
      this.state.prevPath + this.props.match.params.category
    );
  };

  handleOpenDialogClick = (e, data) => {
    // Prevent the default action and create the appropriate
    // default item data for the dialog
    e.preventDefault();
    if (data.action === "add" && data.type === "comment")
      data.item = {
        author: "",
        title: "",
        body: "",
        parentId: this.state.post.id
      };
    // Set the state for holding the dialog data
    this.setState({
      modalAction: data.action,
      modalType: data.type,
      modalItem: data.item,
      isShowingModal: true
    });
  };

  handleCloseDialog = () => {
    // Reset the state for the dialog data
    this.setState({
      modalAction: "",
      modalType: "",
      modalItem: null,
      isShowingModal: false
    });
  };

  handleDeletePostClick = (e, post) => {
    // Prevent the default behavior and dispatch the
    // delete for the post
    e.preventDefault();
    this.props.deletePost(post.id);
  };

  handleDeleteCommentClick = (e, comment) => {
    // Prevent the default behavior and dispatch the
    // delete for the comment
    e.preventDefault();
    this.props.deleteComment(comment.id);
  };

  render = () => {
    // Get the one post from the id in the route match
    const id = this.props.match.params.post;
    const post = this.props.posts.filter(post => post.id === id)[0];

    // If the post does not exist then give a friendly message
    if (!post)
      return (
        <div className="no-post">
          <div>
            <div>This post does not exist</div>
            <div className="no-post-link">
              <a href="nowhere" onClick={e => this.handleNavBack(e)}>
                Go Back
              </a>
            </div>
          </div>
        </div>
      );

    // Lay out the details for the post
    const displayDate = new Date(post.timestamp);
    const body = (
      <div>
        {post.body.split("\n").map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
    );

    // Sort the comments newest first for the post
    let comments = this.props.comments.slice(0);
    comments = comments.sort((a, b) => {
      if (a.timestamp > b.timestamp) return -1;
      if (a.timestamp < b.timestamp) return 1;
      return 0;
    });

    return (
      <div className="post-details">
        <div className="post-details-heading">
          <div className="post-details-title">
            <div>
              <a
                href="nowhere"
                className="close-details"
                onClick={e => this.handleNavBack(e)}
              >
                Close
              </a>
            </div>
            <div className="post-details-info">
              <div className="post-author">{`Author - ${post.author}`}</div>
              <div className="post-edit-controls">
                <div className="post-last-edit">
                  <a
                    href="nowhere"
                    className="edit-link"
                    onClick={e =>
                      this.handleOpenDialogClick(e, {
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
                    onClick={e => this.handleDeletePostClick(e, post)}
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
        <div className="post-details-body">
          <div>{body}</div>
          <div className="post-details-vote-container">
            <VotesDisplay item={post} voteType={"post"} />
          </div>
        </div>

        <div className="post-comments">
          <h3>
            <strong>Comments</strong>
          </h3>
          {comments.map((comment, index) => (
            <Comment
              key={comment.id}
              index={index}
              comment={comment}
              handleEditClick={this.handleOpenDialogClick}
              handleDeleteCommentClick={this.handleDeleteCommentClick}
            />
          ))}
        </div>
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
    deletePost: id => dispatch(deletePost(id)),
    getPost: id => dispatch(getPost(id)),
    getPostComments: id => dispatch(getPostComments(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);
