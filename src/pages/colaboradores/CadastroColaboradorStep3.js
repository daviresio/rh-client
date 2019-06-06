import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import DatePicker from "../../components/form/DatePicker";
import {search, update} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";

let CadastroColaboradorStep3 = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    const buttonSubmit = useRef(null)
    const [saveOnly, setSaveOnly] = useState(true)

    useEffect(() => {
        setId(match.params.id)
        search(match.params.id)
    }, [])

    const submit = values => saveOnly ? update({...values, id: match.params.id}, {redirect: {route: '/colaboradores'}, field: 'colaborador'}) :
        update({...values, id: match.params.id}, {redirect: {route: '/colaboradores/cadastro/beneficios/', id: true}, field: 'colaborador'})


    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-big'}>Documentos</div>
                <CardSimples>
                    <Field component={InputRow} name={'cpf'} label={'CPF'} value={''}/>
                    <Field component={InputRow} name={'rg'} label={'RG'} value={''}/>
                    <Field component={DatePicker} name={'dataExpedicaoRg'} label={'Data de expedicao do RG'} value={''}/>
                    <Field component={InputRow} name={'orgaoEmissorRg'} label={'Orgao emissor do RG'} value={''}/>
                    <Field component={SelectRow} name={'ufEmissorRg'} label={'Uf emissor do RG'} value={''}/>
                    <Field component={InputRow} name={'cnh'} label={'CNH'} value={''}/>
                    <Field component={InputRow} name={'categoriaCnh'} label={'Categoria da CNH'} value={''}/>
                    <Field component={DatePicker} name={'dataExpedicaoCnh'} label={'Data de expedicao da CNH'} value={''}/>
                    <Field component={DatePicker} name={'dataValidadeCnh'} label={'Data de validade da CNH'} value={''}/>
                    <Field component={InputRow} name={'carteiraTrabalho'} label={'Carteira de Trabalho'} value={''}/>
                    <Field component={InputRow} name={'nSerieCtps'} label={'n de Serie da CTPS'} value={''}/>
                    <Field component={DatePicker} name={'dataEmissaoCtps'} label={'Data de emissao da CTPS'} value={''}/>
                    <Field component={SelectRow} name={'ufCtps'} label={'UF da CTPS'} value={''}/>
                    <Field component={InputRow} name={'pis'} label={'PIS'} value={''}/>
                    <Field component={InputRow} name={'tituloEleitor'} label={'Titulo de eleitor'} value={''}/>
                    <Field component={InputRow} name={'zonaEleitoral'} label={'Zona eleitoral'} value={''}/>
                    <Field component={InputRow} name={'secaoEleitoral'} label={'Secao eleitoral'} value={''}/>
                    <Field component={SelectRow} name={'estrangeiro'} label={'E estrangeiro?'} value={''}/>
                </CardSimples>

                <div className={'title-big'}>Copia de documentos</div>
                <CardSimples>
                    <Field component={SelectRow} name={'tipoDocumento'} label={'Tipo'} value={''}/>
                </CardSimples>

                <div className={'title-big'}>Dados Bancarios</div>
                <CardSimples>
                    <Field component={SelectRow} name={'banco'} label={'Banco'} value={''}/>
                    <Field component={InputRow} name={'agencia'} label={'Agencia'} value={''}/>
                    <Field component={InputRow} name={'conta'} label={'Conta'} value={''}/>
                    <Field component={InputRow} name={'digito'} label={'Digito'} value={''}/>
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

CadastroColaboradorStep3 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep3);

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {
        cpf: state.serverValues.colaborador.cpf,
        rg: state.serverValues.colaborador.rg,
        dataExpedicaoRg: state.serverValues.colaborador.dataExpedicaoRg,
        orgaoEmissorRg: state.serverValues.colaborador.orgaoEmissorRg,
        ufEmissorRg: state.serverValues.colaborador.ufEmissorRg,
        cnh: state.serverValues.colaborador.cnh,
        categoriaCnh: state.serverValues.colaborador.categoriaCnh,
        dataExpedicaoCnh: state.serverValues.colaborador.dataExpedicaoCnh,
        dataValidadeCnh: state.serverValues.colaborador.dataValidadeCnh,
        carteiraTrabalho: state.serverValues.colaborador.carteiraTrabalho,
        nSerieCtps: state.serverValues.colaborador.nSerieCtps,
        dataEmissaoCtps: state.serverValues.colaborador.dataEmissaoCtps,
        ufCtps: state.serverValues.colaborador.ufCtps,
        pis: state.serverValues.colaborador.pis,
        tituloEleitor: state.serverValues.colaborador.tituloEleitor,
        zonaEleitoral: state.serverValues.colaborador.zonaEleitoral,
        secaoEleitoral: state.serverValues.colaborador.secaoEleitoral,
        estrangeiro: state.serverValues.colaborador.estrangeiro,
    }
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep3);
