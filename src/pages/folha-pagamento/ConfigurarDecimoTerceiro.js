import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import {meses, quantidadeParcelasDecimoTerceiro,} from "../../config/defaultValues";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

let ConfigurarDecimoTerceiro = ({router, handleSubmit, changeRoute}) => {

    const submit = values => {

    }

    return (
        <>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/folha/configuracao/')}/>
            <CardBorda title={'Configurar 13 salario'} style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}} >
                        <Field component={SelectRow} name={'parcelas'} label={'Parcelas'}
                               options={quantidadeParcelasDecimoTerceiro} />
                        <Field component={SelectRow} name={'mesPrimeiraParcela'} label={'Mes da primeira parcela'} options={meses} />
                    <div className={'botao-direita'}>
                        <Buttom color={'green'} label={'Salvar'} type={'submit'} />
                    </div>
                </form>
            </CardBorda>
        </>
    );
};

ConfigurarDecimoTerceiro = reduxForm({form: "configurarDecimoTerceiro"})(ConfigurarDecimoTerceiro)

export default connect(state => ({router: state.router}), dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(ConfigurarDecimoTerceiro);