import {CHANGE_EMPRESA_PESQUISA_VISIBILITY, CHANGE_USUARIO_OPCOES_VISIBILITY} from "./actionsTypes";

export const changeEmpresaPesquisaVisibility = value => ({type: CHANGE_EMPRESA_PESQUISA_VISIBILITY, payload: value});

export const changeUsuarioOpcoesVisibility = value => ({type: CHANGE_USUARIO_OPCOES_VISIBILITY, payload: value});
