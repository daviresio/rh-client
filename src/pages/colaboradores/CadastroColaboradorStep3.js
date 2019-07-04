import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {formValueSelector, Field, reduxForm, arrayRemove, change} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import DatePicker from "../../components/form/DatePicker";
import {search, update, uploadFile} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import Checklist from "./Checklist";
import {downloadFile, getValue} from "../../util/metodosUteis";
import {MAX_IMAGE_SIZE, simNaoOptions} from "../../config/defaultValues";
import CardBorda from "../../components/card/CardBorda";
import Delete from "../../components/util/Delete";
import UploadFile from "../../components/UploadFile";
import {getEstados} from "../../config/localidades";


let CadastroColaboradorStep3 = ({handleSubmit, match, router, setId, search, update, uploadFile, formValues, ...props}) => {

    const buttonSubmit = useRef(null)
    const [saveOnly, setSaveOnly] = useState(true)
    const uploadDoc = useRef(null)

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'})
        setId(match.params.id)
        search(match.params.id)
    }, [])


    const renderDocumentos = () => {
        if (formValues === undefined || formValues.copiaDocumentos === undefined || !formValues.copiaDocumentos.length || formValues.copiaDocumentos.length === 0) return null
        return <CardBorda title={'Documentos'}>
            {formValues.copiaDocumentos.map((v, i) =>
            <div className={'item-colaborador-documento'} key={i}>
                <span>{v.nome}</span>
                <span className={'link'} onClick={()=> downloadFile(v.url)}>{v.url}</span>
                <Delete onClick={()=>props.dispatch(arrayRemove('colaborador', 'copiaDocumentos', i))}  />
            </div>
            )}
        </CardBorda>
    }

    const submit = values => {
        delete values.tipoDocumento
        saveOnly ? update({...values, id: match.params.id}, {
                redirect: {route: '/colaboradores'},
                field: 'colaborador'
            }) :
            update({...values, id: match.params.id}, {
                redirect: {route: '/colaboradores/cadastro/beneficios/', id: true},
                field: 'colaborador'
            })
    }


    const uploadDocumento = () => {
        const type = uploadDoc.current.files[0].type
        const reader = new FileReader()
        reader.onload = e => {
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'colaborador', field: 'copiaDocumentos', data: {nome: formValues.tipoDocumento}, subField: 'url', array: true})
            uploadDoc.current.value = ''
            props.dispatch(change('colaborador', 'tipoDocumento', ''))
        }
        reader.readAsDataURL(uploadDoc.current.files[0])
    }

    const uploadComprovanteBanco = event => {
        const type = event.target.files[0].type
        const reader = new FileReader()
        reader.onload = e => {
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'colaborador', campo: 'banco.comprovante'})
        }
        reader.readAsDataURL(event.target.files[0])
    }

    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-big'}>Documentos</div>
                <CardSimples>
                    <Field component={InputRow} name={'cpf'} label={'CPF'}/>
                    <Field component={InputRow} name={'rg'} label={'RG'}/>
                    <Field component={DatePicker} name={'dataExpedicaoRg'} label={'Data de expedicao do RG'}/>
                    <Field component={InputRow} name={'orgaoEmissorRg'} label={'Orgao emissor do RG'}/>
                    <Field component={SelectRow} name={'ufEmissorRg'} label={'Uf emissor do RG'} options={getEstados()}/>
                    <Field component={InputRow} name={'cnh'} label={'CNH'}/>
                    <Field component={InputRow} name={'categoriaCnh'} label={'Categoria da CNH'}/>
                    <Field component={DatePicker} name={'dataExpedicaoCnh'} label={'Data de expedicao da CNH'}/>
                    <Field component={DatePicker} name={'dataValidadeCnh'} label={'Data de validade da CNH'}/>
                    <Field component={InputRow} name={'carteiraTrabalho'} label={'Carteira de Trabalho'}/>
                    <Field component={InputRow} name={'nSerieCtps'} label={'n de Serie da CTPS'}/>
                    <Field component={DatePicker} name={'dataEmissaoCtps'} label={'Data de emissao da CTPS'}/>
                    <Field component={SelectRow} name={'ufCtps'} label={'UF da CTPS'} options={getEstados()}/>
                    <Field component={InputRow} name={'pis'} label={'PIS'}/>
                    <Field component={InputRow} name={'tituloEleitor'} label={'Titulo de eleitor'}/>
                    <Field component={InputRow} name={'zonaEleitoral'} label={'Zona eleitoral'}/>
                    <Field component={InputRow} name={'secaoEleitoral'} label={'Secao eleitoral'}/>
                    <Field component={SelectRow} name={'estrangeiro'} label={'E estrangeiro?'} options={simNaoOptions}/>
                </CardSimples>

                <div className={'title-big'}>Copia de documentos</div>
                <CardSimples>
                    <Field component={InputRow} name={'tipoDocumento'} label={'Tipo'}/>
                    <input type="file" name={'myfile'} ref={uploadDoc}/>
                    <Buttom color={'green'} label={'Enviar'} onClick={uploadDocumento}/>
                    {renderDocumentos()}
                </CardSimples>

                <div className={'title-big'}>Dados Bancarios</div>
                <CardSimples>
                    <Field component={InputRow} name={'banco.banco'} label={'Banco'}/>
                    <Field component={InputRow} name={'banco.agencia'} label={'Agencia'}/>
                    <Field component={InputRow} name={'banco.conta'} label={'Conta'}/>
                    <Field component={InputRow} name={'banco.digito'} label={'Digito'}/>
                    {formValues.banco && formValues.banco.comprovante ?
                        <CardSimples>
                            <div className={'item-colaborador-documento'}>
                                    <span>{'Comprovante'}</span>
                                    <span className={'link'} onClick={()=> downloadFile(formValues.banco.comprovante)}>{formValues.banco.comprovante}</span>
                                    <Delete onClick={()=>props.dispatch(change('colaborador', 'banco.comprovante', null))}  />
                                </div>
                        </CardSimples>
                    : <UploadFile label={'Adicionar comprovante'} onChange={uploadComprovanteBanco} />}

                </CardSimples>

                <div className={'botoes-footer'}>
                    <Buttom color={'red'} label={'Excluir processo'}/>
                    <div>
                        <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}} type={'submit'} ref={buttonSubmit}/>
                        <Buttom color={'green'} label={'Salvar e continuar'} onClick={() => {
                            new Promise((resolve => {
                                setSaveOnly(false)
                                setTimeout(() => resolve(), 500)
                            })).then(() => buttonSubmit.current.click())
                        }}/>
                    </div>
                </div>
            </form>
            <Checklist id={match.params.id}/>
        </div>
    );
};

CadastroColaboradorStep3 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep3);

const mapStateToProps = state => {

    const {colaborador} = state.serverValues
    const selector = formValueSelector('colaborador')
    return {
        router: state.router,
        initialValues: {
            cpf: colaborador.cpf,
            rg: colaborador.rg,
            dataExpedicaoRg: colaborador.dataExpedicaoRg,
            orgaoEmissorRg: colaborador.orgaoEmissorRg,
            ufEmissorRg: colaborador.ufEmissorRg,
            cnh: colaborador.cnh,
            categoriaCnh: colaborador.categoriaCnh,
            dataExpedicaoCnh: colaborador.dataExpedicaoCnh,
            dataValidadeCnh: colaborador.dataValidadeCnh,
            carteiraTrabalho: colaborador.carteiraTrabalho,
            nSerieCtps: colaborador.nSerieCtps,
            dataEmissaoCtps: colaborador.dataEmissaoCtps,
            ufCtps: colaborador.ufCtps,
            pis: colaborador.pis,
            tituloEleitor: colaborador.tituloEleitor,
            zonaEleitoral: colaborador.zonaEleitoral,
            secaoEleitoral: colaborador.secaoEleitoral,
            estrangeiro: colaborador.estrangeiro,
            banco: {
                id: getValue('banco.id', colaborador),
                banco: getValue('banco.banco', colaborador),
                agencia: getValue('banco.agencia', colaborador),
                conta: getValue('banco.conta', colaborador),
                digito: getValue('banco.digito', colaborador),
            },
            copiaDocumentos: colaborador.copiaDocumentos,
        },
        formValues: selector(state, 'copiaDocumentos', 'tipoDocumento', 'banco')
    }

}

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep3);
