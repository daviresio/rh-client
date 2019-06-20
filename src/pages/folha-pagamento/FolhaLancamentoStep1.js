import React from 'react';
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import {Redirect, Route, Switch} from "react-router";
import LancamentoAutomatico from "./LancamentoAutomatico";
import FolhaLancamentoStep1Body from "./FolhaLancamentoStep1Body";
import LancamentoManual from "./LancamentoManual";

const FolhaLancamentoStep1 = ({changeRoute, router}) => {

    const path = '/folha/lancamento/tipo-lancamento/'
    const currentPath = router.location.pathname

    return (
              <Switch>
                  <Route path={path} exact={true} component={FolhaLancamentoStep1Body} />
                  <Route path={path + 'importar'} component={LancamentoAutomatico} />
                  <Route path={path + 'manual'} component={LancamentoManual} />
              </Switch>
    )
}

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(FolhaLancamentoStep1);


