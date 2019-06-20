import React from 'react';
import Page from "../layout/Page";
import Buttom from "../components/Buttom";
import CardSimples from "../components/card/CardSimples";
import {connect} from "react-redux";
import {changeRoute} from "../store/actions/routerActions";

const Beneficios = ({changeRoute}) => {

    const cardBeneficio = ({nome, tipo, operador, id}) =>
        <CardSimples start className={'card-beneficio'} onClick={()=> changeRoute(`/beneficios/detalhe/${id}`)}>
            <div className={'title'}>
                {nome}
            </div>
            <div className={'tipo'}>
                {tipo}
            </div>
            <div className={'operador'}>
                Operador: &nbsp; {operador}
            </div>
        </CardSimples>

    return (
        <Page title={'Beneficios da empresa'}>
            <div className={'header-botoes'}>
                <Buttom color={'blue'} label={'Adicionar beneficio'} style={{marginRight: '2rem'}} onClick={()=> changeRoute('/beneficios/cadastro')}/>
                <Buttom color={'green'} label={'Contratar beneficio'}/>
            </div>
            <div className={'beneficios-body'}>
                {cardBeneficio({nome: 'Vale transporte', tipo: 'asistencia de transporte', operador: 'alelo', id: 1})}
                {cardBeneficio({nome: 'Vale transporte', tipo: 'asistencia de transporte', operador: 'alelo', id: 2})}
                {cardBeneficio({nome: 'Vale transporte', tipo: 'asistencia de transporte', operador: 'alelo', id: 3})}
            </div>
        </Page>
    );
};

export default connect(
    state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}),
)(Beneficios);
