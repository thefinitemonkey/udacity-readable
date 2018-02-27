import "./categories.js";
import "./posts.js";
import "./comments.js";

import { combineReducers } from "redux";

export default combineReducers({ categories, posts, comments });
