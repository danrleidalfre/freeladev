import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const PROJECT_SAVED_SUCCESS = 'PROJECT_SAVED_SUCCESS';
export const projectSavedSuccess = () => {
  return {
    type: PROJECT_SAVED_SUCCESS
  }
}

export const saveProject = ({createProject, user}) => {
  return async dispatch => {
    await firebase
      .database()
      .ref(`/projects/${user}/`)
      .push(createProject)
      console.log(createProject)
      const action = projectSavedSuccess(createProject)
      dispatch(action)
  }    
}