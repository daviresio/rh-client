import React from 'react';
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";
import {periodoRecorrencia, simNaoOptions, tiposLembretes} from "../../config/defaultValues";
import RadioButton from "../../components/form/RadioButton";
import DatePicker from "../../components/form/DatePicker";
import {changeRoute} from "../../store/actions/routerActions";

let LembretesCadastro = ({changeRoute, router, handleSubmit}) => {

    const submit = values => {
    }

    return (
        <>
            <Buttom color={'gray'} label={'Ver todos'} style={{marginTop: '2rem'}} onClick={()=> changeRoute('/comunicacao/lembretes')}/>
            <CardSimples style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field component={SelectRow} name={'categoria'} label={'Cagetoria'} options={tiposLembretes}
                           required/>
                    <Field component={InputRow} name={'titulo'} label={'Titulo'} required/>
                    <Field component={InputRow} name={'descricao'} label={'Descricao'}/>
                    <div className={'title-2'}>{'Quem recebera os lembretes?'}</div>
                    <Field component={RadioButton} type={'radio'} value={true} normalize={v => v === "TRUE"}
                           label={'Todos os colaboradores'} name={"enviaParaTodosColaboradores"}/>
                    <Field component={RadioButton} type={'radio'} value={false} normalize={v => v === "TRUE"}
                           label={'Filtrar'} name={"enviaParaTodosColaboradores"}/>
                    <Field component={SelectRow} name={'lembreteRecorrente'} label={'Esse lembrete e recorrente?'} options={simNaoOptions}
                           required/>
                    <Field component={SelectRow} name={'periodo'} label={'Periodo'} options={periodoRecorrencia}
                           required/>
                    <Field component={DatePicker} name={'data'} label={'Quando ele ocorrera?'}/>
                    <Buttom color={'green'} label={'salvar'} type={'submit'} style={{marginTop: '2rem'}}/>
                </form>
            </CardSimples>
        </>
    );
};

LembretesCadastro = reduxForm({form: 'lembrete', enableReinitialize: true})(LembretesCadastro)

export default connect(
    state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))}),
)(LembretesCadastro);
