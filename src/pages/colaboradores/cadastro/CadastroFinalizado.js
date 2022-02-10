import React from 'react';
import CardSimples from "../../../components/card/CardSimples";
import Buttom from "../../../components/Buttom";
import PageEmpty from "../../../layout/PageEmpty";
import {connect} from "react-redux";
import {changeRoute} from "../../../store/actions/routerActions";

const CadastroFinalizado = ({match, changeRoute}) => {
    return (
        <PageEmpty>
            <CardSimples className={'cadastro-finalizado'}>
                <i className="far fa-smile-beam"/>
                <span className={'title'}>Cadastro finalizado</span>
                <span className={'text'}>O colaborador foi adicionado ao diretório de colaboradores</span>
                <div className={'botao'}>
                    <Buttom color={'green'} label={'Enviar informacoes para a contabilidade'} full/>
                </div>
                <div className={'botao'}>
                    <Buttom color={'blue'} label={'Adicionar outro colaborador'} full onClick={()=> changeRoute('/colaboradores/cadastro')}/>
                </div>
                <div className={'botao'}>
                    <Buttom color={'orange'} label={'Imprimir termos e contratos'} full onClick={()=> changeRoute(`/colaboradores/visualizar/${match.params.id}`)}/>
                </div>
                <div className={'botao'}>
                    <Buttom color={'gray'} label={'Ir para o diretorio de colaboradores'} full onClick={()=> changeRoute('/colaboradores')}/>
                </div>
            </CardSimples>
        </PageEmpty>
    );
};

export default connect(null, dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(CadastroFinalizado);
