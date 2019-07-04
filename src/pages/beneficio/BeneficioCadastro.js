import React, {useEffect, useState} from 'react';
import {save, search, update} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import SelectRow from "../../components/form/SelectRow";
import {simNaoOptions, tiposCalculoSaldoBeneficio, tiposCategoriaBeneficio} from "../../config/defaultValues";
import InputRow from "../../components/form/InputRow";
import DatePicker from "../../components/form/DatePicker";
import Page from "../../layout/Page";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import {changeRoute} from "../../store/actions/routerActions";
import CenterContent from "../../components/util/CenterContent";


let BeneficioCadastro = ({changeRoute, handleSubmit, save, match, search, update}) => {

    useEffect(()=> {
        if(match.params.id) search(match.params.id)
    }, [])

    const submit = values => match.params.id ? update(values, {redirect: {route: '/beneficios', field: 'beneficio'}}) : save(values, {redirect: {route: '/beneficios', field: 'beneficio'}})

    return (
        <Page title={'Cadastrar beneficio'}>
            <Buttom color={'gray'} label={'Ver todos'} style={{marginTop: '2rem'}}
                    onClick={() => changeRoute('/beneficios')}/>
            <CardSimples style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)}>
                    <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                    <Field component={InputRow} name={'operador'} label={'Operador'} required/>
                    <Field component={InputRow} name={'cnpjOperador'} label={'CNPJ do operador'}/>
                    <Field component={SelectRow} name={'categoria'} label={'Categoria'} options={tiposCategoriaBeneficio} required/>
                    <Divided/>
                    <CenterContent>
                        <div>
                            <h3>Que tipo de evento você desconta do crédito a ser inserido:</h3>
                            <Field component={Checkbox} name={'descontaFaltaMesAnterior'} label={'Faltas no mês anterior'}/> <br/>
                            <Field component={Checkbox} name={'descontaFeriasMesSeguinte'} label={'Férias no mês seguinte'}/> <br/>
                            <Field component={Checkbox} name={'descontaAfastamentosMesAnterior'}
                                   label={'Afastamentos no mês anterior'}/> <br/>
                            <Field component={Checkbox} name={'descontaLicencasMesSeguinte'} label={'Licenças no mês seguinte'}/> <br/>
                            <Field component={Checkbox} name={'descontaFeriasMesCorrente'} label={'Férias no mês corrente'}/> <br/>
                            <span>Atenção! Caso a sua forma de cálculo seja "Fixa mensal" o valor diário deduzido será do crédito mensal dividido por 30.</span>
                        </div>
                    </CenterContent>
                    <Divided/>
                    <Field component={SelectRow} name={'tipoCalculoSaldo'} label={'Como e calculado o saldo?'} options={tiposCalculoSaldoBeneficio} required/>
                    <Field component={SelectRow} name={'custoDaEmpresaPagoPeloColaborador'}
                           label={' O custo da empresa é pago para o colaborador na folha? '} options={simNaoOptions}
                           detail={' Se marcar como “Sim” neste campo, os valores definidos futuramente para cada colaborador' +
                           ' como “Custo da empresa” serão inseridos na Folha de Pagamento como vencimentos dos colaboradores. '}/>
                    <Field component={InputRow} name={'dataDeCorte'} label={'Data de corte'}
                           detail={' Dia de fechamento no mês do benefício.'} required/>
                    <Field component={DatePicker} name={'dataVencimentoContrato'}
                           label={'Data de vencimento do contrato'}
                           detail={'Caso o benefício possua um contrato, informe a data final do mesmo.'}/>
                    <Field component={InputRow} name={'descricao'} label={'Descricao'}/>
                    <Buttom color={'green'} label={'salvar'} type={'submit'} style={{marginTop: '2rem'}}/>
                </form>
            </CardSimples>
        </Page>
    );
};


BeneficioCadastro = reduxForm({form: 'beneficio', enableReinitialize: true})(BeneficioCadastro)

const mapStateToProps = state => ({
    router: state.router,
    modal: state.modal,
    initialValues: state.serverValues.beneficio,
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('beneficios', id, 'beneficio')),
    openModal: modal => dispatch(changeModalVisible(modal, true)),
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, redirect) => dispatch(save('beneficios', value, redirect)),
    update: (value, redirect) => dispatch(update('beneficios', value, redirect)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BeneficioCadastro);
