import categories from "./categories.js";
import posts from "./posts.js";
import comments from "./comments.js";
import sorts from "./sorts.js";

import { combineReducers } from "redux";

export default combineReducers({ categories, posts, comments, sorts });
