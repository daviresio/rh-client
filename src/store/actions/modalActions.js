import {CHANGE_MODAL_VISIBILITY} from "./actionsTypes";

export const changeModalVisible = (target, visible, value = null, index) => ({type: CHANGE_MODAL_VISIBILITY, payload: {target, visible, value, index}});
