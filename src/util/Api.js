const api = "http://localhost:3001";
const auth = "test-auth";

const headers = {
  Accept: "application/json",
  Authorization: auth
};

export const getUUID = () => {
  const uuidv1 = require("uuid/v1");
  return uuidv1();
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(res => res.json());

export const getCategoryPosts = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

export const addPost = body =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, id: getUUID(), timestamp: Date.now() })
  }).then(res => res.json());

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

export const votePost = body =>
  fetch(`${api}/posts/${body.id}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ option: body.option })
  }).then(res => res.json());

export const editPost = body =>
  fetch(`${api}/posts/${body.id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, timestamp: Date.now() })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const getPostComments = id =>
  fetch(`${api}/posts/${id}/comments`, {
    headers
  }).then(res => res.json());

export const addPostComment = body =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, id: getUUID(), timestamp: Date.now() })
  }).then(res => res.json());

export const getComment = id =>
  fetch(`${api}/comments/${id}`, { headers }).then(res => res.json());

export const voteComment = body =>
  fetch(`${api}/comments/${body.id}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ option: body.option })
  }).then(res => res.json());

export const editComment = body =>
  fetch(`${api}/comments/${body.id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, timestamp: Date.now() })
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
