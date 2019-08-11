import {CHANGE_EMPRESA_PESQUISA_VISIBILITY, CHANGE_USUARIO_OPCOES_VISIBILITY} from "../actions/actionsTypes";

const INITIAL_STATE = {
    empresaPesquisaVisible: false,
    usuarioOpcoesVisible: false
};

export const toolbar = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_EMPRESA_PESQUISA_VISIBILITY:
            return {...state, empresaPesquisaVisible: action.payload};
        case CHANGE_USUARIO_OPCOES_VISIBILITY:
            return {...state, usuarioOpcoesVisible: action.payload};
        default:
            return state
    }
};
