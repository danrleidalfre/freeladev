import firebase from 'firebase';

export const SET_FREELANCERS = 'SET_FREELANCERS'
const setFreelancers = freelancers => ({
    type: SET_FREELANCERS,
    freelancers: freelancers
})

export const watchFreelancers = () => {
    return dispatch => {
        firebase
            .database()
            .ref(`/freelancers/`)
            .on('value', snapshot => {
                const freelancers = snapshot.val()
                const action = setFreelancers(freelancers)
                dispatch(action)
            })
    }
}