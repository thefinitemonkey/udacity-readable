const api = "https://localhost:3001";
const auth = "test-auth";

const headers = {
  Accept: "application/json",
  Authorization: auth
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(/* Add action call */);

export const getCategoryPosts = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then((res = res.json()))
    .then(/* Add action call */);

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then((res = res.json()))
    .then(/* Add action call */);

export const addPost = body =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then((res = res.json()))
    .then(/* Add action call */);

export const votePost = body =>
  fetch(`${api}/${body.id}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const editPost = body =>
  fecth(`${api}/posts/${body.id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const deletePost = id =>
  fetch(`${api}/post/${id}`, {
    method: "DELETE",
    headers
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const getPostComments = id =>
  fetch(`${api}/posts/${id}/comments`, {
    headers
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const addPostComment = body =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const getComment = id =>
  fetch(`${api}/comments/${id}`, headers)
    .then((res = res.json()))
    .then(/* Add action call */);

export const voteComment = body =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const editComment = body =>
  fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ body })
  })
    .then((res = res.json()))
    .then(/* Add action call */);

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers
  })
    .then((res = res.json()))
    .then(/* Add action call */);
