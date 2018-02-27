import React from "react";
import { Link } from "react-router-dom";

export default function PostSummary({
  post
}) {
  return (
    <div className="post-summary">
      <div className="post-author">{post.author}</div>
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>
      <div className="post-comment-count">{post.commentCount}</div>
      <div className="post-vote-score">{post.voteScore}</div>
    </div>
  );
}
