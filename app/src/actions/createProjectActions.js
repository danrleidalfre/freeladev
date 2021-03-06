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

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = project => ({
  type: SET_ALL_FIELDS,
  project: project
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => {
  return {
    type: RESET_FORM
  }
}


export const saveProject = ({createProject}) => {
  return async dispatch => {
    if(createProject.id) {
      await firebase
        .database()
        .ref(`/projects/${createProject.id}`)
        .set(createProject)
    } else {
      await firebase
        .database()
        .ref(`/projects/`)
        .push(createProject)        
    }
    const action = projectSavedSuccess(createProject)
    dispatch(action)
  }    
}