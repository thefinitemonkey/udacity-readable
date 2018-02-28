import React, { Component } from "react";
import VotesDisplay from "./VotesDisplay";

class PostSummary extends Component {
  render = () => {
    const post = this.props.post;
    const displayDate = new Date(post.timestamp);

    return (
      <div className="post-summary">
        <div className="post-summary-line-1">
          <div className="post-title">
            <h3>{post.title}</h3>
          </div>
          <div className="post-author">{post.author}</div>
        </div>
        <div className="post-summary-line-2">
          <div className="post-body">{post.body}</div>
        </div>
        <div className="post-summary-line-3">
          <div className="post-summary-line-3-container">
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
                Edited&nbsp;
              </a>
              {displayDate.toLocaleString()}
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
