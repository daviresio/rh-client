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
    },
    salario: {
        visible: false,
        value: null
    },
    banco: {
        visible: false,
        value: null
    },
    copiaDocumento: {
        visible: false,
        value: null
    },
    holerite: {
        visible: false,
        value: null
    },
    solicitarFerias: {
        visible: false,
        value: null
    },
    configuracaoFolha: {
        visible: false,
        value: null
    },
    valoresRecorrentes: {
        visible: false,
        value: null
    },
    termosEContratos: {
        visible: false,
        value: null
    },
    faltasEAfastamentos: {
        visible: false,
        value: null
    },
    lancamentoHolerite: {
        visible: false,
        value: null
    },
    contato: {
        visible: false,
        value: null,
        index: null,
    },
    dependente: {
        visible: false,
        value: null,
        index: null,
    },
    endereco: {
        visible: false,
        value: null,
    },
    escolaridade: {
        visible: false,
        value: null,
    },
    informacoesGeraisColaborador: {
        visible: false,
        value: null,
    },
    documentoColaborador: {
        visible: false,
        value: null,
    },
    dadosPrincipaisColaborador: {
        visible: false,
        value: null,
    },
    periodoAquisitivoSaldoFerias: {
        visible: false,
        value: null,
    },
    contador: {
        visible: false,
        value: null,
    },
    feriado: {
        visible: false,
        value: null,
    },
    dadosEmpresa: {
        visible: false,
        value: null,
    },
    dadosCobranca: {
        visible: false,
        value: null,
    },
};

export const modal = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MODAL_VISIBILITY:
            return {...state, [action.payload.target]: {visible: action.payload.visible, value: action.payload.value, index: action.payload.index}};
        default:
            return state
    }
};
