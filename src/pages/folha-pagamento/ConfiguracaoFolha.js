import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Table from "../../components/Table";
import TableContainer from "../../components/TableContainer";
import CardSimples from "../../components/card/CardSimples";
import TabCard from "../../components/TabCard";
import {Route, Switch} from "react-router";
import FolhaLancamentoStep1Body from "./FolhaLancamentoStep1Body";
import LancamentoAutomatico from "./LancamentoAutomatico";
import LancamentoManual from "./LancamentoManual";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import ConfiguracaoFolhaBody from "./ConfiguracaoFolhaBody";
import AdicionarEvento from "./AdicionarEvento";
import EditarConfiguracoesGerais from "./EditarConfiguracoesGerais";
import ConfigurarDecimoTerceiro from "./ConfigurarDecimoTerceiro";
import ConfigurarDsr from "./ConfigurarDSR";

const ConfiguracaoFolha = ({changeRoute, router}) => {

    const path = '/folha/configuracao/'

    return (
        <Switch>
            <Route path={path} exact={true} component={ConfiguracaoFolhaBody} />
            <Route path={path + 'adicionar-evento'} component={AdicionarEvento} />
            <Route path={path + 'editar-configuracoes-gerais'} component={EditarConfiguracoesGerais} />
            <Route path={path + 'configurar-decimo-terceiro'} component={ConfigurarDecimoTerceiro} />
            <Route path={path + 'configurar-dsr'} component={ConfigurarDsr} />
        </Switch>
    );
};

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(ConfiguracaoFolha);
