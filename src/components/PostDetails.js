import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost, getPostComments, deleteComment } from "../actions/";
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
    post: null
  };

  componentDidMount = () => {
    // If there aren't any posts yet then bail out
    if (!this.props.posts.length) return;

    // Set some initial state, including the post we're looking at,
    // and get all the comments for the post
    const id = this.props.match.params.id;
    const post = this.props.posts.filter(post => post.id === id)[0];
    this.setState({ category: post.category, post: post });
    this.props.getPostComments(post.id);
  };

  handleOpenDialogClick = (e, data) => {
    e.preventDefault();
    if (data.action === "add" && data.type === "comment")
      data.item = {
        author: "",
        title: "",
        body: "",
        parentId: this.state.post.id
      };
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

  handleDeletePostClick = (e, post) => {
    e.preventDefault();
    this.props.deletePost(post.id);
  };

  handleDeleteCommentClick = (e, comment) => {
    e.preventDefault();
    this.props.deleteComment(comment.id);
  };

  render = () => {
    console.log("render prop", this.props);

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
          <div>{post.body}</div>
          <div className="post-details-vote-container">
            <VotesDisplay item={post} voteType={"post"} />
          </div>
        </div>

        <div className="post-comments">
          <h3>
            <strong>Comments</strong>
          </h3>
          {this.props.comments.map(comment => (
            <Comment
              key={comment.id}
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
    getPostComments: id => dispatch(getPostComments(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);
