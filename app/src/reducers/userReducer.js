import { USER_LOGIN_SUCESS, USER_LOGOUT_SUCESS } from '../actions';

export default function userReducer(state = null, action) {
  switch(action.type) {
    case USER_LOGIN_SUCESS:
      return action.userLogin;
    case USER_LOGOUT_SUCESS:
      return null;
    default:
      return state;
  }
}