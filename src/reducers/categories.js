import {
    GET_CATEGORIES,
} from '../actions';


/* 
The default state for the categories is
{ categories: [] }

Populated categories looks like
{ categories: [{ "name": "", "path":"" }]}
*/

const categories = (state = {categories:[]}, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return state
        default: return state
    }
}