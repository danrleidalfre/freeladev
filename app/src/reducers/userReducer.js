import { USER_LOGIN, USER_LOOUT } from '../actions';

export default function userReducer(state = null, action) {
  switch(action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_LOOUT:
      return null;
    default:
      return state;
  }
}