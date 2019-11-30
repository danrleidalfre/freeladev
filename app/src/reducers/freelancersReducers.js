import { SET_FREELANCERS } from "../actions/freelancersActions";

export default function(state = {}, action) {
  switch(action.type) {
    case SET_FREELANCERS:
      return action.freelancers;
    default: 
      return state;
  } 
}