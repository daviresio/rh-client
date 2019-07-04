import api from '../../config/api'
import {
    DELETE_FALIED,
    DELETE_SUCESS,
    LOADING,
    LOADING_FALIED,
    LOADING_SUCESS, OK_NO_UPDATE,
    SAVE_FALIED,
    SAVE_SUCESS,
    SEARCH_FALIED,
    SEARCH_SUCESS,
    UPDATE_FALIED, UPDATE_LIST_SUCESS,
    UPDATE_SUCESS
} from "./actionsTypes";
import {changeModalVisible} from "./modalActions";
import {change, arrayRemove, arrayInsert, arrayPush, arraySplice} from "redux-form";
import {changeRoute} from "./routerActions";
import {MAX_IMAGE_SIZE} from "../../config/defaultValues";
import * as axios from "axios";


export const loadList = (entity, target = entity) => async dispatch => [
    dispatch({type: LOADING, payload: {target}}),
    await api.get(`/${entity}`).then(result => dispatch({
        type: LOADING_SUCESS,
        payload: {target, value: result.data}
    })).catch(e => dispatch({type: LOADING_FALIED, payload: {target}}))
]

export const search = (entity, value, field) => async dispatch => [
    await api.get(`/${entity}/${value}`).then(result => dispatch({
        type: SEARCH_SUCESS,
        payload: {target: field, value: result.data}
    })).catch(e => dispatch({type: SEARCH_FALIED}))
]

export const save = (entity, value, options) => async dispatch => {
    console.log(value)
    await api.post(`/${entity}`, value).then(result => {
        console.log(options)
        const target = options && options.target ? options.target : entity
        dispatch({type: SAVE_SUCESS, payload: {target: target, value: result.data}})

        if (options && options.modal) {
            dispatch(changeModalVisible(options.modal, false))
            if (options.updateDropdown) {
                dispatch(change(options.updateDropdown.form, options.updateDropdown.field, result.data.id))
            }
            if (options.updateForm) {
                dispatch(arrayPush(options.updateForm.form, options.updateForm.field, result.data))
            }

            if (options.reload) {
                const {reload} = options
                dispatch(search(reload.entity, reload.value, reload.field))
            }
        }

        if (options && options.redirect) {
            const route = options.redirect.id ? options.redirect.route + result.data.id : options.redirect.route
            dispatch(changeRoute(route))
        }
    }).catch(e => {
        console.log(e)
        dispatch({type: SAVE_FALIED})
    })
}

export const update = (entity, value, options) => async dispatch => {
    console.log(value)
    console.log(options)
    await api.put(`/${entity}`, value).then(async result => {

        if (options && options.list) {
            dispatch({type: UPDATE_LIST_SUCESS, payload: {target: entity, value: result.data}})
        } else {
            dispatch({type: UPDATE_SUCESS, payload: {target: options.field, value: result.data}})
        }
        console.log('fui chamado', options)

        if (options && options.modal) {
            dispatch(changeModalVisible(options.modal, false))

            if (options.updateForm) {
                await api.get(`/${entity}/${options.updateForm.parentRoute}/${options.updateForm.parent}`).then(({data}) => {
                    console.log(result)
                    dispatch(change(options.updateForm.form, options.updateForm.field, data))
                })
            }

            if (options.reload) {
                const {reload} = options
                dispatch(search(reload.entity, reload.value, reload.field))
            }
        }

        if (options && options.redirect) {
            const route = options.redirect.id ? options.redirect.route + result.data.id : options.redirect.route
            dispatch(changeRoute(route))
        }
    })
        .catch(e => dispatch({type: UPDATE_FALIED}))
}

export const remove = (entity, value, target = entity, options) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => {
        dispatch({type: DELETE_SUCESS, payload: {target: target, value}})
        if (options.reload) {
            const {reload} = options
            dispatch(search(reload.entity, reload.value, reload.field))
        }
    }).catch(e => dispatch({type: DELETE_FALIED}))
]

export const removeAndReload = (entity, value, load) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => {
        dispatch({type: OK_NO_UPDATE,})
        dispatch(search(load.entity, load.value, load.field))
    })
        .catch(e => dispatch({type: DELETE_FALIED}))
]

export const uploadFile = (image, type, form, urlExistente) => async dispatch => {
    const response = await axios({
        method: 'GET',
        url: `https://wd2f9ukycg.execute-api.us-east-1.amazonaws.com/dev/upload-image?type=${type.replace('/', '---')}`
    })
    const binary = atob(image.split(',')[1])
    let array = []
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
    }
    const blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})

    const result = await fetch(urlExistente || response.data.uploadURL.split('?')[0], {
        method: 'PUT',
        body: blobData,
    })
    if (form.array) {
        dispatch(arrayPush(form.form, form.field, {...form.data, [form.subField]: result.url}))
    } else {
        dispatch(change(form.form, form.campo, result.url))
    }
}


export const removeEntytyFromForm = (entity, value, index) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => dispatch(arrayRemove('colaborador', entity, index)))
        .catch(e => dispatch({type: DELETE_FALIED}))
]

export const uploadDocumento = (event, form) => dispatch =>{
    const type = event.target.files[0].type
    const reader = new FileReader()
    reader.onload = e => {
        if (e.target.result.length > MAX_IMAGE_SIZE) {
            return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
        }
        dispatch(uploadFile(e.target.result, type, {form: form.form, campo: form.campo}))
    }
    reader.readAsDataURL(event.target.files[0])
}
