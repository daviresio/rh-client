import {
    CLEAR_LIST,
    DELETE_SUCESS,
    LOADING,
    LOADING_FALIED,
    LOADING_SUCESS,
    OK_NO_UPDATE,
    RELOAD_IMAGE_CACHE,
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
    centroDeCustos: [],
    sindicatos: [],
    sindicato: {},
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
    empresas: [],
    empresa: {},
    cobrancas: [],
    cobranca: {},
    contadores: [],
    imageCache: null,
    anotacoes: [],
    anotacao: {},
    faltas: [],
    falta: {},
    feriasParaAprovacao: [],
    feriasAprovadas: [],
    feriasColetivas: [],
    feriasReprovadas: [],
    ferias: [],
    feria: {},
    valoresRecorrentes: [],
    valorRecorrente: {},
    minutas: [],
    minuta: {},
    desligamentos: [],
    desligamento: {},
    holerites: [],
    holerite: {},
};

export const serverValues = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: state.loading.concat(action.payload.target)};
        case LOADING_SUCESS:
            return {...state, [action.payload.target]: action.payload.value, loading: state.loading.filter(v => v !== action.payload.target)};
        case LOADING_FALIED:
            return {...state, loading: state.loading.filter(v => v !== action.payload.target)};
        case SAVE_SUCESS:
            return {...state, [action.payload.target]: state[action.payload.target].concat(action.payload.value)};
        case UPDATE_SUCESS:
            return {...state, [action.payload.target]: action.payload.value};
        case UPDATE_LIST_SUCESS:
            const index = state[action.payload.target].findIndex(v => v.id === action.payload.value.id);
            return {...state, [action.payload.target]: state[action.payload.target].map((v, i) => i === index ? action.payload.value : v)};
        case DELETE_SUCESS:
            return {...state, [action.payload.target]: state[action.payload.target].filter(v => v.id !== action.payload.value)};
        case SEARCH_SUCESS:
            return {...state, [action.payload.target]: Object.assign({}, action.payload.value)};
        case 'DELETAR_COLABORADOR':
            return {...state, colaborador: {}};
        case CLEAR_LIST:
            return {...state, [action.payload.target]: []};
        case RELOAD_IMAGE_CACHE:
            return {...state, imageCache: new Date()};
        case OK_NO_UPDATE:
            return {...state};
        case 'CLEAR_DATA':
            return {...state, [action.payload.target]: {}};
        default:
            return state;
    }
};
