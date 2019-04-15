import React from 'react';
import CardSimples from "../../components/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/InputRow";
import SelectRow from "../../components/SelectRow";

let CadastroColaboradorStep3 = ({handleSubmit}) => {
    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit}>
                <div className={'title-2'}>Documentos</div>
                <CardSimples>
                    <Field component={InputRow} name={'cpf'} label={'CPF'} value={''}/>
                    <Field component={InputRow} name={'rg'} label={'RG'} value={''}/>
                    <Field component={InputRow} name={'dataExpedicaoRg'} label={'Data de expedicao do RG'} value={''}/>
                    <Field component={InputRow} name={'orgaoEmissorRg'} label={'Orgao emissor do RG'} value={''}/>
                    <Field component={SelectRow} name={'ufEmissorRg'} label={'Uf emissor do RG'} value={''}/>
                    <Field component={InputRow} name={'cnh'} label={'CNH'} value={''}/>
                    <Field component={InputRow} name={'categoriaCnh'} label={'Categoria da CNH'} value={''}/>
                    <Field component={InputRow} name={'dataExpedicaoCnh'} label={'Data de expedicao da CNH'} value={''}/>
                    <Field component={InputRow} name={'dataValidadeCnh'} label={'Data de validade da CNH'} value={''}/>
                    <Field component={InputRow} name={'carteiraTrabalho'} label={'Carteira de Trabalho'} value={''}/>
                    <Field component={InputRow} name={'nSerieCtps'} label={'n de Serie da CTPS'} value={''}/>
                    <Field component={InputRow} name={'dataEmissaoCtps'} label={'Data de emissao da CTPS'} value={''}/>
                    <Field component={SelectRow} name={'ufCtps'} label={'UF da CTPS'} value={''}/>
                    <Field component={InputRow} name={'pis'} label={'PIS'} value={''}/>
                    <Field component={InputRow} name={'tituloEleitor'} label={'Titulo de eleitor'} value={''}/>
                    <Field component={InputRow} name={'zonaEleitoral'} label={'Zona eleitoral'} value={''}/>
                    <Field component={InputRow} name={'secaoEleitoral'} label={'Secao eleitoral'} value={''}/>
                    <Field component={SelectRow} name={'estrangeiro'} label={'E estrangeiro?'} value={''}/>
                </CardSimples>

                <div className={'title-2'}>Copia de documentos</div>
                <CardSimples>
                    <Field component={SelectRow} name={'tipoDocumento'} label={'Tipo'} value={''}/>
                </CardSimples>

                <div className={'title-2'}>Dados Bancarios</div>
                <CardSimples>
                    <Field component={SelectRow} name={'banco'} label={'Banco'} value={''}/>
                    <Field component={InputRow} name={'agencia'} label={'Agencia'} value={''}/>
                    <Field component={InputRow} name={'conta'} label={'Conta'} value={''}/>
                    <Field component={InputRow} name={'digito'} label={'Digito'} value={''}/>
                </CardSimples>

            </form>
        </div>
    );
};

CadastroColaboradorStep3 = reduxForm({form: 'colaborador', destroyOnUnmount: false, forceUnregisterOnUnmount: false})(CadastroColaboradorStep3);

export default CadastroColaboradorStep3;