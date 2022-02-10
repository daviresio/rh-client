import React from 'react';
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import CardIcon from "../../components/card/CardIcon";

const FolhaLancamentoStep1Body = ({changeRoute, router, match}) => {

    const path = '/folha/lancamento/tipo-lancamento/';

    return (
        <div className={'folha'}>
            <div className={'cards'}>
                <CardIcon icon={<i className="fas fa-cloud-upload-alt" />} title={'Enviar horas extras'} subtitle={'arquivo ACJEF para cálculo de horas extras'}/>
                <CardIcon icon={<i className="fas fa-magic" />} title={'Automagico'} subtitle={'Lancamentos a partir de um unico arquivo de excel'}
                          onClick={() => changeRoute(path + 'importar/' + match.params.id)}/>
                <CardIcon icon={<i className="fas fa-wrench" />} title={'Manual'} subtitle={'Lancamentos atraves da plataforma'}
                          onClick={() => changeRoute(path + 'manual/' + match.params.id)}/>
            </div>
        </div>
    );
};

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(FolhaLancamentoStep1Body);

