import { SET_FIELD, SET_ALL_FIELDS, RESET_FORM } from '../actions/createProjectActions';

const INITIAL_STATE = {
    id: null,
    nome: '',
    habilidades: 'full-stack',
    detalhes: '',
    contatos: '',
    user: 'nome-do-usuario'
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;
        case SET_ALL_FIELDS:
            return action.project;
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}