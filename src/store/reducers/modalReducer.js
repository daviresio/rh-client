import {
    CHANGE_MODAL_VISIBILITY,
    CLOSE_MODAL,
    OPEN_MODAL,
    OPEN_MODAL_AND_RELOAD_OTHER_ENTITY,
    OPEN_MODAL_AND_UPDATE_DROPDOWN,
    OPEN_MODAL_AND_UPDATE_FORM_ARRAY
} from "../actions/actionsTypes";

const INITIAL_STATE = {
    cargo: {
        visible: false,
        value: null,
        updateDropdown: null,
    },
    departamento: {
        visible: false,
        value: null,
        updateDropdown: null,
    },
    centroDeCusto: {
        visible: false,
        value: null,
        updateDropdown: null,
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
        value: null,
        idReload: null,
    },
    copiaDocumento: {
        visible: false,
        value: null,
        idReload: null,
        data: null,
    },
    holerite: {
        visible: false,
        value: null
    },
    ferias: {
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
    falta: {
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
        data: null,
        idReload: null,
        updateFormArray: null,
    },
    editarValorBeneficio: {
        visible: false,
        value: null,
        index: null,
        data: null,
        idReload: null,
        updateFormArray: null,
    },
    editarBeneficioEmMassa: {
        visible: false,
        value: null,
        index: null,
        data: null,
        idReload: null,
        updateFormArray: null,
    },
    dependente: {
        visible: false,
        value: null,
        index: null,
        data: null,
        updateFormArray: null,
        idReload: null
    },
    endereco: {
        visible: false,
        value: null,
        idReload: null,
    },
    escolaridade: {
        visible: false,
        value: null,
    },
    informacoesGeraisColaborador: {
        visible: false,
        value: null,
        idReload: null,
    },
    documentoColaborador: {
        visible: false,
        value: null,
        idReload: null,
    },
    dadosPrincipaisColaborador: {
        visible: false,
        value: null,
        idReload: null,
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
    anotacao: {
        visible: false,
        value: null,
        index: null,
        data: null,
        idReload: null,
    },
    beneficio: {
        visible: false,
        value: null,
        index: null,
        data: null,
        idReload: null,
    },
    configuracaoSindicato: {
        visible: false,
        value: null,
        index: null,
        data: null,
        idReload: null,
    },
};

export const modal = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MODAL_VISIBILITY:
            return {
                ...state, [action.payload.target]:
                    {
                        visible: action.payload.visible,
                        value: action.payload.value,
                        index: action.payload.index,
                        updateDropdown: action.payload.updateDropdown,
                        data: action.payload.data,
                        updateFormArray: action.payload.updateFormArray,
                    }
            };
        case OPEN_MODAL:
            return {...state, [action.payload.target]: {visible: true, value: action.payload.value}};
        case OPEN_MODAL_AND_UPDATE_DROPDOWN:
            return {...state, [action.payload.target]: {visible: true, updateDropdown: action.payload.updateDropdown, value: action.payload.value}};
        case OPEN_MODAL_AND_UPDATE_FORM_ARRAY:
            const {updateFormArray, value, data} = action.payload;
            return {...state, [action.payload.target]: {visible: true, updateFormArray, value, data}};
        case OPEN_MODAL_AND_RELOAD_OTHER_ENTITY:
            return {...state, [action.payload.target]: {visible: true, value: action.payload.value, idReload: action.payload.idReload, data: action.payload.data}};
        case CLOSE_MODAL:
            return {...state, [action.payload.target]: {visible: false, value: null, updateDropdown: null, data: null, index: null, updateFormArray: null, idReload: null}};
        default:
            return state
    }
};
