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
import VizualizarColaborador from "../pages/colaboradores/VizualizarColaborador";
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

export default () =>
    (
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Toolbar/>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/colaboradores/visualizar/:id'} component={VizualizarColaborador}/>
                    <Route path={'/colaboradores/cadastro-finalizado/:id'} component={CadastroFinalizado}/>
                    <Route path={'/colaboradores/cadastro'} component={NovoColaborador}/>
                    <Route path={'/colaboradores/dissidio'} component={Dissidio}/>
                    <Route path={'/colaboradores/editar-em-massa'} component={EditarColaboradoresEmMassa}/>
                    <Route path={'/colaboradores/gerenciar-acesso'} component={GerenciarAcesso}/>
                    <Route path={'/colaboradores/boas-vindas'} component={BoasVindas}/>
                    <Route path={'/colaboradores/recuperar-senha'} component={RecuperarSenha}/>
                    <Route path={'/colaboradores'} component={Colaboradores}/>
                    <Route path={'/ferias/cadastro-ferias-coletivas'} component={CadastroFeriasColetivas}/>
                    <Route path={'/ferias/cadastro-ferias-individuais'} component={GerenciarFeriasIndividuais}/>
                    <Route path={'/ferias'} exact={true} component={Ferias}/>
                    <Route path={'/beneficios/detalhe/:id'} component={BeneficioDetalhe}/>
                    <Route path={'/beneficios/cadastro/:id'} component={BeneficioCadastro}/>
                    <Route path={'/beneficios/cadastro'} component={BeneficioCadastro}/>
                    <Route path={'/beneficios'} component={Beneficios}/>
                    <Route path={'/folha/lancamento/:id'} component={FolhaLancamento}/>
                    <Route path={'/folha/lancamento'} component={FolhaLancamento}/>
                    <Route path={'/folha/tipo-lancamento-holerite'} component={EscolhaGerarHolerite}/>
                    <Route path={'/folha/holerite/importar'} component={LancamentoHoleriteAutomatico}/>
                    <Route path={'/folha/holerite/manual'} component={LancamentoHoleriteModal}/>
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
