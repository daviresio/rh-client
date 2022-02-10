import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import {changeRoute} from "../../store/actions/routerActions";
import {loadList} from "../../store/actions/serverActions";
import {connect} from "react-redux";

const Documentos = ({changeRoute}) => {
    return (
        <CardBorda title={'Minutas padrao'} start>
            <Buttom color={'green'} label={'Adicionar documento'} onClick={() => changeRoute('/configuracao/documentos-minutas/cadastro')}/>
        </CardBorda>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Documentos);
