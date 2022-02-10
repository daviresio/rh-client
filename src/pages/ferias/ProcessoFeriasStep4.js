import React, {useEffect, useRef, useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {simNaoOptions} from "../../config/defaultValues";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import styled from "styled-components";
import CenterContent from "../../components/util/CenterContent";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";
import UploadFile from "../../components/UploadFile";
import CardBorda from "../../components/card/CardBorda";
import {removeAndReload, search, updateAndRedirect} from "../../store/actions/serverActions";
import {uploadDocumentoFeriasAction} from "../../store/actions/feriasActions";
import {downloadFile, formateDateFull} from "../../util/metodosUteis";

let ProcessoFeriasStep4 = ({handleSubmit, search, match, ferias, save, update, remove, ...props}) => {

    const uploadDoc = useRef(null);
    const [doc, setDoc] = useState();

    useEffect(() => {
        search(match.params.id)
    }, []);

    const submit = v => {
        save(doc, {ferias: ferias.id, ...v}, ferias.id)
    };

    const avancar = () => {
        update({...ferias, calculosContabilidadeConcluido: 'APROVADA'}, {route: '/ferias/processo/conclusao/' + match.params.id, field: 'feria'})
    };

    const docSelected = v => {
        setDoc(v)
    };


    return (
        <form onSubmit={handleSubmit(submit)} className={'sub-page-ferias'}>
            <h1 className={'title'}>{'Documentos e calculos da contabilidade'}</h1>
            <h3 style={{marginTop: '.6rem', marginBottom: '2rem'}}>Faca o upload dos documentos calculados pelo contador e confira os valores referentes ao periodo de ferias</h3>

            <CenterContent>
                <Field component={InputRow} name={'nome'} label={'Tipo'} required/>
            </CenterContent>
            <CenterContent>
                <UploadFile label={'Adicionar comprovante'} ref={uploadDoc} onChange={docSelected}/>
            </CenterContent>
            <CenterContent>
                <Field name={'necessitaAssinatura'} component={SelectRow} label={'O colaborador devera assinar?'} options={simNaoOptions} correcaoList
                       detail={<Buttom color={'green'} label={'Enviar'} type={'submit'}/>} required/>
            </CenterContent>


            <CardBorda customHeader={
                <TitleGrid>
                    <Title>Nome</Title>
                    <Title>Visualizar</Title>
                    <Title>Data</Title>
                    <Title>Excluir</Title>
                </TitleGrid>
            }>
                {
                    ferias && ferias.copiaDocumentos && ferias.copiaDocumentos.map(v =>
                        <ItemTable key={v.id}>
                            <Text>{v.nome}</Text>
                            <Buttom color={'blue'} label={'Download'} style={{maxWidth: '6rem'}} onClick={() => downloadFile(v.url)}/>
                            <Text>{formateDateFull(v.createdAt)}</Text>
                            <i className="fas fa-times-circle" style={{color: '#E54042', fontSize: '2.5rem', cursor: 'pointer', marginLeft: '3rem'}}
                               onClick={() => remove('copia-documentos', v.id, ferias.id)}/>
                        </ItemTable>
                    )
                }
            </CardBorda>

            <AlignRight style={{marginTop: '10rem'}}>
                <Buttom color={'blue'} label={'Salvar e avancar'} onClick={avancar}/>
            </AlignRight>
        </form>
    );
};

ProcessoFeriasStep4 = reduxForm({form: 'processoFerias4', enableReinitialize: true})(ProcessoFeriasStep4);

const mapStateToProps = state => ({
    ferias: state.serverValues.feria,
    initialValues: {
        tipoDocumento: state.serverValues.feria.tipoDocumento,
        colaboradorDeveraAssinar: state.serverValues.feria.colaboradorDeveraAssinar,
    }
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('ferias', id, 'feria')),
    save: (doc, value, idReload) => dispatch(uploadDocumentoFeriasAction(doc, value, 'processoFerias4', {entity: 'ferias', value: idReload, field: 'feria'}, 'processoFerias4')),
    update: (value, redirect) => dispatch(updateAndRedirect('ferias', value, redirect)),
    remove: (entity, value, idParent) => dispatch(removeAndReload(entity, value, {entity: 'ferias', value: idParent, field: 'feria'})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFeriasStep4);


const TitleGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr) 8rem;
`;

const Title = styled.span`
color: #FFF;
`;

const ItemTable = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr) 8rem;
align-items: center;
background-color: #F3FAFA;
margin: 1rem 0;
padding: 1rem;
`;

const Text = styled.span`
font-size: 1.4rem;
`;
