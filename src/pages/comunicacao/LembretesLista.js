import React from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import Table from "../../components/table/Table";

const LembretesLista = ({changeRoute, router}) => {

    const path = '/comunicacao/lembretes/'

    return (
        <div className={'lembretes'}>
            <div className={'title'}>{'Lembretes'}</div>
            <div className={'subtitle'}>{'Através dessa funcionalidade, você poderá organizar alertas e lembretes de datas recorrentes e pontuais. Clique no botão criar um lembrete e preencha o formulário.'}</div>
            <Buttom className={'botao'} color={'green'} label={'Criar lembrete'} onClick={()=>changeRoute(path + 'cadastro')}/>
            <CardSimples>
                <Table header={['Lembrete', 'Titulo', 'Descricao', 'Dia do lembrete', 'Recorrente?', 'Acoes']} />
            </CardSimples>
        </div>
    );
};

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(LembretesLista);
