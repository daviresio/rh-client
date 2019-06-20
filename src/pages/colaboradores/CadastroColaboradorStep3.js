import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import DatePicker from "../../components/form/DatePicker";
import {search, update} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import Checklist from "./Checklist";
import {getValue} from "../../util/metodosUteis";

let CadastroColaboradorStep3 = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    const buttonSubmit = useRef(null)
    const [saveOnly, setSaveOnly] = useState(true)

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'})
        setId(match.params.id)
        search(match.params.id)
    }, [])

    const submit = values => saveOnly ? update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores'},
            field: 'colaborador'
        }) :
        update({...values, id: match.params.id}, {
            redirect: {route: '/colaboradores/cadastro/beneficios/', id: true},
            field: 'colaborador'
        })


    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-big'}>Documentos</div>
                <CardSimples>
                    <Field component={InputRow} name={'cpf'} label={'CPF'}/>
                    <Field component={InputRow} name={'rg'} label={'RG'}/>
                    <Field component={DatePicker} name={'dataExpedicaoRg'} label={'Data de expedicao do RG'}/>
                    <Field component={InputRow} name={'orgaoEmissorRg'} label={'Orgao emissor do RG'}/>
                    <Field component={SelectRow} name={'ufEmissorRg'} label={'Uf emissor do RG'}/>
                    <Field component={InputRow} name={'cnh'} label={'CNH'}/>
                    <Field component={InputRow} name={'categoriaCnh'} label={'Categoria da CNH'}/>
                    <Field component={DatePicker} name={'dataExpedicaoCnh'} label={'Data de expedicao da CNH'}/>
                    <Field component={DatePicker} name={'dataValidadeCnh'} label={'Data de validade da CNH'}/>
                    <Field component={InputRow} name={'carteiraTrabalho'} label={'Carteira de Trabalho'}/>
                    <Field component={InputRow} name={'nSerieCtps'} label={'n de Serie da CTPS'}/>
                    <Field component={DatePicker} name={'dataEmissaoCtps'} label={'Data de emissao da CTPS'}/>
                    <Field component={SelectRow} name={'ufCtps'} label={'UF da CTPS'}/>
                    <Field component={InputRow} name={'pis'} label={'PIS'}/>
                    <Field component={InputRow} name={'tituloEleitor'} label={'Titulo de eleitor'}/>
                    <Field component={InputRow} name={'zonaEleitoral'} label={'Zona eleitoral'}/>
                    <Field component={InputRow} name={'secaoEleitoral'} label={'Secao eleitoral'}/>
                    <Field component={SelectRow} name={'estrangeiro'} label={'E estrangeiro?'}/>
                </CardSimples>

                <div className={'title-big'}>Copia de documentos</div>
                <CardSimples>
                    <Field component={SelectRow} name={'tipoDocumento'} label={'Tipo'}/>
                </CardSimples>

                <div className={'title-big'}>Dados Bancarios</div>
                <CardSimples>
                    <Field component={SelectRow} name={'banco.banco'} label={'Banco'}/>
                    <Field component={InputRow} name={'banco.agencia'} label={'Agencia'}/>
                    <Field component={InputRow} name={'banco.conta'} label={'Conta'}/>
                    <Field component={InputRow} name={'banco.digito'} label={'Digito'}/>
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
    );
};

CadastroColaboradorStep3 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep3);

const mapStateToProps = state => {

    const {colaborador} = state.serverValues

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
            }
        }
    }

}

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep3);
