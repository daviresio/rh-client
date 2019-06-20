import React, {useEffect} from 'react';
import {search, update} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import Page from "../../layout/Page";
import CardSimples from "../../components/card/CardSimples";
import CardBorda from "../../components/card/CardBorda";
import Buttom from "../../components/Buttom";
import Table from "../../components/Table";
import Edit from "../../components/util/Edit";
import {changeRoute} from "../../store/actions/routerActions";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";

let BeneficioDetalhe = ({match, search, changeRoute}) => {

    useEffect(() => {
        search(match.params.id)
    }, [])

    return (
        <Page title={'Informacoes do beneficio'}>
            <div className={'page-divided'}>
                <div>
                    <Buttom color={'blue'} label={'Edicao em massa'}/>
                    <CardSimples style={{marginTop: '.5rem'}}>
                        <div className={'body-informacoes-beneficios'}>
                            <div className={'resumo'}>
                                <div className={`card-informacoes-beneficios card-informacoes-beneficios-blue`}>
                                    <span>{0}</span><span>{'Colaboradores Vinculados'}</span></div>
                                <div className={`card-informacoes-beneficios card-informacoes-beneficios-red`}>
                                    <span>{1}</span><span>{'Colaboradores Desvinculados'}</span></div>
                            </div>
                            <Table
                                header={['Nome', 'Tipo', 'Vinculo', 'Vinculado a', 'R$/Func.', 'R$/Empresa', 'Editar']}/>
                        </div>
                    </CardSimples>
                </div>
                <div style={{marginTop: '1.8rem'}}>
                    <CardBorda start title={'Sobre o beneficio'}>
                        <div className={'beneficio-detalhe-editar'}>
                            <Edit onClick={() => changeRoute(`/beneficios/cadastro/${match.params.id}`)}/>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Nome do beneficio</div>
                            <div className={'valor'}>{'Vale alimentacao'}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Categoria</div>
                            <div className={'valor'}>{'Vale alimentacao'}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Operador</div>
                            <div className={'valor'}>{'Policard'}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Data de corte</div>
                            <div className={'valor'}>{'30'}</div>
                        </div>
                    </CardBorda>
                    <CardBorda start title={'Relatorio'}>
                        <Select label={'Dados baseados no mes:'} options={[{nome: '06/2019', id: 1}, {nome: '07/2019', id: 2}]}/>
                        <div className={'beneficio-detalhe-btn-gerar-relatorio'}>
                            <Input label={'Dias úteis baseado na data de corte do benefício:'} disabled/>
                            <Buttom color={'green'} label={'Gerar'} style={{maxHeight: '4rem', marginBottom: '1.6rem'}}/>
                        </div>
                        <Buttom color={'gray'} label={'Configurar feriados'} full onClick={()=> changeRoute('/folha/configuracao/configurar-dsr')}/>
                    </CardBorda>
                    <Buttom color={'red'} label={'Remover beneficio'} full style={{marginTop: '2rem'}}/>
                </div>
            </div>

        </Page>
    );
};

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('beneficios', id, 'beneficio')),
    changeRoute: route => dispatch(changeRoute(route)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BeneficioDetalhe);
