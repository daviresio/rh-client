import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import {localidades} from "../../config/localidades";

let CadastroColaboradorStep2 = ({handleSubmit}) => {
    return (
            <div className={'page-divided'}>
                <form onSubmit={handleSubmit}>
                        <div className={'title-big'}>Informacoes Pessoais</div>
                        <CardSimples>
                            <Field component={InputRow} name={'dataNascimento'} label={'Data de nascimento'}/>
                            <Field component={SelectRow} name={'nacionalidade'} label={'Nacionalidade'} />
                            <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'} />
                            <Field component={SelectRow} name={'naturalEstado'} label={'Natural do estado'} />
                            <Field component={SelectRow} name={'naturalCidade'} label={'Natural da cidade'} />
                            <Field component={SelectRow} name={'sexo'} label={'Sexo'} />
                            <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'} />
                            <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'} />
                            <Field component={InputRow} name={'nomePai'} label={'Nome do pai'} />
                        </CardSimples>

                        <div className={'title-big'}>Contatos e Endereco</div>
                        <CardSimples>
                            <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                            <Field component={InputRow} name={'celular'} label={'Celular'} />
                            <Field component={InputRow} name={'cep'} label={'Cep'} />
                            <Field component={InputRow} name={'endereco'} label={'Endereco'} />
                            <Field component={InputRow} name={'numero'} label={'Numero'} />
                            <Field component={InputRow} name={'complemento'} label={'Complemento'} />
                            <Field component={InputRow} name={'bairro'} label={'Bairro'} />
                            <Field component={SelectRow} name={'estado'} label={'Estado'} />
                            <Field component={SelectRow} name={'cidade'} label={'Cidade'} />
                        </CardSimples>

                        <div className={'title-big'}>Formacao Academica</div>
                        <CardSimples>
                            <Field component={InputRow} name={'escolaridade'} label={'Escolaridade'} />
                            <Field component={InputRow} name={'curso'} label={'Curso'}/>
                            <Field component={InputRow} name={'instituicao'} label={'Instituicao'} />
                            <Field component={InputRow} name={'Ano de conclusao'} label={'Ano de conclusao'} />
                        </CardSimples>

                        <div className={'title-big'}>Informacoes de emergencia</div>
                        <CardSimples>
                            {'Nao implementado ainda'}
                        </CardSimples>

                        <div className={'title-big'}>Dependentes</div>
                        <CardSimples>
                            {'Nao implementado ainda'}
                        </CardSimples>
                </form>
            </div>
    );
};

CadastroColaboradorStep2 = reduxForm({form: 'colaborador', destroyOnUnmount: false, forceUnregisterOnUnmount: false})(CadastroColaboradorStep2);

export default CadastroColaboradorStep2;
