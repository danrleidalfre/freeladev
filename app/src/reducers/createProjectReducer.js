import { SET_FIELD } from '../actions/createProjectActions';

const INITIAL_STATE = {
    nome: '',
    habilidades: 'full-stack',
    detalhes: '',
    contatos: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState; 
        default:
            return state;
    }
}