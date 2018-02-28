import React from "react";
import { Link } from "react-router-dom";

export default function PostSummary({ post }) {
    const displayDate = new Date(post.timestamp);

  return (
    <div className="post-summary">
      <div className="post-summary-line-1">
        <div className="post-title"><h3>{post.title}</h3></div>
        <div className="post-author">{post.author}</div>
      </div>
      <div className="post-summary-line-2">
        <div className="post-body">{post.body}</div>
      </div>
      <dv className="post-summary-line-3">
        <div className="post-last-edit">{`Last edited: ${displayDate.toLocaleString()}`}</div>
      </dv>
      <div className="post-summary-line-4">
        <div className="post-comment-count">{`Comments: ${post.commentCount}`}</div>
        <div className="post-vote-score">{post.voteScore}</div>
      </div>
    </div>
  );
}
