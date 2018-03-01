import React, { Component } from "react";
import VotesDisplay from "./VotesDisplay";

class Comment extends Component {
  render = () => {
    // Set values for use in rendering, including class name for alternating
    // background color on comments
    const comment = this.props.comment;
    const displayDate = new Date(comment.timestamp);
    const index = this.props.index || 0;
    const oddEven = (index % 2 === 0) ? "comment-display-even" : "comment-display-odd";

    return (
      <div className={`comment-display ${oddEven}`}>
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
