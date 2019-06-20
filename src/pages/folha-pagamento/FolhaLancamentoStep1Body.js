import React from 'react';
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";

const FolhaLancamentoStep1Body = ({changeRoute, router}) => {

    const path = '/folha/lancamento/tipo-lancamento/'

    return (
        <div className={'folha'}>
            <div className={'cards'}>
                <CardFolha icon={<i className="fas fa-cloud-upload-alt" />} title={'Enviar horas extras'} subtitle={'arquivo ACJEF para cálculo de horas extras'}/>
                <CardFolha icon={<i className="fas fa-magic" />} title={'Automagico'} subtitle={'Lancamentos a partir de um unico arquivo de excel'}
                           onClick={()=> changeRoute(path + 'importar')}/>
                <CardFolha icon={<i className="fas fa-wrench" />} title={'Manual'} subtitle={'Lancamentos atraves da plataforma'}
                           onClick={()=> changeRoute(path + 'manual')}/>
            </div>
        </div>
    );
};

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(FolhaLancamentoStep1Body);

const CardFolha = ({icon, title, subtitle, onClick}) => {

    return (
        <div className={'card-folha-lancamento'} onClick={onClick}>
            {icon}
            <div className={'title'}>{title}</div>
            <div className={'subtitle'}>{subtitle}</div>
        </div>
    );
}