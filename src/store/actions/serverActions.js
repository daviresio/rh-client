import api from '../../config/api'
import {
    CLEAR_LIST,
    DELETE_FALIED,
    DELETE_SUCESS,
    LOADING,
    LOADING_FALIED,
    LOADING_SUCESS,
    OK_NO_UPDATE,
    RELOAD_IMAGE_CACHE,
    SAVE_FALIED,
    SAVE_SUCESS,
    SEARCH_FALIED,
    SEARCH_SUCESS,
    UPDATE_FALIED,
    UPDATE_LIST_SUCESS,
    UPDATE_SUCESS
} from "./actionsTypes";
import {changeModalVisible, closeModal} from "./modalActions";
import {arrayPush, arrayRemove, change, reset} from "redux-form";
import {changeRoute} from "./routerActions";
import {MAX_IMAGE_SIZE} from "../../config/defaultValues";
import * as axios from "axios";

export const saveSuccess = (target, value) => ({type: SAVE_SUCESS, payload: {target, value}});

export const loadList = (entity, target = entity) => async dispatch => {
    dispatch({type: LOADING, payload: {target}});
    await api.get(`/${entity}`).then(result => dispatch({
        type: LOADING_SUCESS,
        payload: {target, value: result.data}
    })).catch(e => dispatch({type: LOADING_FALIED, payload: {target}}))
};

export const search = (entity, value, field) => dispatch => {
    api.get(`/${entity}/${value}`).then(result => dispatch({
        type: SEARCH_SUCESS,
        payload: {target: field, value: result.data}
    })).catch(e => dispatch({type: SEARCH_FALIED}))
};

export const save = (entity, value, options) => async dispatch => {
    console.log(value);
    await api.post(`/${entity}`, value).then(result => {
        console.log(options);
        const target = options && options.target ? options.target : entity;
        dispatch({type: SAVE_SUCESS, payload: {target: target, value: result.data}});

        if (options && options.modal) {
            dispatch(changeModalVisible(options.modal, false));

            if (options.updateDropdown) {
                dispatch(change(options.updateDropdown.form, options.updateDropdown.field, result.data.id))
            }

            if (options.updateForm) {
                dispatch(arrayPush(options.updateForm.form, options.updateForm.field, result.data))
            }

            if (options.reload) {
                const {reload} = options;
                dispatch(search(reload.entity, reload.value, reload.field))
            }
        }

        if (options && options.redirect) {
            const route = options.redirect.id ? options.redirect.route + result.data.id : options.redirect.route;
            dispatch(changeRoute(route))
        }
    }).catch(e => {
        console.log(e);
        dispatch({type: SAVE_FALIED})
    })
};

export const update = (entity, value, options) => async dispatch => {
    console.log(entity);
    console.log(value);
    console.log(options);
    await api.put(`/${entity}`, value).then(async result => {

        if (options && options.list) {
            dispatch({type: UPDATE_LIST_SUCESS, payload: {target: entity, value: result.data}})
        } else {
            dispatch({type: UPDATE_SUCESS, payload: {target: options.field, value: result.data}})
        }

        if (options && options.modal) {
            dispatch(changeModalVisible(options.modal, false));

            if (options.updateForm) {
                await api.get(`/${entity}/${options.updateForm.parentRoute}/${options.updateForm.parent}`).then(({data}) => {
                    console.log(result);
                    dispatch(change(options.updateForm.form, options.updateForm.field, data))
                })
            }

            if (options.reload) {
                const {reload} = options;
                dispatch(search(reload.entity, reload.value, reload.field))
            }
        }

        if (options && options.redirect) {
            const route = options.redirect.id ? options.redirect.route + result.data.id : options.redirect.route;
            dispatch(changeRoute(route))
        }
    })
        .catch(e => dispatch({type: UPDATE_FALIED}))
};

export const remove = (entity, value, target = entity, options) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => {
        dispatch({type: DELETE_SUCESS, payload: {target: target, value}});
        if (options.reload) {
            const {reload} = options;
            dispatch(search(reload.entity, reload.value, reload.field))
        }
    }).catch(e => dispatch({type: DELETE_FALIED}))
];

export const removeAndReload = (entity, value, load) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => {
        dispatch({type: OK_NO_UPDATE,});
        dispatch(search(load.entity, load.value, load.field))
    })
        .catch(e => dispatch({type: DELETE_FALIED}))
];

export const uploadFile = (image, type, form, urlExistente) => async dispatch => {
    const response = await axios({
        method: 'GET',
        url: `https://wd2f9ukycg.execute-api.us-east-1.amazonaws.com/dev/upload-image?type=${type.replace('/', '---')}`
    });
    const binary = atob(image.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
    }
    const blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'});

    const result = await fetch(urlExistente || response.data.uploadURL.split('?')[0], {
        method: 'PUT',
        body: blobData,
    });
    if (form.array) {
        dispatch(arrayPush(form.form, form.field, {...form.data, [form.subField]: result.url}))
    } else {
        dispatch(change(form.form, form.campo, result.url));
        dispatch(reloadImageCache())
    }

};

export const uploadFileUpdateWihoutFormAndReload = (image, type, options) => async dispatch => {
    const response = await axios({
        method: 'GET',
        url: `https://wd2f9ukycg.execute-api.us-east-1.amazonaws.com/dev/upload-image?type=${type.replace('/', '---')}`
    });
    const binary = atob(image.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
    }
    const blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'});

    const result = await fetch(response.data.uploadURL.split('?')[0], {
        method: 'PUT',
        body: blobData,
    });
    dispatch(update(options.entity, {...options.currentValue, [options.field]: result.url}, {entity: options.entity, value: options.currentValue.id, field: options.target}))

};


export const removeEntytyFromForm = (entity, value, index) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(() => dispatch(arrayRemove('colaborador', entity, index)))
        .catch(e => dispatch({type: DELETE_FALIED}))
];

export const uploadDocumento = (file, form) => dispatch => {
    const type = file.type;
    const reader = new FileReader();
    reader.onload = e => {
        if (e.target.result.length > MAX_IMAGE_SIZE) {
            return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
        }
        dispatch(uploadFile(e.target.result, type, {form: form.form, campo: form.campo}))
    };
    reader.readAsDataURL(file)
};

export const clearList = target => ({type: CLEAR_LIST, payload: {target}});

export const reloadImageCache = () => ({type: RELOAD_IMAGE_CACHE});


export const updateAndRedirect = (entity, value, redirect) => async dispatch => {

    await api.put(`/${entity}`, value).then(async result => {

        dispatch({type: UPDATE_SUCESS, payload: {target: redirect.field, value: result.data}});

        const route = redirect.id ? redirect.route + result.data.id : redirect.route;
        dispatch(changeRoute(route))

    })

};

export const saveAndReloadWihoutDoMoreAndResetForm = (entity, value, reload, formName) => dispatch => {
    api.post(`${entity}`, value).then(async result => {
        dispatch(search(reload.entity, reload.value, reload.field));

        dispatch(reset(formName))
    })
};


export const removeAndReloadWihoutDoMore = (entity, value, reload) => dispatch => {
    api.delete(`${entity}/${value}`).then(() => {
        dispatch(search(reload.entity, reload.value, reload.field))
    })
};


export const updateAndReloadOtherEntity = (entity, value, reload) => dispatch => {
    api.put(`/${entity}`, value).then(() => {
        console.log(reload);

        dispatch({type: 'CLEAR_DATA', payload: {target: 'fechamentoFolha'}})

        dispatch(search(reload.entity, reload.id, reload.target));

    })

};
