import React from 'react';
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

const LancamentoHolerite = () => {

    const path = '/folha/holerites/lancamento/'

    return (
        <div className={'lancamento-holerite'}>
            <CardLancamentoHolerite icon={<i className="fas fa-magic"/>} title={'Automagico'}
                                    subtitle={'Lancamentos a partir de um unico arquivo de excel'}
                                    onClick={() => changeRoute(path + 'importar')}/>
            <CardLancamentoHolerite icon={<i className="fas fa-wrench"/>} title={'Manual'}
                                    subtitle={'Lancamentos atraves da plataforma'}
                                    onClick={() => changeRoute(path + 'manual')}/>
        </div>
    );
};

export default connect(state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(LancamentoHolerite);

const CardLancamentoHolerite = ({icon, title, subtitle, onClick}) => {

    return (
        <div className={'card-lancamento-holerite'} onClick={onClick}>
            {icon}
            <div className={'title'}>{title}</div>
            <div className={'subtitle'}>{subtitle}</div>
        </div>
    );
}