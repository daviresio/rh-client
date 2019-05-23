import React from 'react';
import CardSimples from "../../components/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/InputRow";
import SelectRow from "../../components/SelectRow";

let CadastroColaboradorStep2 = ({handleSubmit}) => {
    return (
            <div className={'page-divided'}>
                <form onSubmit={handleSubmit}>
                        <div className={'title-2'}>Informacoes Pessoais</div>
                        <CardSimples>
                            <Field component={InputRow} name={'dataNascimento'} label={'Data de nascimento'} value={''}/>
                            <Field component={SelectRow} name={'nacionalidade'} label={'Nacionalidade'} value={''} />
                            <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'} value={''} />
                            <Field component={SelectRow} name={'naturalEstado'} label={'Natural do estado'} value={''} />
                            <Field component={SelectRow} name={'naturalCidade'} label={'Natural da cidade'} value={''} />
                            <Field component={SelectRow} name={'sexo'} label={'Sexo'} value={''} />
                            <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'} value={''} />
                            <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'} value={''} />
                            <Field component={InputRow} name={'nomePai'} label={'Nome do pai'} value={''} />
                        </CardSimples>

                        <div className={'title-2'}>Contatos e Endereco</div>
                        <CardSimples>
                            <Field component={InputRow} name={'telefone'} label={'Telefone'} value={''}/>
                            <Field component={InputRow} name={'celular'} label={'Celular'} value={''} />
                            <Field component={InputRow} name={'cep'} label={'Cep'} value={''} />
                            <Field component={InputRow} name={'endereco'} label={'Endereco'} value={''} />
                            <Field component={InputRow} name={'numero'} label={'Numero'} value={''} />
                            <Field component={InputRow} name={'complemento'} label={'Complemento'} value={''} />
                            <Field component={InputRow} name={'bairro'} label={'Bairro'} value={''} />
                            <Field component={SelectRow} name={'estado'} label={'Cidade'} value={''} />
                            <Field component={SelectRow} name={'cidade'} label={'Estado'} value={''} />
                        </CardSimples>

                        <div className={'title-2'}>Formacao Academica</div>
                        <CardSimples>
                            <Field component={SelectRow} name={'escolaridade'} label={'Escolaridade'} value={''} />
                            <Field component={InputRow} name={'curso'} label={'Curso'} value={''}/>
                            <Field component={InputRow} name={'instituicao'} label={'Instituicao'} value={''} />
                            <Field component={InputRow} name={'Ano de conclusao'} label={'Ano de conclusao'} value={''} />
                        </CardSimples>

                        <div className={'title-2'}>Informacoes de emergencia</div>
                        <CardSimples>
                            {'Nao implementado ainda'}
                        </CardSimples>

                        <div className={'title-2'}>Dependentes</div>
                        <CardSimples>
                            {'Nao implementado ainda'}
                        </CardSimples>
                </form>
            </div>
    );
};

CadastroColaboradorStep2 = reduxForm({form: 'colaborador', destroyOnUnmount: false, forceUnregisterOnUnmount: false})(CadastroColaboradorStep2);

export default CadastroColaboradorStep2;