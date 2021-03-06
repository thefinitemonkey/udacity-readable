import {
  RECEIVE_GET_POST_COMMENTS,
  RECEIVE_ADD_POST_COMMENT,
  RECEIVE_UPDATE_COMMENT,
  RECEIVE_DELETE_COMMENT
} from "../actions";

/*
Default state for comments is [{}]

Populated state for comments looks like
[{
    id: "",
    parentId: "",
    timestamp: int,
    author: "",
    body, "",
    category: "",
    commentCount: int,
    deleted: bool,
    parentDeleted: bool,
    title: "",
    voteScore: int
}]
*/

const comments = (state = [], action) => {
  // Actions will only ever return "comments" or "comment" properties,
  // and never both at the same time
  const { comments, comment } = action;
  let newState;

  switch (action.type) {
    case RECEIVE_GET_POST_COMMENTS:
      // Update the state to be the comments returned
      if (comments) return comments;
      return state;
    case RECEIVE_ADD_POST_COMMENT:
      // Update the state to add the new comment
      newState = state.slice(0);
      newState.push(comment);
      return newState;
    case RECEIVE_UPDATE_COMMENT:
      // Update the state to remove the existing copy of the specified
      // comment and add the returned copy
      newState = state.filter(oc => oc.id !== comment.id);
      newState.push(comment);
      return newState;
    case RECEIVE_DELETE_COMMENT:
      // Update the state to remove the existing comment as long
      // as the returned item shows deleted or parentDeleted
      // as being true
      if (comment.deleted || comment.parentDeleted) {
        return state.filter(oc => oc.id !== comment.id);
      }
      return state;
    default:
      return state;
  }
};
export default comments;
