import {
  RECEIVE_GET_CATEGORY_POSTS,
  RECEIVE_GET_ALL_POSTS,
  RECEIVE_ADD_POST,
  RECEIVE_DELETE_POST,
  RECEIVE_UPDATE_POST
} from "../actions";

/*
Default state for posts is [{}]

Populated state for posts looks like
[{
    id: "",
    timestamp: int,
    author: "",
    body, "",
    category: "",
    commentCount: int,
    deleted: bool,
    title: "",
    voteScore: int
}]
*/

const posts = (state = [{}], action) => {
  // Actions will only ever return "posts" or "post" properties,
  // and never both at the same time
  const { posts, post } = action;

  switch (action.type) {
    case RECEIVE_GET_CATEGORY_POSTS:
      // Update the state to remove all posts of the specified category and
      // add the returned posts
      const category = posts[0].category;
      let newState = state.filter(post => post.category !== category);
      return newState.concat(posts);
    case RECEIVE_GET_ALL_POSTS:
      // Update the state to be the posts returned
      return posts;
    case RECEIVE_ADD_POST:
      // Update the state to add the new post
      let newState = state.splice(0);
      return newState.push(post);
    case RECEIVE_UPDATE_POST:
      // Update the state to remove the existing copy of the specified
      // post and add the returned copy
      let newState = state.filter(op => op.id !== post.id);
      return newState.push(post);
    default:
      return state;
  }
};

export default posts;