import React from 'react';
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import CardIcon from "../../components/card/CardIcon";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

const EscolhaGerarHolerite = ({changeRoute}) => {
    return (
        <Page title={'Folha de pagamentos - Holerites referentes a '}>
            <Buttom color={'gray'} label={'voltar'} onClick={()=> changeRoute('/colaboradores/gestao')}/>
            <div className={'cards-escolher-envio-holerite'}>
                <CardIcon icon={<i className="fas fa-magic" />} title={'Automagico'} subtitle={'Lancamentos a partir de um unico arquivo de excel'}
                          onClick={()=> changeRoute('/folha/holerite/importar')}/>
                <CardIcon icon={<i className="fas fa-wrench" />} title={'Manual'} subtitle={'Lancamentos atraves da plataforma'}
                          onClick={()=> changeRoute('/folha/holerite/manual')}/>
            </div>
        </Page>
    );
};

export default connect(null, dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(EscolhaGerarHolerite);
