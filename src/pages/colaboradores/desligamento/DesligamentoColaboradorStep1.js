import React, {useEffect} from 'react';
import {loadList, save, search, update} from "../../../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import CardSimples from "../../../components/card/CardSimples";
import styled from "styled-components";
import CardBorda from "../../../components/card/CardBorda";
import SelectRow from "../../../components/form/SelectRow";
import DatePicker from "../../../components/form/DatePicker";
import Checkbox from "../../../components/form/Checkbox";
import AlignContentOnGrid from "../../../components/util/AlignContentOnGrid";
import TextAreaRow from "../../../components/form/TextAreaRow";
import MultipleSelectRow from "../../../components/form/MultipleSelectRow";
import Buttom from "../../../components/Buttom";
import {formateDateFull, getValue, mapAndGetId} from "../../../util/metodosUteis";
import {simNaoOptions} from "../../../config/defaultValues";

let DesligamentoColaboradorStep1 = ({
                                        handleSubmit, match, router, setId, search, update, save, colaborador, loadData, contadores,
                                        tiposAvisosPrevios, tiposDesligamentos, ...props
                                    }) => {

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        setId(match.params.id);
        search(match.params.id);
        loadData('contadores');
        loadData('tipos-avisos-previos', 'tiposAvisosPrevios');
        loadData('tipos-desligamentos', 'tiposDesligamentos')
    }, []);


    const submit = v => {
        console.log({...v, colaborador: colaborador.id});
        v.id ? update({...v, colaborador: colaborador.id}, {redirect: {route: `/colaboradores/desligamento/rescisao/${colaborador.id}`}, field: 'colaborador'})
            : save({...v, colaborador: colaborador.id}, {redirect: {route: `/colaboradores/desligamento/rescisao/${colaborador.id}`}, field: 'colaborador'})
    };

    return (
        <CardSimples className={'desligamento'}>
            <DividedHeader>
                <div className={'info-header'}>
                    <div className={'campos-inline'}>
                        <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginRight: '1rem'}}>Nome:</div>
                        <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{'Davi Resio'}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Cargo:</div>
                        <div className={'campo-light'}>{getValue('cargo.nome', colaborador)}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Departamento:</div>
                        <div className={'campo-light'}>{getValue('departamento.nome', colaborador)}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Salario atual:</div>
                        <div className={'campo-light'}>{colaborador.salario}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Funcionario desde:</div>
                        <div className={'campo-light'}>{formateDateFull(colaborador.dataAdmissao)}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Saldo de ferias em aberto:</div>
                        <div className={'campo-light'}>{''}</div>
                    </div>
                    <div className={'campos-inline'}>
                        <div className={'campo-bold'}>Saldo de ferias proporcionais:</div>
                        <div className={'campo-light'}>{''}</div>
                    </div>
                </div>
                <CardBorda title={'Beneficios vinculados'} start style={{marginTop: '0'}}>
                    {colaborador && colaborador.beneficios && colaborador.beneficios.length && colaborador.beneficios.map((v, i) =>
                        <div className={i === 0 ? 'item-cadastro-colaborador remove-border' : 'item-cadastro-colaborador'}>
                            <div className={'dados'}>
                                <h3 style={{marginBottom: '.5rem'}}>{v.nome}</h3>
                                <div className={'campos-inline'}>
                                    <div className={'campo-bold'}>Categoria:</div>
                                    <div className={'campo-light'}>{v.categoria}</div>
                                </div>
                                <div className={'campos-inline'}>
                                    <div className={'campo-bold'}>Nome:</div>
                                    <div className={'campo-light'}>{colaborador.nome}</div>
                                </div>
                                <div className={'campos-inline'}>
                                    <div className={'campo-bold'}>Custo do colaborador:</div>
                                    <div className={'campo-light'}>{`R$: ${getValue('ColaboradorBeneficio.custoColaborador', v)}`}</div>
                                </div>
                                <div className={'campos-inline'}>
                                    <div className={'campo-bold'}>Custo da empresa:</div>
                                    <div className={'campo-light'}>{`R$: ${getValue('ColaboradorBeneficio.custoEmpresa', v)}`}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardBorda>
            </DividedHeader>

            <form onSubmit={handleSubmit(submit)}>
                <Field name={'tipo'} component={SelectRow} label={'Tipo de desligamento'} options={tiposDesligamentos}
                       required/>
                <Field name={'aviso'} component={SelectRow} label={'Aviso previo'} options={tiposAvisosPrevios}
                       required/>
                <Field name={'dataAviso'} component={DatePicker} label={'Data do aviso previo'}/>
                <Field name={'dataDesligamento'} component={DatePicker} label={'Data do desligamento (considerando ultimo dia de trabalho efetivo)'} required/>
                <Field name={'exameDemissional'} component={SelectRow} label={'Exame demissional realizado'} options={simNaoOptions} required/>
                <Field name={'dataExameDemissional'} component={DatePicker} label={'Data do exame demissional'}/>
                <AlignContentOnGrid margen>
                    <Field name={'desvincularBeneficios'} component={Checkbox} label={'Desvincular beneficios?'} type={'checkbox'}/>
                </AlignContentOnGrid>
                <Field name={'gestor'} component={SelectRow} label={'Mudanca de gestor'} options={[]}/>
                <Field name={'observacoes'} component={TextAreaRow} label={'Observacoes'}/>
                <Field name={'contadores'} component={MultipleSelectRow} label={'Contador'} options={contadores}/>
                <div className={'botoes-footer'}>
                    <Buttom color={'red'} label={'Cancelar'}/>
                    <Buttom color={'blue'} label={'Salvar e Avancar'} style={{marginRight: '2rem'}} type={'submit'}/>
                </div>
            </form>

        </CardSimples>
    );
};

DesligamentoColaboradorStep1 = reduxForm({form: 'desligarColaborador', enableReinitialize: true})(DesligamentoColaboradorStep1);

const mapStateToProps = state => ({
    router: state.router,
    colaborador: state.serverValues.colaborador,
    initialValues: {
        ...getValue('desligamento', state.serverValues.colaborador),
        contadores: mapAndGetId(getValue('desligamento.contadores', state.serverValues.colaborador)),
        aviso: getValue('desligamento.aviso.id', state.serverValues.colaborador),
        tipo: getValue('desligamento.tipo.id', state.serverValues.colaborador)
    },
    contadores: state.serverValues.contadores,
    tiposAvisosPrevios: state.serverValues.tiposAvisosPrevios,
    tiposDesligamentos: state.serverValues.tiposDesligamentos,
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    save: (value, redirect) => dispatch(save('desligamentos', value, redirect)),
    update: (value, redirect) => dispatch(update('desligamentos', value, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesligamentoColaboradorStep1);

const DividedHeader = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-bottom: 5rem;
`;

