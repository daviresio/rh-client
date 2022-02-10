import React, {useEffect} from 'react';
import {Field, FieldArray, reduxForm} from "redux-form";
import Select from "../../components/form/Select";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import styled from "styled-components";
import CardSimples from "../../components/card/CardSimples";
import CenterContent from "../../components/util/CenterContent";
import {search, updateAndRedirect} from "../../store/actions/serverActions";
import {tiposDocumentosAssinados} from "../../config/defaultValues";
import SelectRow from "../../components/form/SelectRow";
import {downloadFile, getValue} from "../../util/metodosUteis";

let ProcessoFeriasStep5 = ({handleSubmit, search, match, ferias, update, ...props}) => {

    useEffect(() => {
        search(match.params.id)
    }, []);

    const submit = v => {
        console.log({...ferias, ...v});
        update({...ferias, ...v, conclusoesConcluido: 'APROVADA'}, {route: '/ferias', field: 'feria'})
    };

    const renderDocColaborador = ({fields}) =>
        fields.map((field, index) =>
            <Field key={index} name={`${field}.assinado`} component={SelectRow} label={fields.get(index).nome} options={tiposDocumentosAssinados}
                   detail={<Buttom color={'green'} label={'Imprimir'} onClick={() => downloadFile(fields.get(index).url)}/>} correcaoList/>
        );

    return (
        <form onSubmit={handleSubmit(submit)} className={'sub-page-ferias'}>
            <h1 className={'title'}>{'Conclusao'}</h1>
            <h3 style={{marginTop: '.6rem', marginBottom: '2rem'}}>O colaborador devera realizar as tarefas abaixo</h3>

            <CardSimples>
                <FieldArray name={'copiaDocumentos'} component={renderDocColaborador}/>
                {ferias && ferias.copiaDocumentos && ferias.copiaDocumentos.length ? null : <span style={{fontSize: '1.4rem'}}>Nenhum documento encontrado</span>}
            </CardSimples>


            <h3 style={{marginTop: '2rem', marginBottom: '2rem'}}>O RH devera realizar as tarefas abaixo</h3>

            <CardSimples>
                <CenterContent>
                    <MaxWidth>
                        <Field name={'documentosAssinadosPeloRh'} component={Select} label={'Anotar as ferias na carteira de trabalho do colaborador'}
                               options={tiposDocumentosAssinados} correcaoList/>
                    </MaxWidth>
                </CenterContent>
            </CardSimples>

            <AlignRight style={{marginTop: '10rem'}}>
                <Buttom color={'blue'} label={'Fechar processo de ferias'} type={'submit'}/>
            </AlignRight>
        </form>
    );
};

ProcessoFeriasStep5 = reduxForm({form: 'processoFerias5', enableReinitialize: true})(ProcessoFeriasStep5);

const filterValue = v => {
    if (v == null) return [];
    return v.filter(v => v.necessitaAssinatura)
};

const mapStateToProps = state => {


    return {
        ferias: state.serverValues.feria,
        initialValues: {
            documentosAssinadosPeloRh: state.serverValues.feria.documentosAssinadosPeloRh,
            copiaDocumentos: filterValue(getValue('copiaDocumentos', state.serverValues.feria))
        }
    }

};

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('ferias', id, 'feria')),
    update: (value, redirect) => dispatch(updateAndRedirect('ferias', value, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFeriasStep5);


const MaxWidth = styled.div`
max-width: 80rem;
`;
