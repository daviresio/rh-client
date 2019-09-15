import React from 'react';
import Page from "../layout/Page";
import CardSimples from "../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import AlignRight from "../components/util/AlignRight";
import Buttom from "../components/Buttom";
import {connect} from "react-redux";
import {adicionarEmpresa} from "../store/actions/usuarioActions";

let NovaEmpresa = ({handleSubmit, adicionarEmpresa, id}) => {

    const submit = value => {
        console.log(value)
    };

    return (
        <Page title={'Adicionar nova empresa'}>
            <CardSimples start className={'configuracao-alterar-senha'}>
                <span className={'required-message'}>Os campos com asterisco (*), são de preenchimento obrigatório.</span>
                <form onSubmit={handleSubmit(submit)} className={'body'}>
                    <Field component={InputRow} label={'Razao social'} name={'senhaAtual'} required/>
                    <Field component={InputRow} label={'Telefone'} name={'senha'} required/>
                    <Field component={InputRow} label={'Confirmar senha'} name={'senha2'} required/>
                    <AlignRight>
                        <Buttom label={'Alterar senha'} type={'submit'} color={'green'}/>
                    </AlignRight>
                </form>

            </CardSimples>
        </Page>
    );
};

NovaEmpresa = reduxForm({form: 'novaEmpresa', enableReinitialize: true})(NovaEmpresa);

const mapStateToProps = state => ({
    id: state.usuario.usuario.id
});

const mapDispatchToProps = dispatch => ({
    adicionarEmpresa: value => dispatch(adicionarEmpresa(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NovaEmpresa);
