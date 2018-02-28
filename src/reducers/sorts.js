import { SET_SORT } from "../actions";

/* 
The default state for the sort is
{ sort: "dateDown" }

Populated sort looks like
{ sort: "sortSelection" }
*/

const sorts = (state = {sort: "dateDown"}, action) => {
  const { sort } = action;

  switch (action.type) {
    case SET_SORT:
      // Update the state with the new list of categories
      return { sort };
    default:
      return state;
  }
};


export default sorts;