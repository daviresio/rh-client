import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../../components/card/CardSimples";
import Buttom from "../../../components/Buttom";
import {Field, reduxForm} from "redux-form";
import {removeAndReload, search, update} from "../../../store/actions/serverActions";
import {connect} from "react-redux";
import CenterContent from "../../../components/util/CenterContent";
import InputRow from "../../../components/form/InputRow";
import UploadFile from "../../../components/UploadFile";
import CardBorda from "../../../components/card/CardBorda";
import styled from "styled-components";
import {downloadFile, getValue} from "../../../util/metodosUteis";
import {uploadDocumentoFeriasAction} from "../../../store/actions/feriasActions";
import {changeRoute} from "../../../store/actions/routerActions";

let DesligamentoColaboradorStep3 = ({handleSubmit, match, router, setId, search, update, colaborador, desligamento, remove, saveDoc, changeRoute, ...props}) => {

    const uploadDoc = useRef(null);
    const [doc, setDoc] = useState();

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        setId(match.params.id);
        search(match.params.id)
    }, []);

    const docSelected = v => {
        setDoc(v)
    };

    const submit = v => {
        saveDoc(doc, {desligamento: desligamento.id, ...v}, colaborador.id)
    };

    const concluirProcesso = () => {
        update({...colaborador, status: 'DESLIGADO'})
    };

    return (
        <CardSimples className={'desligamento'} start>

            <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                <CenterContent>
                    <Field component={InputRow} name={'nome'} label={'Tipo'}/>
                </CenterContent>
                <CenterContent>
                    <UploadFile label={'Adicionar comprovante'} ref={uploadDoc} onChange={docSelected}/>
                    <AjustarBotao>
                        <Buttom color={'green'} label={'Enviar'} type={'submit'}/>
                    </AjustarBotao>
                </CenterContent>


                <CardBorda customHeader={
                    <TitleGrid>
                        <Title>Nome do arquivo</Title>
                        <Title>Visualizar</Title>
                        <Title>Excluir</Title>
                    </TitleGrid>
                }>
                    {
                        desligamento && desligamento.copiaDocumentos && desligamento.copiaDocumentos.map(v =>
                            <ItemTable key={v.id}>
                                <Text>{v.nome}</Text>
                                <Buttom color={'blue'} label={'Download'} style={{maxWidth: '6rem'}} onClick={() => downloadFile(v.url)}/>
                                <i className="fas fa-times-circle" style={{color: '#E54042', fontSize: '2.5rem', cursor: 'pointer', marginLeft: '3rem'}}
                                   onClick={() => remove('copia-documentos', v.id, colaborador.id)}/>
                            </ItemTable>
                        )
                    }

                </CardBorda>
                <div className={'botoes-footer'}>
                    <Buttom color={'green'} label={'Continuar depois'} onClick={() => changeRoute('/colaboradores/gestao')}/>
                    <Buttom color={'blue'} label={'Concluir'} style={{marginRight: '2rem'}} onClick={concluirProcesso}/>
                </div>
            </form>

        </CardSimples>
    );
};

DesligamentoColaboradorStep3 = reduxForm({form: 'desligarColaborador', enableReinitialize: true})(DesligamentoColaboradorStep3);

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {},
    colaborador: state.serverValues.colaborador,
    desligamento: getValue('desligamento', state.serverValues.colaborador)
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value) => dispatch(update('colaboradores', value, {redirect: {route: `/colaboradores/gestao`}, field: 'colaborador'})),
    saveDoc: (doc, value, idReload) => dispatch(uploadDocumentoFeriasAction(doc, value, 'desligarColaborador', {
        entity: 'colaboradores',
        value: idReload,
        field: 'colaborador'
    }, 'desligarColaborador')),
    remove: (entity, value, idParent) => dispatch(removeAndReload(entity, value, {entity: 'colaboradores', value: idParent, field: 'colaborador'})),
    changeRoute: route => dispatch(changeRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesligamentoColaboradorStep3);

const TitleGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr) 8rem;
`;

const Title = styled.span`
color: #FFF;
`;

const AjustarBotao = styled.div`
max-height: 3.6rem;
position: relative;
top: 1rem;
margin-left: 2rem;
`;

const ItemTable = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr) 8rem;
align-items: center;
background-color: #F3FAFA;
margin: 1rem 0;
padding: 1rem;
`;

const Text = styled.span`
font-size: 1.4rem;
`;
