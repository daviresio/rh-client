import {TAB_CONFIGURACAO} from "../actions/actionsTypes";

const INITIAL_STATE = {
    tab: 0
}

export const configuracao = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAB_CONFIGURACAO:
            return {...state, tab: action.payload}
        default:
            return state
    }
}
