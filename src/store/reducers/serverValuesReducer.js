import {DELETE_SUCESS, LOADING, LOADING_FALIED, LOADING_SUCESS, SAVE_SUCESS, SEARCH_SUCESS, UPDATE_LIST_SUCESS, UPDATE_SUCESS} from "../actions/actionsTypes";

const INITIAL_STATE = {
    colaboradores: [],
    cargos: [],
    departamentos: [],
    centrodecustos: [],
    sindicatos: [],
    loading: [],
    colaborador: {},
    eventos: [],
    evento: {},
    beneficios: [],
    beneficio: {},
}

export const serverValues = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: state.loading.concat(action.payload.target)}
        case LOADING_SUCESS:
            return {...state, [action.payload.target]: action.payload.value, loading: state.loading.filter(v => v !== action.payload.target)}
        case LOADING_FALIED:
            return {...state, loading: state.loading.filter(v => v !== action.payload.target)}
        case SAVE_SUCESS:
            return {...state, [action.payload.target]: state[action.payload.target].concat(action.payload.value)}
        case UPDATE_SUCESS:
            return {...state, [action.payload.target]: action.payload.value}
        case UPDATE_LIST_SUCESS:
            const index = state[action.payload.target].findIndex(v => v.id === action.payload.value.id)
            return {...state, [action.payload.target]: state[action.payload.target].map((v, i) => i === index ? action.payload.value : v)}
        case DELETE_SUCESS:
            return {...state, [action.payload.target]: state[action.payload.target].filter(v => v.id !== action.payload.value)}
        case SEARCH_SUCESS:
            return {...state, [action.payload.target]: Object.assign({}, action.payload.value)}
        case 'DELETAR_COLABORADOR':
            return {...state, colaborador: {}}
        default:
            return state;
    }
}
