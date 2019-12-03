import { SET_FIELD, PROJECT_SAVED_SUCCESS, SET_ALL_FIELDS, RESET_FORM } from '../actions/createProjectActions';

const INITIAL_STATE = {
    id: null,
    nome: '',
    detalhes: '',
    contatos: '',
    usuario: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;
        case PROJECT_SAVED_SUCCESS:
            return INITIAL_STATE;
        case SET_ALL_FIELDS:
            return action.project;
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}