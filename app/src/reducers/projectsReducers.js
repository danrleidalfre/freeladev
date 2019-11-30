import { SET_PROJECTS } from "../actions/projectsActions";

export default function(state = {}, action) {
  switch(action.type) {
    case SET_PROJECTS:
      return action.projects;
    default: 
      return state;
  } 
}