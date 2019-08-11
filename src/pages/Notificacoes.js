import React from 'react';
import PageEmpty from "../layout/PageEmpty";
import {changeRoute} from "../store/actions/routerActions";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import AlteracaoDados from "./notificacoes/AlteracaoDados";
import FaleComRh from "./notificacoes/FaleComRh";
import TerminoExperiencia from "./notificacoes/TerminoExperiencia";
import SolicitacaoFerias from "./notificacoes/SolicitacaoFerias";
import AprovacaoFeriasPeloGestor from "./notificacoes/AprovacaoFeriasPeloGestor";
import AprovacaoFeriasPeloRh from "./notificacoes/AprovacaoFeriasPeloRh";
import ConclusaoFerias from "./notificacoes/ConclusaoFerias";
import FeriasAVencer from "./notificacoes/FeriasAVencer";
import PreenchimentoAdmissao from "./notificacoes/PreenchimentoAdmissao";
import AtividadesDaSemana from "./notificacoes/AtividadesDaSemana";
import FaltasEAfastamentos from "./notificacoes/FaltasEAfastamentos";
import CardSimples from "../components/card/CardSimples";

const Notificacoes = props => {
    const path = '/notificacoes/';
    const currentPath = props.router.location.pathname;
    const {changeRoute} = props;

    const activeClass = v => currentPath === path + v ? 'active' : null;

    return (
        <PageEmpty>
            <CardSimples className={'notificacoes'}>
            <ul>
                <li className={activeClass('alteracao-dados')} onClick={()=> changeRoute(path + 'alteracao-dados')}>{'Alteracao de dados'}</li>
                <li className={activeClass('fale-com-rh')}  onClick={()=> changeRoute(path + 'fale-com-rh')}>{'Fale com o rh'}</li>
                <li className={activeClass('termino-experiencia')}  onClick={()=> changeRoute(path + 'termino-experiencia')}>{'Termino de experiencia'}</li>
                <li className={activeClass('solicitacao-ferias')}  onClick={()=> changeRoute(path + 'solicitacao-ferias')}>{'Solicitacoes de ferias'}</li>
                <li className={activeClass('aprovacao-ferias-pelo-gestor')}  onClick={()=> changeRoute(path + 'aprovacao-ferias-pelo-gestor')}>{'Aprovacao de ferias pelo gestor'}</li>
                <li className={activeClass('aprovacao-ferias-pelo-rh')}  onClick={()=> changeRoute(path + 'aprovacao-ferias-pelo-rh')}>{'Aprovacao de ferias pelo rh'}</li>
                <li className={activeClass('conclusao-ferias')}  onClick={()=> changeRoute(path + 'conclusao-ferias')}>{'Conclusao de ferias'}</li>
                <li className={activeClass('ferias-a-vencer')}  onClick={()=> changeRoute(path + 'ferias-a-vencer')}>{'Ferias a vencer'}</li>
                <li className={activeClass('preenchimento-admissao')}  onClick={()=> changeRoute(path + 'preenchimento-admissao')}>{'Preenchimento da admissao'}</li>
                <li className={activeClass('atividades-da-semana')}  onClick={()=> changeRoute(path + 'atividades-da-semana')}>{'Atividades da semana'}</li>
                <li className={activeClass('faltas-e-afastamentos')}  onClick={()=> changeRoute(path + 'faltas-e-afastamentos')}>{'Faltas e afastamentos'}</li>
            </ul>

            <div className={'body'}>
                <Switch>
                    <Route path={path + 'alteracao-dados'} component={AlteracaoDados} />
                    <Route path={path + 'fale-com-rh'} component={FaleComRh} />
                    <Route path={path + 'termino-experiencia'} component={TerminoExperiencia} />
                    <Route path={path + 'solicitacao-ferias'} component={SolicitacaoFerias} />
                    <Route path={path + 'aprovacao-ferias-pelo-gestor'} component={AprovacaoFeriasPeloGestor} />
                    <Route path={path + 'aprovacao-ferias-pelo-rh'} component={AprovacaoFeriasPeloRh} />
                    <Route path={path + 'conclusao-ferias'} component={ConclusaoFerias} />
                    <Route path={path + 'ferias-a-vencer'} component={FeriasAVencer} />
                    <Route path={path + 'preenchimento-admissao'} component={PreenchimentoAdmissao} />
                    <Route path={path + 'atividades-da-semana'} component={AtividadesDaSemana} />
                    <Route path={path + 'faltas-e-afastamentos'} component={FaltasEAfastamentos} />
                    <Redirect from={path} to={path + 'alteracao-dados'} exact={true} />
                </Switch>
            </div>
            </CardSimples>
        </PageEmpty>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(Notificacoes);
