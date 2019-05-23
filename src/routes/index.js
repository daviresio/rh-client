import React from 'react';
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Colaboradores from "../pages/Colaboradores";
import NovoColaborador from "../pages/colaboradores/CadastroColaborador";
import {ConnectedRouter} from "connected-react-router";
import history from './history'
import Ferias from "../pages/Ferias";
import FolhaPagamento from "../pages/FolhaPagamento";
import Toolbar from "../layout/Toolbar";

export default () =>
    (
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Toolbar/>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/colaboradores'} exact={true} component={Colaboradores}/>
                    <Route path={'/colaboradores/novo'} exact={true} component={NovoColaborador}/>
                    <Route path={'/ferias'} exact={true} component={Ferias}/>
                    <Route path={'/folha'} exact={true} component={FolhaPagamento}/>
                </Switch>
            </React.Fragment>
        </ConnectedRouter>
    )
