import React from 'react';
import {changeRoute} from "../store/actions/routerActions";
import {connect} from "react-redux";

const Navbar = ({changeRoute, pathname}) => {

    const classeCss = path => pathname.includes(path) ? 'item active' : 'item';

    return (
        <div className={'navbar'}>
            <div className={'logo'}>{'RH Inteligente'}</div>
            <ul className={'lista'}>
                <li className={pathname === '/' ? 'item active' : 'item'} onClick={() => changeRoute('/')}>
                    <i className={`fas fa-home`}/>
                    <span>{'Painel'}</span>
                </li>
                <li className={classeCss('colaboradores')} onClick={() => changeRoute('/colaboradores')}>
                    <i className={`fas fa-users`}/>
                    <span>{'Colaboradores'}</span>
                </li>
                <li className={classeCss('ferias')} onClick={() => changeRoute('/ferias')}>
                    <i className={`fas fa-umbrella-beach`}/>
                    <span>{'Ferias'}</span>
                </li>
                <li className={classeCss('beneficios')} onClick={() => changeRoute('/beneficios')}>
                    <i className={`fas fa-gift`}/>
                    <span>{'Beneficios'}</span>
                </li>
                <li className={classeCss('folha')} onClick={() => changeRoute('/folha')}>
                    <i className={`fas fa-scroll`}/>
                    <span>{'Folha de pagamento'}</span>
                </li>
                <li className={classeCss('comunicacao')} onClick={() => changeRoute('/comunicacao')}>
                    <i className={`fas fa-phone`}/>
                    <span>{'Comunicacao'}</span>
                </li>
                <li className={classeCss('ponto')} onClick={() => changeRoute('/ponto')}>
                    <i className={`fas fa-clock`}/>
                    <span>{'Ponto'}</span>
                </li>
                <li className={classeCss('relatorios')} onClick={() => changeRoute('/relatorios')}>
                    <i className={`fas fa-paste`}/>
                    <span>{'Relatorios'}</span>
                </li>
                <li className={'separador'} />
                <li className={classeCss('ajuda')} onClick={() => changeRoute('/ajuda')}>
                    <i className={`fas fa-question-circle`}/>
                    <span>{'Ajuda'}</span>
                </li>
            </ul>
        </div>
    );
};
const mapStateToProps = ({router}) => router.location;
const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
