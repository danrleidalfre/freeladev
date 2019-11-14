import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const saveProject = project => {
    return async dispatch => {
        return await firebase
        .database()
        .ref('/projects/usuario/')
        .push(project)
    }
}