import api from "../../config/api";
import {LOAD_USER_LOGGED_DATA, OK_NO_UPDATE} from "./actionsTypes";
import {logoutAndRedirectToLogin} from "../../config/auth";


export const carregarInformacoesUsuario = () => async dispatch => {
    try {
        const result = await api.get('/usuarios/logged');
        dispatch({type: LOAD_USER_LOGGED_DATA, payload: result.data})
    } catch (e) {
        console.log(e)
    }
};

export const alterarSenha = values => dispatch => {
    api.put('/usuarios/update-password', values).then(() => dispatch({type: OK_NO_UPDATE})).then(() => logoutAndRedirectToLogin()).catch(e => console.log(e))
};

export const adicionarEmpresa = values => dispatch => {
    api.post('/empresas', values).then(() => dispatch({type: OK_NO_UPDATE})).then(() => logoutAndRedirectToLogin()).catch(e => console.log(e))
};

