import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";
import Page from "../../layout/Page";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import AlignRight from "../../components/util/AlignRight";
import {alterarSenha} from "../../store/actions/usuarioActions";

let AlterarSenha = ({handleSubmit, alterarSenha, id}) => {

    const submit = value => {
        const {senha2, ...data} = value
        if(senha2 === data.senha) alterarSenha({...data, id})
    }

    return (
        <Page title={'Alterar senha'}>
            <CardSimples start className={'configuracao-alterar-senha'}>
                <span className={'required-message'}>Os campos com asterisco (*), são de preenchimento obrigatório.</span>
                <form onSubmit={handleSubmit(submit)} className={'body'}>
                    <Field component={InputRow} type={'password'} label={'Senha atual'} name={'senhaAtual'} required/>
                    <Field component={InputRow} type={'password'} label={'Nova senha'} name={'senha'} required/>
                    <Field component={InputRow} type={'password'} label={'Repetir senha'} name={'senha2'} required/>
                    <AlignRight>
                        <Buttom label={'Alterar senha'} type={'submit'} color={'green'}/>
                    </AlignRight>
                </form>

            </CardSimples>
        </Page>
    );
};

AlterarSenha = reduxForm({form: 'alterarSenha', enableReinitialize: true})(AlterarSenha);

const mapStateToProps = state => ({
    id: state.usuario.usuario.id
});

const mapDispatchToProps = dispatch => ({
    alterarSenha: value => dispatch(alterarSenha(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha);
