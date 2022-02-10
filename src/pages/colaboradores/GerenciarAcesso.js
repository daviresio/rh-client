import React from 'react';
import CardIcon from "../../components/card/CardIcon";
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

const GerenciarAcesso = ({changeRoute}) => {
    return (
        <Page title={'Gerenciar acesso dos colaboradores'}>
            <Buttom color={'gray'} label={'voltar'} onClick={()=> changeRoute('/colaboradores/gestao')}/>
            <div className={'cards-gerenciar-acesso'}>
                <CardIcon icon={<i className="fas fa-comments"/>} title={'Boas vindas'} subtitle={'Envie um convite para os colaboradores que nunca acessaram o sistema'}
                          onClick={()=> changeRoute('/colaboradores/boas-vindas')}/>
                <CardIcon icon={<i className="fas fa-key"/>} title={'Recuperar senha'} subtitle={'Envie um e-mail para recuperar a senha de colaboradores que ja possuem acesso'}
                          onClick={()=> changeRoute('/colaboradores/recuperar-senha')}/>
            </div>
        </Page>
    );
};

export default connect(null, dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(GerenciarAcesso);
