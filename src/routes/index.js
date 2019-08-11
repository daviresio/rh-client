import React from 'react';
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import {Route, Switch} from 'react-router-dom'
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
import VizualizarColaborador from "../pages/colaboradores/VisualizarColaborador";
import CadastroFinalizado from "../pages/colaboradores/CadastroFinalizado";
import FolhaLancamento from "../pages/folha-pagamento/FolhaLancamento";
import BeneficioCadastro from "../pages/beneficio/BeneficioCadastro";
import BeneficioDetalhe from "../pages/beneficio/BeneficioDetalhe";
import Dissidio from "../pages/colaboradores/disidio/Dissidio";
import EditarColaboradoresEmMassa from "../pages/colaboradores/EditarColaboradoresEmMassa";
import GerenciarAcesso from "../pages/colaboradores/GerenciarAcesso";
import BoasVindas from "../pages/configuracao/BoasVindas";
import RecuperarSenha from "../pages/configuracao/RecuperarSenha";
import CadastroFeriasColetivas from "../pages/ferias/CadastroFeriasColetivas";
import GerenciarFeriasIndividuais from "../pages/ferias/GerenciarFeriasIndividuais";
import EscolhaGerarHolerite from "../pages/folha-pagamento/EscolhaGerarHolerite";
import LancamentoHoleriteAutomatico from "../pages/folha-pagamento/LancamentoHoleriteAutomatico";
import LancamentoHoleriteModal from "../modais/LancamentoHoleriteModal";
import LogarUsuario from "../pages/LogarUsuario";
import ProtectedRoute from "./ProtectedRoute";

export default () =>
    (
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Toolbar/>
                <Navbar/>
                <Switch>
                    <ProtectedRoute path={'/'} exact={true} component={Home}/>
                    <ProtectedRoute path={'/colaboradores/visualizar/:id'} component={VizualizarColaborador}/>
                    <ProtectedRoute path={'/colaboradores/cadastro-finalizado/:id'} component={CadastroFinalizado}/>
                    <ProtectedRoute path={'/colaboradores/cadastro'} component={NovoColaborador}/>
                    <ProtectedRoute path={'/colaboradores/dissidio'} component={Dissidio}/>
                    <ProtectedRoute path={'/colaboradores/editar-em-massa'} component={EditarColaboradoresEmMassa}/>
                    <ProtectedRoute path={'/colaboradores/gerenciar-acesso'} component={GerenciarAcesso}/>
                    <ProtectedRoute path={'/colaboradores/boas-vindas'} component={BoasVindas}/>
                    <ProtectedRoute path={'/colaboradores/recuperar-senha'} component={RecuperarSenha}/>
                    <ProtectedRoute path={'/colaboradores'} component={Colaboradores}/>
                    <ProtectedRoute path={'/ferias/cadastro-ferias-coletivas'} component={CadastroFeriasColetivas}/>
                    <ProtectedRoute path={'/ferias/cadastro-ferias-individuais'} component={GerenciarFeriasIndividuais}/>
                    <ProtectedRoute path={'/ferias'} exact={true} component={Ferias}/>
                    <ProtectedRoute path={'/beneficios/detalhe/:id'} component={BeneficioDetalhe}/>
                    <ProtectedRoute path={'/beneficios/cadastro/:id'} component={BeneficioCadastro}/>
                    <ProtectedRoute path={'/beneficios/cadastro'} component={BeneficioCadastro}/>
                    <ProtectedRoute path={'/beneficios'} component={Beneficios}/>
                    <ProtectedRoute path={'/folha/lancamento/:id'} component={FolhaLancamento}/>
                    <ProtectedRoute path={'/folha/lancamento'} component={FolhaLancamento}/>
                    <ProtectedRoute path={'/folha/tipo-lancamento-holerite'} component={EscolhaGerarHolerite}/>
                    <ProtectedRoute path={'/folha/holerite/importar'} component={LancamentoHoleriteAutomatico}/>
                    <ProtectedRoute path={'/folha/holerite/manual'} component={LancamentoHoleriteModal}/>
                    <ProtectedRoute path={'/folha'} component={FolhaPagamento}/>
                    <ProtectedRoute path={'/comunicacao'} component={Comunicacao}/>
                    <ProtectedRoute path={'/ponto'} exact={true} component={Ponto}/>
                    <ProtectedRoute path={'/relatorios'} exact={true} component={Relatorios}/>
                    <ProtectedRoute path={'/ajuda'} exact={true} component={Ajuda}/>
                    <ProtectedRoute path={'/configuracao/alterar-senha'} exact={true} component={AlterarSenha}/>
                    <ProtectedRoute path={'/configuracao'} component={Configuracao}/>
                    <ProtectedRoute path={'/notificacoes'} component={Notificacoes}/>
                    <ProtectedRoute path={'/financeiro'} component={Financeiro}/>
                    <Route path={'/logar-usuario/:token'} component={LogarUsuario}/>
                </Switch>
            </React.Fragment>
        </ConnectedRouter>
    )
