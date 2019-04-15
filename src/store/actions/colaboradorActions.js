import {
    BUSCA_CARGOS,
    BUSCA_DEPARTAMENTOS,
    TAB_COLABORADOR,
    TAB_COLABORADOR_CADASTRO
} from "./actionsTypes";
import axios from 'axios';
import URL from '../../config/api'

export const colaboradorChangeTab = tab => ({type: TAB_COLABORADOR, payload: tab})

export const colaboradorCadastroChangeTab = tab => ({type: TAB_COLABORADOR_CADASTRO, payload: tab})

export const carregaDadosParaCadastroColaborador = () => {
    return async dispatch => {
        await dispatch(carregaCargos())
        await dispatch(carregaDepartamentos())
    }
}


const carregaCargos = () => dispatch => axios.get(`${URL}cargos`).then(({data}) => dispatch({type: BUSCA_CARGOS, payload: data}))
const carregaDepartamentos = () => dispatch => axios.get(`${URL}departamentos`).then(({data}) => dispatch({type: BUSCA_DEPARTAMENTOS, payload: data}))
