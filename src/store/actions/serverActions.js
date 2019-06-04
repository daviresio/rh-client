import api from '../../config/api'
import {
    DELETE_FALIED,
    DELETE_SUCESS,
    LOADING,
    LOADING_FALIED,
    LOADING_SUCESS,
    SAVE_FALIED,
    SAVE_SUCESS,
    SEARCH_FALIED,
    SEARCH_SUCESS,
    UPDATE_FALIED,
    UPDATE_SUCESS
} from "./actionsTypes";
import {changeModalVisible} from "./modalActions";


export const loadList = entity => async dispatch => [
    dispatch({type: LOADING, payload: {target: entity}}),
    await api.get(`/${entity}`).then(result => dispatch({type: LOADING_SUCESS, payload: {target: entity, value: result.data}}))
        .catch(e => dispatch({type: LOADING_FALIED, payload: {target: entity}}))
]

export const search = (entity, value) => async dispatch => [
    await api.get(`/${entity}/${value}`).then(result => dispatch({type: SEARCH_SUCESS, payload: {target: entity, value: result.data}}))
        .catch(e => dispatch({type: SEARCH_FALIED}))
]

export const save = (entity, value, options) => async dispatch => [
    await api.post(`/${entity}`, value).then(result => dispatch({type: SAVE_SUCESS, payload: {target: entity, value: result.data}}))
        .then(()=> {
            if(options && options.modal) dispatch(changeModalVisible(options.modal, false))
        })
        .catch(e => dispatch({type: SAVE_FALIED}))
]

export const update = (entity, value, options) => async dispatch => [
    await api.put(`/${entity}`, value).then(result => dispatch({type: UPDATE_SUCESS, payload: {target: entity, value: result.data}}))
        .then(()=> {
            if(options && options.modal) dispatch(changeModalVisible(options.modal, false))
        })
        .catch(e => dispatch({type: UPDATE_FALIED}))
]

export const remove = (entity, value) => async dispatch => [
    await api.delete(`/${entity}/${value}`).then(()=> dispatch({type: DELETE_SUCESS, payload: {target: entity, value}}))
        .catch(e=> dispatch({type: DELETE_FALIED}))
]
