export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getCategories = () => {
    return {
        type: GET_CATEGORIES
    }
}

export const getCategoryPosts = (cat) => {
    return {
        type: GET_CATEGORY_POSTS,
        category: cat
    }
}

export const getAllPosts = () => {
    return {
        type: GET_ALL_POSTS
    }
}

export const addPost = ({title, body, author, category}) => {
    return {
        type: ADD_POST,
        title,
        body,
        author,
        category
    }
}

export const getPost = (pid) => {
    return {
        type: GET_POST,
        id: pid
    }
}

export const votePost = ({id, option}) => {
    return {
        type: VOTE_POST,
        id,
        option
    }
}

export const editPost = ({id, title, body}) => {
    return {
        type: EDIT_POST,
        id,
        title,
        body
    }
}

export const deletePost = (pid) => {
    return {
        type: DELETE_POST,
        id: pid
    }
}

export const getPostComments = (pid) => {
    return {
        type: GET_POST_COMMENTS,
        id: pid
    }
}

export const addPostComment = ({parentId, body, author}) => {
    return {
        type: ADD_POST_COMMENT,
        parentId,
        body,
        author
    }
}

export const getComment = (cid) => {
    return {
        type: GET_COMMENT,
        id: cid
    }
}

export const voteComment = ({id, option}) => {
    return {
        type: VOTE_COMMENT,
        id,
        option
    }
}

export const editComment = ({id, body}) => {
    return {
        type: EDIT_COMMENT,
        id,
        body
    }
}

export const deleteComment = (cid) => {
    return {
        type: DELETE_COMMENT,
        id: cid
    }
}