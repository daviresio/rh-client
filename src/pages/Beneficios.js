import React, {useEffect} from 'react';
import Page from "../layout/Page";
import Buttom from "../components/Buttom";
import CardSimples from "../components/card/CardSimples";
import {connect} from "react-redux";
import {changeRoute} from "../store/actions/routerActions";
import {loadList} from "../store/actions/serverActions";

const Beneficios = ({changeRoute, loadData, beneficios}) => {

    useEffect(()=> {
        loadData('beneficios')
    }, []);

    const cardBeneficio = ({nome, categoria, operador, id}) =>
        <CardSimples start className={'card-beneficio'} onClick={()=> changeRoute(`/beneficios/detalhe/${id}`)} key={id}>
            <div className={'title'}>
                {nome}
            </div>
            <div className={'tipo'}>
                {categoria ? categoria.nome : '-'}
            </div>
            <div className={'operador'}>
                Operador: &nbsp; {operador}
            </div>
        </CardSimples>;

    return (
        <Page title={'Beneficios da empresa'}>
            <div className={'header-botoes'}>
                <Buttom color={'blue'} label={'Adicionar beneficio'} style={{marginRight: '2rem'}} onClick={()=> changeRoute('/beneficios/cadastro')}/>
                <Buttom color={'green'} label={'Contratar beneficio'}/>
            </div>
            <div className={'beneficios-body'}>
                {beneficios && beneficios.length > 0 && beneficios.map(v => cardBeneficio({...v}))}
            </div>
        </Page>
    );
};

const mapStateToProps = state => ({
    router: state.router,
    beneficios: state.serverValues.beneficios,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Beneficios);
