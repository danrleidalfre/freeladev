import firebase from 'firebase';

export const SET_PROJECTS = 'SET_PROJECTS'
const setProjects = projects => ({
    type: SET_PROJECTS,
    projects: projects
})

export const watchProjects = () => {
    return dispatch => {
        firebase
            .database()
            .ref(`/projects/`)
            .on('value', snapshot => {
                const projects = snapshot.val()
                const action = setProjects(projects)
                dispatch(action)
            })
    }
}