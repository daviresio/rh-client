import {LOAD_USER_LOGGED_DATA} from "../actions/actionsTypes";

const INITIAL_STATE = {
    usuario: {},
    empresa: {},
    empresas: [],
    companhia: {},
};

export const usuario = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER_LOGGED_DATA:
            return {...state, usuario: action.payload.usuario, empresa: action.payload.empresaLogada, empresas: action.payload.empresas, companhia: action.payload.companhia};
        default:
            return state
    }
};
