import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, formValueSelector, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import {connect} from "react-redux";
import {loadList, removeEntytyFromForm, search, update} from "../../store/actions/serverActions";
import Buttom from "../../components/Buttom";
import Checklist from "./Checklist";
import Contato from "../../modais/Contato";
import Dependente from "../../modais/Dependente";
import Message from "../../components/util/Message";
import {changeModalVisible} from "../../store/actions/modalActions";
import DatePicker from "../../components/form/DatePicker";
import {tiposCorRaca, tiposEstadoCivil, tiposSexo} from "../../config/defaultValues";
import {formateDate, getValue, parseDate} from "../../util/metodosUteis";
import Edit from "../../components/util/Edit";
import Delete from "../../components/util/Delete";
import ButtomAdicionar from "../../components/ButtomAdicionar";


let CadastroColaboradorStep2 = ({loadData, handleSubmit, match, router, setId, search, update, modal, openModal, formValues, removeEntytyFromForm, ...props}) => {
    const {contato, dependente} = modal;
    const buttonSubmit = useRef(null);
    const [saveOnly, setSaveOnly] = useState(true);

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        const id = match.params.id;
        setId(id);
        search(id);
        loadData('contatos');
        loadData('dependentes')
    }, []);

    const submit = values => saveOnly ? update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores'},
            field: 'colaborador'
        }) :
        update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores/cadastro/documentos/', id: true},
            field: 'colaborador'
        });

    const renderContato = () => formValues.contatos && formValues.contatos.length ?
        <>
            {formValues.contatos.map((v, i) =>
                <div className={'item-cadastro-colaborador'} key={v.id}>
                    <div className={'dados'}>
                        <div className={'item'}>
                            <span className={'key'}>Nome: </span> <span className={'value'}>{v.nome}</span>
                        </div>
                        <div className={'item'}>
                            <span className={'key'}>Email: </span> <span className={'value'}>{v.email}</span>
                        </div>
                        <div className={'item'}>
                            <span className={'key'}>Telefone: </span> <span className={'value'}>{v.telefone}</span>
                        </div>
                        <div className={'item'}>
                            <span className={'key'}>Celular: </span> <span className={'value'}>{v.celular}</span>
                        </div>
                        <div className={'item'}>
                            <span className={'key'}>Telefone trabalho: </span> <span
                            className={'value'}>{v.telefoneTrabalho}</span>
                        </div>
                        <div className={'item'}>
                            <span className={'key'}>Relacao: </span> <span className={'value'}>{v.relacao}</span>
                        </div>
                    </div>
                    <div className={'opcoes'}>
                        <Edit onClick={() => openModal('contato', v)}/>
                        <Delete onClick={() => removeEntytyFromForm('contatos', v.id, i)}/>
                    </div>
                </div>
            )}
            <ButtomAdicionar label={'Adicionar contato'} onClick={() => openModal('contato')} />
        </> :
        <Message color={'orange'} icon={null} text={<div>
            <div className={'title'} style={{color: '#000', marginBottom: '1rem'}}>Adicionar Contato
            </div>
            <Buttom color={'orange'} label={'Adicionar contato'} onClick={() => openModal('contato')}/>
        </div>}/>;


    const renderDependente = () => formValues.dependentes && formValues.dependentes.length ?
        <>
            {formValues.dependentes.map((v, i) =>
            <div className={'item-cadastro-colaborador'} key={v.id}>
                <div className={'dados'}>
                    <div className={'item'}>
                        <span className={'key'}>Nome: </span> <span className={'value'}>{v.nome}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>E estrangeiro?: </span> <span
                        className={'value'}>{v.estrangeiro ? 'Sim' : 'Nao'}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>Data de Nascimento: </span> <span
                        className={'value'}>{formateDate(parseDate(v.dataNascimento))}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>Cpf: </span> <span className={'value'}>{v.cpf}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>Nome da mae: </span> <span className={'value'}>{v.nomeMae}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>Relacao: </span> <span
                        className={'value'}>{v.relacao}</span>
                    </div>
                    <div className={'item'}>
                        <span className={'key'}>Incluir para fins de imposto de renda: </span> <span
                        className={'value'}>{v.incluirParaFinsDeImpostoRenda ? 'Sim' : 'Nao'}</span>
                    </div>
                </div>
                <div className={'opcoes'}>
                    <Edit onClick={() => openModal('dependente', v)}/>
                    <Delete onClick={() => removeEntytyFromForm('dependentes', v.id, i)}/>
                </div>
            </div>
            )}
            <ButtomAdicionar label={'Adicionar dependente'} onClick={() => openModal('dependente')} />
        </> :
        <Message color={'orange'} icon={null} text={<div>
            <div className={'title'} style={{color: '#000', marginBottom: '1rem'}}>Adicionar Dependente</div>
            <Buttom color={'orange'} label={'Adicionar dependente'} onClick={() => openModal('dependente')}/>
        </div>}/>;

    return (
        <>
            <Contato visible={contato.visible} data={{colaborador: match.params.id}} updateForm={{parentRoute: 'colaborador', parent: match.params.id, form: 'colaborador', field: 'contatos'}}/>
            <Dependente visible={dependente.visible} data={{colaborador: match.params.id}} updateForm={{parentRoute: 'colaborador', parent: match.params.id, form: 'colaborador', field: 'dependentes'}}/>

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
                                    setSaveOnly(false);
                                    setTimeout(() => resolve(), 500)
                                })).then(() => buttonSubmit.current.click())
                            }}/>
                        </div>
                    </div>
                </form>
                <Checklist id={match.params.id}/>
            </div>
        </>
    );
};

const mapStateToProps = state => {

    const {colaborador} = state.serverValues;
    const selector = formValueSelector('colaborador');

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
            telefone: colaborador.telefone,
            celular: colaborador.celular,
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
            },
            contatos: colaborador.contatos,
            dependentes: colaborador.dependentes,
        },
        formValues: selector(state, 'contatos', 'dependentes'),
    }
};

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    removeEntytyFromForm: (entity, value, index) => dispatch(removeEntytyFromForm(entity, value, index)),
});

CadastroColaboradorStep2 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep2);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep2);
