import React from 'react';
import {connect} from "react-redux";
import {changeEmpresaPesquisaVisibility, changeUsuarioOpcoesVisibility} from "../store/actions/toolbarActions";
import ClickOutside from "../components/ClickOutside";
import {changeRoute} from "../store/actions/routerActions";

const Toolbar = ({usuario, empresa, empresas, pathname, toolbar, ...props}) => {
    const {empresaPesquisaVisible, usuarioOpcoesVisible} = toolbar;
    const {changeEmpresaPesquisaVisibility, changeUsuarioOpcoesVisibility, changeRoute} = props;

    let icon = null;
    let title = null;

    if (pathname.includes('colaboradores')) {
        icon = 'users';
        title = 'Colaboradores'
    } else if (pathname.includes('ferias')) {
        icon = 'umbrella-beach';
        title = 'Ferias'
    } else if (pathname.includes('beneficios')) {
        icon = 'gift';
        title = 'Beneficios'
    } else if (pathname.includes('folha')) {
        icon = 'scroll';
        title = 'Folha de pagamento'
    } else if (pathname.includes('comunicacao')) {
        icon = 'phone';
        title = 'Comunicacao'
    } else if (pathname.includes('ponto')) {
        icon = 'clock';
        title = 'Ponto'
    } else if (pathname.includes('relatorios')) {
        icon = 'paste';
        title = 'Relatorios'
    } else if (pathname.includes('ajuda')) {
        icon = 'question-circle';
        title = 'Ajuda'
    } else {
        icon = 'home';
        title = 'Painel'
    }

    const getIconName = () => {
        if (usuario.nome) {
            const data = usuario.nome.split(' ');
            return data[0][0].concat(data[1][0]).toUpperCase()
        }
    };

    return (
        <div className={'toolbar'}>
            <div className={'rota'}>
                <i className={`fas fa-${icon}`}/>
                <span>{title}</span>
            </div>

            <div className={'opcoes'}>
                <ClickOutside clickOutside={() => changeEmpresaPesquisaVisibility(false)}>
                    <div onClick={() => changeEmpresaPesquisaVisibility(!empresaPesquisaVisible)} className={'empresa'}>
                        <div className={'empresa-selecionada'}>
                            <i className="fas fa-building"/>
                            {empresa.nome}
                        </div>
                        <i style={{position: "absolute", right: '1rem'}} className="fas fa-angle-down"/>
                        <div className={empresaPesquisaVisible ? 'empresa-pesquisa empresa-pesquisa-visible' : 'empresa-pesquisa empresa-pesquisa-hidden'}>
                            <div className={'item adicionar'}>
                                <i className="fas fa-plus"/>
                                <span>{'Adicionar empresa'}</span>
                            </div>
                            {empresas && empresas.map(v => <div className={'item empresas'}>{v.nome}</div>)}
                        </div>
                    </div>
                </ClickOutside>
                <div className={'usuario'}>
                    <ClickOutside clickOutside={() => changeUsuarioOpcoesVisibility(false)}>
                        <div onClick={() => changeUsuarioOpcoesVisibility(!usuarioOpcoesVisible)} className={'nome'}>{getIconName()}</div>
                        <div className={usuarioOpcoesVisible ? 'opcoes opcoes-visible' : 'opcoes opcoes-hidden'}>
                            <div className={'item'} onClick={() => changeRoute('/configuracao/alterar-senha')}><i className="fas fa-key"/> <span>{'Alterar senha'}</span></div>
                            <div className={'item'} onClick={() => changeRoute('/configuracao')}><i className="fas fa-cog"/> <span>{'Configuracoes'}</span></div>
                            <div className={'item'} onClick={() => changeRoute('/notificacoes')}><i className="fas fa-bell"/> <span>{'Ajustes de notificacoes'}</span></div>
                            <div className={'item'} onClick={() => changeRoute('/financeiro')}><i className="fas fa-money-bill-wave"/> <span>{'Financeiro'}</span></div>
                            <div className={'item'}><i className="fas fa-question-circle"/> <span>{'Ajuda'}</span></div>
                            <div className={'item'}><i className="fas fa-sign-out-alt"/> <span>{'Sair'}</span></div>
                        </div>
                    </ClickOutside>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    usuario: state.usuario.usuario,
    empresa: state.usuario.empresa,
    empresas: state.usuario.empresas,
    pathname: state.router.location.pathname,
    toolbar: state.toolbar,
});
const mapDispatchToProps = dispatch => ({
    changeEmpresaPesquisaVisibility: value => dispatch(changeEmpresaPesquisaVisibility(value)),
    changeUsuarioOpcoesVisibility: value => dispatch(changeUsuarioOpcoesVisibility(value)),
    changeRoute: route => dispatch(changeRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
