import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const PROFILE_SAVED_SUCCESS = 'PROFILE_SAVED_SUCCESS';
export const profileSavedSuccess = () => {
  return {
    type: PROFILE_SAVED_SUCCESS
  }
}

export const saveProfile = ({createProfile, user}) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/freelancer/${user}/`)
      .push(createProfile)
      const action = profileSavedSuccess(createProfile)
      dispatch(action)
  }    
}