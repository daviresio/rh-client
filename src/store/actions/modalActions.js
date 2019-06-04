import {CHANGE_MODAL_VISIBILITY} from "./actionsTypes";

export const changeModalVisible = (target, visible, value = null) => ({type: CHANGE_MODAL_VISIBILITY, payload: {target, visible, value}})
