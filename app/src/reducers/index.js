import { combineReducers } from 'redux';
import userReducer from './userReducer';
import createProjectReducer from './createProjectReducer';
import createProfileReducer from './createProfileReducer';
import projectsReducers from './projectsReducers';
import freelancersReducers from './freelancersReducers';

export default combineReducers({
  userLogin: userReducer,
  createProject: createProjectReducer,
  createProfile: createProfileReducer,
  listProjects: projectsReducers,
  listFreelancers: freelancersReducers
});