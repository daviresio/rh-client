import React from 'react';
import {Route, Switch} from "react-router";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import LembretesLista from "./LembretesLista";
import LembretesCadastro from "./LembretesCadastro";

const Lembretes = ({changeRoute, router}) => {

    const path = '/comunicacao/lembretes/'

    return (
        <Switch>
            <Route path={path} exact={true} component={LembretesLista} />
            <Route path={path + 'cadastro'} component={LembretesCadastro} />
        </Switch>
    )
}

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(Lembretes);
