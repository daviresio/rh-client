import React from 'react';
import Page from "../layout/Page";
import CardSimples from "../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import AlignRight from "../components/util/AlignRight";
import Buttom from "../components/Buttom";
import {connect} from "react-redux";
import {adicionarEmpresa} from "../store/actions/usuarioActions";
import {save} from "../store/actions/serverActions";

let NovaEmpresa = ({handleSubmit, adicionarEmpresa, usuario, companhia}) => {

    const submit = value => {
        adicionarEmpresa({...value, email: usuario.email, EmpresaId: companhia.id})
    };

    return (
        <Page title={'Adicionar nova empresa'}>
            <CardSimples start className={'configuracao-alterar-senha'}>
                <span className={'required-message'}>Os campos com asterisco (*), são de preenchimento obrigatório.</span>
                <form onSubmit={handleSubmit(submit)} className={'body'}>
                    <Field component={InputRow} label={'Razao social'} name={'razaoSocial'} required/>
                    <Field component={InputRow} label={'Telefone'} name={'telefone'} required/>
                    <Field component={InputRow} label={'Confirmar senha'} name={'senha'} required/>
                    <AlignRight>
                        <Buttom label={'Criar empresa'} type={'submit'} color={'blue'}/>
                    </AlignRight>
                </form>

            </CardSimples>
        </Page>
    );
};

NovaEmpresa = reduxForm({form: 'novaEmpresa', enableReinitialize: true})(NovaEmpresa);

const mapStateToProps = state => ({
    usuario: state.usuario.usuario,
    companhia: state.usuario.companhia,

});

const mapDispatchToProps = dispatch => ({
    adicionarEmpresa: value => dispatch(adicionarEmpresa(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NovaEmpresa);
