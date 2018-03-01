import React, { Component } from "react";
import { votePost, voteComment } from "../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class VotesDisplay extends Component {
  handleVoteClick = direction => {
    // Dispatch the proper action with values depending on if
    // this is voting for a post or comment
    if (this.props.voteType === "post")
      this.props.votePost({ id: this.props.item.id, option: direction });
    if (this.props.voteType === "comment")
      this.props.voteComment({ id: this.props.item.id, option: direction });
  };

  render = () => {
    const item = this.props.item;

    return (
      <div className="post-vote-score">
        <div className="vote-button-left">
          <button onClick={e => this.handleVoteClick("downVote")}>-</button>
        </div>
        <div>{item && item.voteScore}</div>
        <div className="vote-button-right">
          <button onClick={e => this.handleVoteClick("upVote")}>+</button>
        </div>
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    votePost: data => dispatch(votePost(data)),
    voteComment: data => dispatch(voteComment(data))
  };
}

export default withRouter(
  withRouter(connect(null, mapDispatchToProps)(VotesDisplay))
);
