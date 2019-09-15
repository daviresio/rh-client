import {
    CHANGE_MODAL_VISIBILITY,
    CLOSE_MODAL,
    OPEN_MODAL,
    OPEN_MODAL_AND_RELOAD_OTHER_ENTITY,
    OPEN_MODAL_AND_UPDATE_DROPDOWN,
    OPEN_MODAL_AND_UPDATE_FORM_ARRAY,
    UPDATE_LIST_SUCESS,
    UPDATE_SUCESS
} from "./actionsTypes";
import api from "../../config/api";
import {loadList, saveSuccess, search} from "./serverActions";
import {arrayPush, change} from "redux-form";

export const changeModalVisible = (target, visible, value, index, updateDropdown, updateFormArray, data) => {
    console.log(target, visible, value, index, updateDropdown, updateFormArray, data);
    return {type: CHANGE_MODAL_VISIBILITY, payload: {target, visible, value, index, updateDropdown, updateFormArray, data}}
};


export const openModal = (target, value) => ({type: OPEN_MODAL, payload: {target, value}});

export const openModalAndUpdateDropdown = (target, updateDropdown) => ({type: OPEN_MODAL_AND_UPDATE_DROPDOWN, payload: {target, updateDropdown}});

export const openModalAndUpdateFormArray = (target, value, updateFormArray, data) => ({type: OPEN_MODAL_AND_UPDATE_FORM_ARRAY, payload: {target, value, updateFormArray, data}});

export const openModalAndReloadOtherEntity = (target, value, idReload, data) => ({type: OPEN_MODAL_AND_RELOAD_OTHER_ENTITY, payload: {target, value, idReload, data}});

export const closeModal = target => ({type: CLOSE_MODAL, payload: {target}});


export const saveModal = (entity, value, modal, target = entity) => dispatch => {

    api.post(`/${entity}`, value).then(result => {

        dispatch(saveSuccess(target, result.data));

        dispatch(closeModal(modal));

    })

};

export const saveModalAndList = (entity, value, modal, target = entity) => dispatch => {
    api.post(`/${entity}`, value).then(result => {

        dispatch(closeModal(modal));

        dispatch(saveSuccess(target, result.data))

    })

};

export const saveModalAndReloadOtherEntity = (entity, value, modal, reload) => dispatch => {

    api.post(`/${entity}`, value).then(result => {

        dispatch(search(reload.entity, reload.id, reload.target));

        dispatch(closeModal(modal));

    })

};

export const saveModalAndUpdateDropdown = (entity, value, modal, updateDropdown, target = entity) => dispatch => {

    api.post(`/${entity}`, value).then(result => {

        dispatch(saveSuccess(target, result.data));

        dispatch(change(updateDropdown.form, updateDropdown.field, result.data.id));

        dispatch(closeModal(modal));

    })

};

export const saveModalAndUpdateFormArray = (entity, value, modal, updateFormArray, target = entity) => dispatch => {

    api.post(`/${entity}`, value).then(result => {

        dispatch(saveSuccess(target, result.data));

        dispatch(arrayPush(updateFormArray.form, updateFormArray.field, result.data));

        dispatch(closeModal(modal));

    })

};

export const updateModalAndUpdateFormArray = (entity, value, modal, updateFormArray, target = entity) => dispatch => {

    api.put(`/${entity}`, value).then(result => {

        api.get(`/${entity}/${updateFormArray.parentRoute}/${updateFormArray.parent}`).then(({data}) => {
            console.log(result);
            dispatch(change(updateFormArray.form, updateFormArray.field, data));

            dispatch({type: UPDATE_SUCESS, payload: {target, value: result.data}});

            dispatch(closeModal(modal));

        })

    })

};

export const updateModalAndReloadOtherEntity = (entity, value, modal, reload) => dispatch => {
    api.put(`/${entity}`, value).then(() => {
        console.log(reload);
        dispatch(search(reload.entity, reload.id, reload.target));

        dispatch(closeModal(modal));

    })

};

export const updateModalAndList = (entity, value, modal, target = entity) => dispatch => {
    api.put(`/${entity}`, value).then(result => {

        dispatch(closeModal(modal));

        dispatch({type: UPDATE_LIST_SUCESS, payload: {target, value: result.data}})

    })

};

export const updateModalAndListOtherEntity = (entity, value, modal, listEntity, listTarget = listEntity) => dispatch => {
    api.put(`/${entity}`, value).then(result => {

        dispatch(closeModal(modal));

        dispatch(loadList(listEntity, listTarget))

    })

};




