import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import {connect} from "react-redux";
import {loadList, save, search, update} from "../../store/actions/serverActions";
import Buttom from "../../components/Buttom";
import Checklist from "./Checklist";
import Contato from "../../modais/Contato";
import Dependente from "../../modais/Dependente";
import Message from "../../components/util/Message";
import {changeModalVisible} from "../../store/actions/modalActions";
import DatePicker from "../../components/form/DatePicker";
import {tiposCorRaca, tiposEstadoCivil, tiposSexo} from "../../config/defaultValues";
import {getValue} from "../../util/metodosUteis";


let CadastroColaboradorStep2 = ({loadData, handleSubmit, match, router, setId, search, update, modal, openModal, dependentes, contatos, ...props}) => {

    const {contato, dependente} = modal
    const buttonSubmit = useRef(null)
    const [saveOnly, setSaveOnly] = useState(true)

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'})
        const id = match.params.id
        setId(id)
        search(id)
        loadData('contatos')
        loadData('dependentes')
    }, [])

    const submit = values => saveOnly ? update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores'},
            field: 'colaborador'
        }) :
        update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores/cadastro/documentos/', id: true},
            field: 'colaborador'
        })

    const renderContato = () => contatos && contatos.length ?
        <Message color={'orange'} icon={null} text={<div>
            <div className={'title'} style={{color: '#000', marginBottom: '1rem'}}>Adicionar Contato
            </div>
            <Buttom color={'orange'} label={'Adicionar contato'} onClick={() => openModal('contato')}/>
        </div>}/>
        :
        <div></div>

    const renderDependente = () => dependentes && dependentes.length ?
        <Message color={'orange'} icon={null} text={<div>
            <div className={'title'} style={{color: '#000', marginBottom: '1rem'}}>Adicionar Dependente</div>
            <Buttom color={'orange'} label={'Adicionar dependente'} onClick={() => openModal('dependente')}/>
        </div>}/>
        :
        <div></div>

    return (
        <>
            <Contato visible={contato.visible} />
            <Dependente visible={dependente.visible} />

            <div className={'page-divided'}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={'title-big'}>Informacoes Pessoais</div>
                    <CardSimples>
                        <Field component={DatePicker} name={'dataNascimento'} label={'Data de nascimento'}/>
                        <Field component={InputRow} name={'nacionalidade'} label={'Nacionalidade'}/>
                        <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'} options={tiposCorRaca}/>
                        <Field component={InputRow} name={'naturalEstado'} label={'Natural do estado'}/>
                        <Field component={InputRow} name={'naturalCidade'} label={'Natural da cidade'}/>
                        <Field component={SelectRow} name={'sexo'} label={'Sexo'} options={tiposSexo}/>
                        <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'}
                               options={tiposEstadoCivil}/>
                        <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                        <Field component={InputRow} name={'nomePai'} label={'Nome do pai'}/>
                    </CardSimples>

                    <div className={'title-big'}>Contatos e Endereco</div>
                    <CardSimples>
                        <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                        <Field component={InputRow} name={'celular'} label={'Celular'}/>
                        <Field component={InputRow} name={'endereco.cep'} label={'Cep'}/>
                        <Field component={InputRow} name={'endereco.endereco'} label={'Endereco'}/>
                        <Field component={InputRow} name={'endereco.numero'} label={'Numero'}/>
                        <Field component={InputRow} name={'endereco.complemento'} label={'Complemento'}/>
                        <Field component={InputRow} name={'endereco.bairro'} label={'Bairro'}/>
                        <Field component={InputRow} name={'endereco.estado'} label={'Estado'}/>
                        <Field component={InputRow} name={'endereco.cidade'} label={'Cidade'}/>
                    </CardSimples>

                    <div className={'title-big'}>Formacao Academica</div>
                    <CardSimples>
                        <Field component={InputRow} name={'escolaridade.escolaridade'} label={'Escolaridade'}/>
                        <Field component={InputRow} name={'escolaridade.curso'} label={'Curso'}/>
                        <Field component={InputRow} name={'escolaridade.instituicao'} label={'Instituicao'}/>
                        <Field component={InputRow} name={'escolaridade.anoConclusao'} label={'Ano de conclusao'}/>
                    </CardSimples>

                    <div className={'title-big'}>Informacoes de emergencia</div>
                    <CardSimples>
                        {renderContato()}
                    </CardSimples>

                    <div className={'title-big'}>Dependentes</div>
                    <CardSimples>
                        {renderDependente()}
                    </CardSimples>
                    <div className={'botoes-footer'}>
                        <Buttom color={'red'} label={'Excluir processo'}/>
                        <div>
                            <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}} type={'submit'}
                                    ref={buttonSubmit}/>
                            <Buttom color={'green'} label={'Salvar e continuar'} onClick={() => {
                                new Promise((resolve => {
                                    setSaveOnly(false)
                                    setTimeout(() => resolve(), 500)
                                })).then(() => buttonSubmit.current.click())
                            }}/>
                        </div>
                    </div>
                </form>
                <Checklist/>
            </div>
        </>
    );
};

const mapStateToProps = state => {

    let {colaborador} = state.serverValues

    return {
        router: state.router,
        modal: state.modal,
        initialValues: {
            dataNascimento: colaborador.dataNascimento,
            nacionalidade: colaborador.nacionalidade,
            corRaca: colaborador.corRaca,
            naturalEstado: colaborador.naturalEstado,
            naturalCidade: colaborador.naturalCidade,
            sexo: colaborador.sexo,
            estadoCivil: colaborador.estadoCivil,
            nomeMae: colaborador.nomeMae,
            nomePai: colaborador.nomePai,
            endereco: {
                id: getValue('endereco.id', colaborador),
                cep: getValue('endereco.cep', colaborador),
                endereco: getValue('endereco.endereco', colaborador),
                numero: getValue('endereco.numero', colaborador),
                complemento: getValue('endereco.complemento', colaborador),
                bairro: getValue('endereco.bairro', colaborador),
                estado: getValue('endereco.estado', colaborador),
                cidade: getValue('endereco.cidade', colaborador),
            },
            escolaridade: {
                id: getValue('escolaridade.id', colaborador),
                escolaridade: getValue('escolaridade.escolaridade', colaborador),
                curso: getValue('escolaridade.curso', colaborador),
                instituicao: getValue('escolaridade.instituicao', colaborador),
                anoConclusao: getValue('escolaridade.anoConclusao', colaborador),
            }
        },
        contatos: state.serverValues.contatos,
        dependentes: state.serverValues.dependentes,
    }
}

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
    openModal: modal => dispatch(changeModalVisible(modal, true)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
})

CadastroColaboradorStep2 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep2);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep2);
