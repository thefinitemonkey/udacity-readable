import React, { Component } from "react";
import VotesDisplay from "./VotesDisplay";

class PostSummary extends Component {
  render = () => {
    // Grab the post and the timestamp for display use
    const post = this.props.post;
    const displayDate = new Date(post.timestamp);

    return (
      <div className="post-summary">
        <div>
          <button
            className="post-summary-button"
            onClick={e => this.props.handlePostClick(e, post)}
          >
            <div className="post-summary-line-1">
              <div className="post-title">
                <h3>{post.title}</h3>
              </div>
              <div className="post-author">{post.author}</div>
            </div>
            <div className="post-summary-line-2">
              <div className="post-body">{post.body}</div>
            </div>
          </button>
        </div>
        <div className="post-summary-line-3">
          <div className="post-summary-line-3-container">
            <div className="post-edit-controls">
              <div className="post-last-edit">
                <a
                  href="nowhere"
                  className="edit-link"
                  onClick={e =>
                    this.props.handleEditClick(e, {
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
                  onClick={e => this.props.handleDeleteClick(e, post)}
                >
                  Delete
                </a>
              </div>
            </div>
            <div className="post-comment-count">{`Comments: ${
              post.commentCount
            }`}</div>
          </div>
          <div className="post-summary-line-3-vote-container">
            <VotesDisplay item={post} voteType={"post"} />
          </div>
        </div>
      </div>
    );
  };
}

export default PostSummary;
