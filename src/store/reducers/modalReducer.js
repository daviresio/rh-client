import {CHANGE_MODAL_VISIBILITY} from "../actions/actionsTypes";

const INITIAL_STATE = {
    cargo: {
        visible: false,
        value: null
    },
    departamento: {
        visible: false,
        value: null
    },
    centroDeCusto: {
        visible: false,
        value: null
    },
    sindicato: {
        visible: false,
        value: null,
    }
}

export const modal = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MODAL_VISIBILITY:
            return {...state, [action.payload.target]: {visible: action.payload.visible, value: action.payload.value}}
        default:
            return state
    }
}
