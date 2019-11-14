import { combineReducers } from 'redux';
import userReducer from './userReducer';
import createProjectReducer from './createProjectReducer';

export default combineReducers({
  userLogin: userReducer,
  createProject: createProjectReducer
});