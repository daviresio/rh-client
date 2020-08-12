import React, {useEffect, useState} from 'react';
import {loadList, search} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import Page from "../../layout/Page";
import CardSimples from "../../components/card/CardSimples";
import CardBorda from "../../components/card/CardBorda";
import Buttom from "../../components/Buttom";
import Edit from "../../components/util/Edit";
import {changeRoute} from "../../store/actions/routerActions";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";
import TableManual from "../../components/table/TableManual";
import {getValue} from "../../util/metodosUteis";
import {openModalAndReloadOtherEntity} from "../../store/actions/modalActions";

let BeneficioDetalhe = ({match, search, changeRoute, beneficio, loadData, qtdColaboradores, openModalAndReload}) => {

    const [qtdVinculados, setVinculados] = useState(0);
    const [qtdDesvinculados, setDesvinculados] = useState(0);

    useEffect(() => {
        search(match.params.id);
        loadData('colaboradores/quantidade', 'qtdColaboradores')
    }, []);

    useEffect(() => {
        if (qtdColaboradores && beneficio && beneficio.colaboradores)
            setDesvinculados(qtdColaboradores.ativo - beneficio.colaboradores.length);

        setVinculados(beneficio && beneficio.colaboradores ? beneficio.colaboradores.length : 0)
    }, [beneficio, qtdColaboradores]);

    return (
        <Page title={`Informacoes do beneficio ${beneficio.nome || ''}`}>
            <div className={'page-divided'}>
                <div>
                    <Buttom color={'blue'} label={'Edicao em massa'} onClick={() => changeRoute('/beneficios/editar-em-massa/' + match.params.id)}/>
                    <CardSimples style={{marginTop: '.5rem'}}>
                        <div className={'body-informacoes-beneficios'}>
                            <div className={'resumo'}>
                                <div className={`card-informacoes-beneficios card-informacoes-beneficios-blue`}>
                                    <span>{qtdVinculados}</span><span>{'Colaboradores Vinculados'}</span></div>
                                <div className={`card-informacoes-beneficios card-informacoes-beneficios-red`}>
                                    <span>{qtdDesvinculados}</span><span>{'Colaboradores Desvinculados'}</span></div>
                            </div>

                            <TableManual tableHeader={
                                <tr>
                                    <th>Nome</th>
                                    <th>Tipo</th>
                                    <th>Vinculo</th>
                                    <th>Vinculado a</th>
                                    <th>R$/Func.</th>
                                    <th>R$/Empresa</th>
                                    <th>Editar</th>
                                </tr>
                            }
                                         tableBody={
                                             beneficio && beneficio.colaboradores && beneficio.colaboradores.map(v =>
                                                 <tr key={v.id}>
                                                     <td>{v.nome}</td>
                                                     <td>{v.tipoCalculoSaldo}</td>
                                                     <td>{getValue('vinculo.nome', v)}</td>
                                                     <td>{}</td>
                                                     <td>{getValue('ColaboradorBeneficio.custoColaborador', v)}</td>
                                                     <td>{getValue('ColaboradorBeneficio.custoEmpresa', v)}</td>
                                                     <td>{<Edit onClick={() => openModalAndReload('editarValorBeneficio', v, beneficio.id)}/>}</td>
                                                 </tr>
                                             )
                                         }
                            />

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
                            <div className={'valor'}>{beneficio.nome}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Categoria</div>
                            <div className={'valor'}>{beneficio.categoria ? beneficio.categoria.nome : '-'}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Operador</div>
                            <div className={'valor'}>{beneficio.operador}</div>
                        </div>
                        <div className={'beneficio-detalhe-item'}>
                            <div className={'chave'}>Data de corte</div>
                            <div className={'valor'}>{beneficio.dataDeCorte}</div>
                        </div>
                    </CardBorda>
                    <CardBorda start title={'Relatorio'}>
                        <Select label={'Dados baseados no mes:'} options={[{nome: '06/2019', id: 1}, {nome: '07/2019', id: 2}]}/>
                        <div className={'beneficio-detalhe-btn-gerar-relatorio'}>
                            <Input label={'Dias úteis baseado na data de corte do benefício:'} disabled/>
                            <Buttom color={'green'} label={'Gerar'} style={{maxHeight: '4rem', marginBottom: '1.6rem'}}/>
                        </div>
                        <Buttom color={'gray'} label={'Configurar feriados'} full onClick={() => changeRoute('/folha/configuracao/configurar-dsr')}/>
                    </CardBorda>
                    <Buttom color={'red'} label={'Remover beneficio'} full style={{marginTop: '2rem'}}/>
                </div>
            </div>

        </Page>
    );
};

const mapStateToProps = state => ({
    beneficio: state.serverValues.beneficio,
    qtdColaboradores: state.serverValues.qtdColaboradores,
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('beneficios', id, 'beneficio')),
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    openModalAndReload: (modal, value, idReload, data) => dispatch(openModalAndReloadOtherEntity(modal, value, idReload, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeneficioDetalhe);
