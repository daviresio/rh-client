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
import Beneficios from "../pages/Beneficios";
import Comunicacao from "../pages/Comunicacao";
import Ponto from "../pages/Ponto";
import Relatorios from "../pages/Relatorios";
import Ajuda from "../pages/Ajuda";
import Configuracao from "../pages/Configuracao";
import Notificacoes from "../pages/Notificacoes";
import AlterarSenha from "../pages/configuracao/AlterarSenha";
import Financeiro from "../pages/Financeiro";

export default () =>
    (
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Toolbar/>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/colaboradores/cadastro'} component={NovoColaborador}/>
                    <Route path={'/colaboradores'} component={Colaboradores}/>
                    <Route path={'/ferias'} exact={true} component={Ferias}/>
                    <Route path={'/beneficios'} exact={true} component={Beneficios}/>
                    <Route path={'/folha'} component={FolhaPagamento}/>
                    <Route path={'/comunicacao'} component={Comunicacao}/>
                    <Route path={'/ponto'} exact={true} component={Ponto}/>
                    <Route path={'/relatorios'} exact={true} component={Relatorios}/>
                    <Route path={'/ajuda'} exact={true} component={Ajuda}/>
                    <Route path={'/configuracao/alterar-senha'} exact={true} component={AlterarSenha}/>
                    <Route path={'/configuracao'} component={Configuracao}/>
                    <Route path={'/notificacoes'} component={Notificacoes}/>
                    <Route path={'/financeiro'} component={Financeiro}/>
                </Switch>
            </React.Fragment>
        </ConnectedRouter>
    )
