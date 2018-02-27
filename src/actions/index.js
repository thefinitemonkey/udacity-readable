import * as Api from "../util/Api.js";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const RECEIVE_GET_CATEGORIES = "RECEIVE_GET_CATEGORIES";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const RECEIVE_GET_CATEGORY_POSTS = "RECEIVE_GET_CATEGORY_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const RECEIVE_GET_ALL_POSTS = "RECEIVE_GET_ALL_POSTS";
export const ADD_POST = "ADD_POST";
export const RECEIVE_ADD_POST = "RECEIVE_ADD_POST";
export const GET_POST = "GET_POST";
export const RECEIVE_GET_POST = "RECEIVE_GET_POST";
export const VOTE_POST = "VOTE_POST";
export const RECEIVE_VOTE_POST = "RECEIVE_VOTE_POST";
export const RECEIVE_UPDATE_POST = "RECEIVE_UPDATE_POST";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_EDIT_POST = "RECEIVE_EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_DELETE_POST = "RECEIVE_DELETE_POST";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const RECEIVE_GET_POST_COMMENTS = "RECEIVE_GET_POST_COMMENTS";
export const ADD_POST_COMMENT = "ADD_POST_COMMENT";
export const RECEIVE_ADD_POST_COMMENT = "RECEIVE_ADD_POST_COMMENT";
export const GET_COMMENT = "GET_COMMENT";
export const RECEIVE_GET_COMMENT = "RECEIVE_GET_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const RECEIVE_VOTE_COMMENT = "RECEIVE_VOTE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const RECEIVE_EDIT_COMMENT = "RECEIVE_EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_DELETE_COMMENT = "RECEIVE_DELETE_COMMENT";

export const getCategories = () => dispatch => {
  Api.getCategories().then(categories =>
    dispatch(receiveGetCategories(categories))
  );
};

export const receiveGetCategories = categories => {
  return {
    type: RECEIVE_GET_CATEGORIES,
    categories
  };
};

export const getCategoryPosts = category => dispatch => {
  Api.getCategoryPosts(category).then(posts =>
    dispatch(receiveGetCategoryPosts(posts))
  );
};

export const receiveGetCategoryPosts = posts => {
  return {
    type: RECEIVE_GET_CATEGORY_POSTS,
    posts
  };
};

export const getAllPosts = () => dispatch => {
  Api.getAllPosts().then(posts => dispatch(receiveGetAllPosts(posts)));
};

export const receiveGetAllPosts = posts => {
  return {
    type: RECEIVE_GET_ALL_POSTS,
    posts
  };
};

export const addPost = body => dispatch => {
  Api.addPost(body).then(post => dispatch(receiveAddPost(post)));
};

export const receiveAddPost = post => {
  return {
    type: RECEIVE_ADD_POST,
    post
  };
};

export const getPost = id => dispatch => {
  Api.getPost(id).then(post => dispatch(receiveUpdatePost(post)));
};

export const votePost = body => dispatch => {
  Api.votePost(body).then(post => dispatch(receiveVotePost(post)));
};
export const editPost = body => dispatch => {
  Api.editPost(body).then(post => dispatch(receiveEditPost(post)));
};

export const receiveUpdatePost = post => {
  return {
    type: RECEIVE_UPDATE_POST,
    post
  };
};

export const deletePost = id => dispatch => {
  Api.deletePost(id).then(post => dispatch(receiveDeletePost(post)));
};

export const receiveDeletePost = post => {
  return {
    type: RECEIVE_DELETE_POST,
    post
  };
};

export const getPostComments = id => dispatch => {
  Api.getPostComments(id).then(comment =>
    dispatch(receivePostComments(comments))
  );
};

export const receiveGetPostComments = comments => {
  return {
    type: RECEIVE_GET_POST_COMMENTS,
    comments
  };
};

export const addPostComment = body => dispatch => {
  Api.addPostComment(body).then(comment =>
    dispatch(receiveAddPostComment(comment))
  );
};

export const receiveAddPostComment = comment => {
  return {
    type: RECEIVE_ADD_POST_COMMENT,
    comment
  };
};

export const getComment = id => dispatch => {
  Api.getComment(id).then(comment => dispatch(receiveGetComment(comment)));
};

export const receiveGetComment = comment => {
  return {
    type: RECEIVE_GET_COMMENT,
    comment
  };
};

export const voteComment = body => dispatch => {
  Api.voteComment(body).then(comment => dispatch(receiveVoteComment(comment)));
};

export const receiveVoteComment = comment => {
  return {
    type: RECEIVE_VOTE_COMMENT,
    comment
  };
};

export const editComment = body => dispatch => {
  Api.editComment(body).then(comment => dispatch(receiveEditComment(comment)));
};

export const receiveEditComment = comment => {
  return {
    type: RECEIVE_EDIT_COMMENT,
    comment
  };
};

export const deleteComment = id => dispatch => {
    Api.deleteComment(id).then(comment => dispatch(receiveDeleteComment(comment)))
}

export const receiveDeleteComment = comment => {
  return {
    type: RECEIVE_DELETE_COMMENT,
    comment
  };
};
