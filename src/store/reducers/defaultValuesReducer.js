import {BUSCA_CARGOS, BUSCA_DEPARTAMENTOS} from "../actions/actionsTypes";

const INITIAL_STATE = {
    cargos: [],
    departamentos: [],
}

export const defaultValues = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUSCA_CARGOS:
            return {...state, cargos: action.payload}
        case BUSCA_DEPARTAMENTOS:
            return {...state, departamentos: action.payload}
        default: return state;
    }
}