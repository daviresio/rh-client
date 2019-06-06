import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import {localidades} from "../../config/localidades";
import {connect} from "react-redux";
import {loadList, save, search, update} from "../../store/actions/serverActions";
import Buttom from "../../components/Buttom";

let CadastroColaboradorStep2 = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    const buttonSubmit = useRef(null)
    const [saveOnly, setSaveOnly] = useState(true)

    useEffect(() => {
        setId(match.params.id)
        search(match.params.id)
    }, [])

    const submit = values => saveOnly ? update({...values, id: match.params.id}, {redirect: {route: '/colaboradores'}, field: 'colaborador'}) :
        update({...values, id: match.params.id}, {redirect: {route: '/colaboradores/cadastro/documentos/', id: true}, field: 'colaborador'})

    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-big'}>Informacoes Pessoais</div>
                <CardSimples>
                    <Field component={InputRow} name={'dataNascimento'} label={'Data de nascimento'}/>
                    <Field component={SelectRow} name={'nacionalidade'} label={'Nacionalidade'}/>
                    <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'}/>
                    <Field component={SelectRow} name={'naturalEstado'} label={'Natural do estado'}/>
                    <Field component={SelectRow} name={'naturalCidade'} label={'Natural da cidade'}/>
                    <Field component={SelectRow} name={'sexo'} label={'Sexo'}/>
                    <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'}/>
                    <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                    <Field component={InputRow} name={'nomePai'} label={'Nome do pai'}/>
                </CardSimples>

                <div className={'title-big'}>Contatos e Endereco</div>
                <CardSimples>
                    <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                    <Field component={InputRow} name={'celular'} label={'Celular'}/>
                    <Field component={InputRow} name={'cep'} label={'Cep'}/>
                    <Field component={InputRow} name={'endereco'} label={'Endereco'}/>
                    <Field component={InputRow} name={'numero'} label={'Numero'}/>
                    <Field component={InputRow} name={'complemento'} label={'Complemento'}/>
                    <Field component={InputRow} name={'bairro'} label={'Bairro'}/>
                    <Field component={SelectRow} name={'estado'} label={'Estado'}/>
                    <Field component={SelectRow} name={'cidade'} label={'Cidade'}/>
                </CardSimples>

                <div className={'title-big'}>Formacao Academica</div>
                <CardSimples>
                    <Field component={InputRow} name={'escolaridade'} label={'Escolaridade'}/>
                    <Field component={InputRow} name={'curso'} label={'Curso'}/>
                    <Field component={InputRow} name={'instituicao'} label={'Instituicao'}/>
                    <Field component={InputRow} name={'Ano de conclusao'} label={'Ano de conclusao'}/>
                </CardSimples>

                <div className={'title-big'}>Informacoes de emergencia</div>
                <CardSimples>
                    {'Nao implementado ainda'}
                </CardSimples>

                <div className={'title-big'}>Dependentes</div>
                <CardSimples>
                    {'Nao implementado ainda'}
                </CardSimples>
                <div className={'botoes-footer'}>
                    <Buttom color={'red'} label={'Excluir processo'}/>
                    <div>
                        <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}} type={'submit'} ref={buttonSubmit}/>
                        <Buttom color={'green'} label={'Salvar e continuar'} onClick={() => {
                            new Promise((resolve => {
                                setSaveOnly(false)
                                setTimeout(() => resolve(), 500)})).then(() => buttonSubmit.current.click())}}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {
        dataNascimento: state.serverValues.colaborador.dataNascimento,
        nacionalidade: state.serverValues.colaborador.nacionalidade,
        corRaca: state.serverValues.colaborador.corRaca,
        naturalEstado: state.serverValues.colaborador.naturalEstado,
        naturalCidade: state.serverValues.colaborador.naturalCidade,
        sexo: state.serverValues.colaborador.sexo,
        estadoCivil: state.serverValues.colaborador.estadoCivil,
        nomeMae: state.serverValues.colaborador.nomeMae,
        nomePai: state.serverValues.colaborador.nomePai,
    }
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
})

CadastroColaboradorStep2 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep2);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep2);
