import React from 'react';
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import CardBorda from "../../components/card/CardBorda";

const ColaboradoresDesligados = ({changeRoute}) => {
    return (
        <Page title={'Colaboradores desligados'}>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/colaboradores/gestao')}/>
            <CardBorda color={'red'} icon={'users'} title={`Desligados(${'0'})`}>

            </CardBorda>
        </Page>
    );
};

export default connect(null, dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(ColaboradoresDesligados);
