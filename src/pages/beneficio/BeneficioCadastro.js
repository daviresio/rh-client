import React from 'react';
import {search, update} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import SelectRow from "../../components/form/SelectRow";
import {periodoRecorrencia, simNaoOptions, tiposCategoriaBeneficio, tiposLembretes} from "../../config/defaultValues";
import InputRow from "../../components/form/InputRow";
import RadioButton from "../../components/form/RadioButton";
import DatePicker from "../../components/form/DatePicker";
import PageEmpty from "../../layout/PageEmpty";
import Page from "../../layout/Page";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import {changeRoute} from "../../store/actions/routerActions";


let BeneficioCadastro = ({changeRoute, router, handleSubmit}) => {

    const submit = values => {
    }

    return (
        <Page title={'Cadastrar beneficio'}>
            <Buttom color={'gray'} label={'Ver todos'} style={{marginTop: '2rem'}}
                    onClick={() => changeRoute('/beneficios')}/>
            <CardSimples style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)}>
                    <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                    <Field component={SelectRow} name={'operador'} label={'Operador'} required/>
                    <Field component={InputRow} name={'cnpjOperador'} label={'CNPJ do operador'}/>
                    <Field component={SelectRow} name={'categoria'} label={'Categoria'}
                           options={tiposCategoriaBeneficio} required/>
                    <Divided/>
                    <h3>Que tipo de evento você desconta do crédito a ser inserido:</h3>
                    <Field component={Checkbox} name={'faltasMesAnterior'} label={'Faltas no mês anterior'}/> <br/>
                    <Field component={Checkbox} name={'feriasMesSeguinte'} label={'Férias no mês seguinte'}/> <br/>
                    <Field component={Checkbox} name={'afastamentosMesAnterior'}
                           label={'Afastamentos no mês anterior'}/> <br/>
                    <Field component={Checkbox} name={'licencasMesSeguinte'} label={'Licenças no mês seguinte'}/> <br/>
                    <Field component={Checkbox} name={'feriasMesCorrente'} label={'Férias no mês corrente'}/> <br/>
                    <span>Atenção! Caso a sua forma de cálculo seja "Fixa mensal" o valor diário deduzido será do
                        crédito mensal dividido por 30.</span>
                    <Divided/>
                    <Field component={SelectRow} name={'calculoSaldo'} label={'Como e calculado o saldo?'}
                           options={[
                               {
                                   nome: 'Fixo mensal',
                                   id: 1,
                               },
                               {
                                   nome: 'Dias uteis do mes seguinte',
                                   id: 2,
                               },
                               {
                                   nome: 'Fixo',
                                   id: 3,
                               },
                           ]} required/>
                    <Field component={SelectRow} name={'custoPagoPeloColaborador'}
                           label={' O custo da empresa é pago para o colaborador na folha? '} options={simNaoOptions}
                           detail={' Se marcar como “Sim” neste campo, os valores definidos futuramente para cada colaborador' +
                           ' como “Custo da empresa” serão inseridos na Folha de Pagamento como vencimentos dos colaboradores. '}/>
                    <Field component={InputRow} name={'diaFechamento'} label={'Data de corte'}
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
    initialValues: {},
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('beneficios', id, 'beneficio')),
    update: (value, redirect) => dispatch(update('beneficios', value, redirect)),
    openModal: modal => dispatch(changeModalVisible(modal, true)),
    changeRoute: route => dispatch(changeRoute(route))
})

BeneficioCadastro = reduxForm({form: 'beneficio', enableReinitialize: true})(BeneficioCadastro);

export default connect(mapStateToProps, mapDispatchToProps)(BeneficioCadastro);
