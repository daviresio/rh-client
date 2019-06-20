import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import {meses, quantidadeParcelasDecimoTerceiro} from "../../config/defaultValues";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import InputRow from "../../components/form/InputRow";
import Divided from "../../components/util/Divided";
import CardSimples from "../../components/card/CardSimples";

let ConfigurarDsr = ({router, handleSubmit, changeRoute}) => {

    const submit = values => {

    }

    const renderRow = () => {}

    return (
        <>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/folha/configuracao/')}/>
            <CardBorda title={'Configurar DSR'} style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}} >
                    <Field component={SelectRow} name={'mesEAno'} label={'Mes e Ano'}/>
                    <Field component={InputRow} name={'diasUteis'} label={'Dias úteis + Sábado'} disabled />
                    <Field component={InputRow} name={'diasNaoUteis'} label={'Domingos e Feriados'} disabled />
                    <Divided/>
                    <h1 className={'title'}>Feriados</h1>
                    <CardSimples start>

                    </CardSimples>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                        <Buttom color={'green'} label={'Adicionar feriado'} />
                        <Buttom color={'red'} label={'Resertar padrao'} />
                    </div>
                </form>
            </CardBorda>
        </>
    );
};

ConfigurarDsr = reduxForm({form: "configurarDecimoTerceiro"})(ConfigurarDsr)

export default connect(state => ({router: state.router}), dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(ConfigurarDsr);