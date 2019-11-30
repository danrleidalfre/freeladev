import { combineReducers } from 'redux';
import userReducer from './userReducer';
import createProjectReducer from './createProjectReducer';
import createProfileReducer from './createProfileReducer';
import projectsReducers from './projectsReducers';

export default combineReducers({
  userLogin: userReducer,
  createProject: createProjectReducer,
  createProfile: createProfileReducer,
  listProjects: projectsReducers
});