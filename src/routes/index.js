import React from 'react';
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Colaboradores from "../pages/Colaboradores";
import NovoColaborador from "../pages/colaboradores/CadastroColaborador";
import {ConnectedRouter} from "connected-react-router";
import history from './history'

export default () =>
    (
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/colaboradores'} exact={true} component={Colaboradores}/>
                    <Route path={'/colaboradores/novo'} exact={true} component={NovoColaborador}/>
                </Switch>
            </React.Fragment>
        </ConnectedRouter>
    )