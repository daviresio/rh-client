import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import{colaborador} from "./colaboradorReducer";
import {serverValues} from './serverValuesReducer'
import {connectRouter} from "connected-react-router";
import history from "../../routes/history";
import {folhaPagamento} from "./folhaReducer";
import {toolbar} from "./toolbarReducer";
import {configuracao} from "./configuracaoReducer";
import {modal} from "./modalReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    colaborador,
    folhaPagamento,
    toolbar,
    configuracao,
    modal,
    serverValues,
    router: connectRouter(history)
});
