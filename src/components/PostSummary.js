import React from "react";
import { Link } from "react-router-dom";

export default function PostSummary({ post }) {
  return (
    <div className="post-summary">
      <div className="post-summary-line-1">
        <div className="post-title">{post.title}</div>
        <div className="post-author">{post.author}</div>
      </div>
      <div className="post-summary-line-2">
        <div className="post-body">{post.body}</div>
      </div>
      <div className="post-summary-line-3">
        <div className="post-comment-count">{`Comments: ${post.commentCount}`}</div>
        <div className="post-vote-score">{post.voteScore}</div>
      </div>
    </div>
  );
}
