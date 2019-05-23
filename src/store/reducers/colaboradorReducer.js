import {TAB_COLABORADOR, TAB_COLABORADOR_CADASTRO} from "../actions/actionsTypes";

const INITIAL_STATE = {
    tab: 0,
    cadastroColaboradorTab: 0,

}

export const colaborador = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAB_COLABORADOR:
            return {...state, tab: action.payload}
        case TAB_COLABORADOR_CADASTRO:
            return {...state, cadastroColaboradorTab: action.payload}
        default:
            return state;
    }
}