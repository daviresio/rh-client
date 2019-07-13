import {
    CLEAR_LIST,
    DELETE_SUCESS,
    LOADING,
    LOADING_FALIED,
    LOADING_SUCESS,
    OK_NO_UPDATE,
    SAVE_SUCESS,
    SEARCH_SUCESS,
    UPDATE_LIST_SUCESS,
    UPDATE_SUCESS
} from "../actions/actionsTypes";

const INITIAL_STATE = {
    colaboradores: [],
    colaboradoresAtivos: [],
    colaboradoresEmAdimissao: [],
    colaboradoresEmDemissao: [],
    colaborador: {},
    qtdColaboradores: {},
    cargos: [],
    departamentos: [],
    centrodecustos: [],
    sindicatos: [],
    loading: [],
    eventos: [],
    evento: {},
    beneficios: [],
    beneficio: {},
    jornadasTrabalho: [],
    jornadaTrabalho: {},
    periodoExperiencias: [],
    periodoExperiencia: {},
    vinculos: [],
    vinculo: {},
    formaPagamentos: [],
    formaPagamento: {},
    fechamentoFolhas: [],
    fechamentoFolha: {},
    dependentes: [],
    dependente: {},
    contatos: [],
    contato: {},
    checkLists: [],
    copiaDocumentos: [],
    copiaDocumento: {},
    bancos: [],
    banco: {},
    enderecos: [],
    endereco: {},
    escolaridades: [],
    escolaridade: {},
    dissidios: [],
    dissidio: {},
    lembretes: [],
    lembrete: {},
    feriados: [],
    feriado: {},
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
            console.log(action)
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
        case CLEAR_LIST:
            return {...state, [action.payload.target]: []}
        case OK_NO_UPDATE:
            return {...state}
        default:
            return state;
    }
}
