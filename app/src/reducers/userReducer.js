import { USER_LOGIN_SUCESS, USER_LOOUT } from '../actions';

export default function userReducer(state = null, action) {
  switch(action.type) {
    case USER_LOGIN_SUCESS:
      return action.userr;
    case USER_LOOUT:
      return null;
    default:
      return state;
  }
}