import React from 'react';
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import Divided from "../../components/util/Divided";
import Checkbox from "../../components/form/Checkbox";
import RadioButton from "../../components/form/RadioButton";
import {changeRoute} from "../../store/actions/routerActions";
import {tipoProvento} from "../../config/defaultValues";

let AdicionarEvento = ({router, handleSubmit, changeRoute}) => {
    
    const submit = values => {
    }

    return (
        <>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/folha/configuracao/')}/>
            <CardBorda title={'Adicionar um evento'}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}} className={'form-adicionar-evento'}>
                    <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                    <Field component={InputRow} name={'codigo'} label={'Codigo'} required/>
                    <Field component={InputRow} name={'eSocial'} label={'eSocial'}/>
                    <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tipoProvento} required/>

                    <Divided/>
                        <h2>Tibutar para</h2> <br/>
                        <Field component={Checkbox} name={'irrf'} label={'IRRF'}/> <br/>
                        <Field component={Checkbox} name={'inss'} label={'INSS'}/> <br/>
                        <Field component={Checkbox} name={'fgts'} label={'FGTS'}/>

                    <Divided/>
                        <h2>Considerar no calculo de DSR?</h2> <br/>
                        <Field component={RadioButton} type={'radio'} value={true} normalize={v => !!v} label={'Sim'}
                               name={"considerarNoCalculoDeDsr"}/>
                        <Field component={RadioButton} type={'radio'} value={false} normalize={v => !!v} label={'Nao'}
                               name={"considerarNoCalculoDeDsr"}/>
                    <Divided/>
                        <Field component={Checkbox} name={'adicionarAoArquivoDeIntegracao'}
                               label={'Adicionar ao arquivo de integracao'}/>
                    <Divided/>
                        <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </form>
            </CardBorda>
        </>
    );
};

AdicionarEvento = reduxForm({form: "adicionarEvento"})(AdicionarEvento)

export default connect(state => ({router: state.router}), dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(AdicionarEvento);
