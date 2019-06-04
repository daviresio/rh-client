import {CHANGE_VISIBILITY_MODAL_HOLERITE, TAB_FOLHA_PAGAMENTO} from "../actions/actionsTypes";

const INITIAL_STATE = {
    tab: 0,
    modalHoleriteVisilible: false
}

export const folhaPagamento = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAB_FOLHA_PAGAMENTO:
            return {...state, tab: action.payload}
        case CHANGE_VISIBILITY_MODAL_HOLERITE:
            return {...state, modalHoleriteVisilible: !state.modalHoleriteVisilible}
        default:
            return state;
    }
}
