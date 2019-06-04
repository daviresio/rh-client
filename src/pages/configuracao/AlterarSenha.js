import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";
import Page from "../../layout/Page";

const AlterarSenha = () => {
    return (
            <Page title={'Alterar senha'}>
            <CardSimples start className={'configuracao-alterar-senha'}>
               <span className={'required-message'}>Os campos com asterisco (*), são de preenchimento obrigatório.</span>
                <div className={'body'}>
                    <InputRow label={'Nova senha'} />
                    <InputRow label={'Repetir senha'} />
                    <div>
                    <Buttom label={'Alterar senha'} color={'green'}/>
                    </div>
                </div>

            </CardSimples>
            </Page>
                );
};

export default AlterarSenha;
