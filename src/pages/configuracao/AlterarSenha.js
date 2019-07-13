import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";
import Page from "../../layout/Page";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import AlignRight from "../../components/util/AlignRight";

let AlterarSenha = () => {
    return (
        <Page title={'Alterar senha'}>
            <CardSimples start className={'configuracao-alterar-senha'}>
                <span className={'required-message'}>Os campos com asterisco (*), são de preenchimento obrigatório.</span>
                <div className={'body'}>
                    <Field component={InputRow} label={'Senha atual'} required/>
                    <Field component={InputRow} label={'Nova senha'} required/>
                    <Field component={InputRow} label={'Repetir senha'} required/>
                    <AlignRight>
                        <Buttom label={'Alterar senha'} type={'submit'} color={'green'}/>
                    </AlignRight>
                </div>

            </CardSimples>
        </Page>
    );
};

AlterarSenha = reduxForm({form: 'alterarSenha', enableReinitialize: true})(AlterarSenha)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha);
