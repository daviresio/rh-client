import {CHANGE_VISIBILITY_MODAL_HOLERITE, TAB_FOLHA_PAGAMENTO} from "./actionsTypes";


export const changeFolhaPagamentoTab = tab => ({type: TAB_FOLHA_PAGAMENTO, payload: tab})

export const changeModalHolerite = () => ({type: CHANGE_VISIBILITY_MODAL_HOLERITE})
