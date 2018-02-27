import { RECEIVE_GET_CATEGORIES } from "../actions";

/* 
The default state for the categories is
{ categories: [] }

Populated categories looks like
{ categories: [{ "name": "", "path":"" }]}
*/

const categories = (state = { categories: [] }, action) => {
  const { categories } = action;

  switch (action.type) {
    case RECEIVE_GET_CATEGORIES:
      // Update the state with the new list of categories
      return { categories };
    default:
      return state;
  }
};


export default categories;