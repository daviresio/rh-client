import {COLABORADOR_TAB} from "../actions/actionsTypes";

const INITIAL_STATE = {
    tab: 0,

}

export const colaborador = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COLABORADOR_TAB:
            return {...state, tab: action.payload}

        default:
            return state;
    }
}