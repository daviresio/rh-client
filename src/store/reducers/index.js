import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import{colaborador} from "./colaboradorReducer";
import {defaultValues} from './defaultValuesReducer'
import {connectRouter} from "connected-react-router";
import history from "../../routes/history";

export const rootReducer = combineReducers({
    form: formReducer,
    colaborador,
    defaultValues,
    router: connectRouter(history)
});