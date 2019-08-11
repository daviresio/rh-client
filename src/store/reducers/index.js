import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import {serverValues} from './serverValuesReducer'
import {connectRouter} from "connected-react-router";
import history from "../../routes/history";
import {toolbar} from "./toolbarReducer";
import {modal} from "./modalReducer";
import {usuario} from "./usuarioReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    toolbar,
    modal,
    serverValues,
    usuario,
    router: connectRouter(history)
});
