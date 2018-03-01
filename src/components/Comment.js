import React, { Component } from "react";
import VotesDisplay from "./VotesDisplay";

class Comment extends Component {
  render = () => {
    const comment = this.props.comment;
    const displayDate = new Date(comment.timestamp);

    return (
      <div className="comment-display">
        <div>
          <div className="post-summary-line-2">
            <div className="post-body">{comment.body}</div>
          </div>
        </div>
        <div className="post-summary-line-3">
          <div className="post-summary-line-3-container">
            <div className="post-edit-controls">
              <div className="post-author">{`From ${comment.author}`}</div>
              <div className="post-last-edit">
                <a
                  href="nowhere"
                  className="edit-link"
                  onClick={e =>
                    this.props.handleEditClick(e, {
                      action: "edit",
                      type: "comment",
                      item: comment
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
                  onClick={e => this.props.handleDeleteCommentClick(e, comment)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
          <div className="post-summary-line-3-vote-container">
            <VotesDisplay item={comment} voteType={"comment"} />
          </div>
        </div>
      </div>
    );
  };
}

export default Comment;
