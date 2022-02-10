import React from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {uploadDocumento} from "../store/actions/serverActions";
import {change, Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import CenterContent from "../components/util/CenterContent";
import UploadFile from "../components/UploadFile";
import InputRow from "../components/form/InputRow";
import CardSimples from "../components/card/CardSimples";
import {downloadFile} from "../util/metodosUteis";
import Delete from "../components/util/Delete";

let CopiaDocumento = ({closeModal, visible, handleSubmit, save, update, data, idReload, formValues, uploadDocumento, dispatch}) => {

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Adicionar documento'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome do documento'} />
                {formValues ?
                    <CardSimples>
                        <div className={'item-colaborador-documento'}>
                            <span>{'Comprovante'}</span>
                            <span className={'link'}
                                  onClick={() => downloadFile(formValues)}>{formValues}</span>
                            <Delete onClick={() => dispatch(change('copiaDocumento', 'url', null))}/>
                        </div>
                    </CardSimples>
                    : <CenterContent>
                        <UploadFile label={'Adicionar comprovante'} onChange={e => uploadDocumento(e)}/>
                    </CenterContent>
                }
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

CopiaDocumento = reduxForm({form: 'copiaDocumento', enableReinitialize: true})(CopiaDocumento);

const mapStateToProps = state => {
    const selector = formValueSelector('copiaDocumento');
    return {
        initialValues: state.modal.copiaDocumento.value,
        visible: state.modal.copiaDocumento.visible,
        idReload: state.modal.copiaDocumento.idReload,
        data: state.modal.copiaDocumento.data,
        formValues: selector(state, 'url'),
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('copiaDocumento')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('copia-documentos', value, 'copiaDocumento', {entity: 'colaboradores', target: 'colaborador', id: idReload})),
    uploadDocumento: event => dispatch(uploadDocumento(event, {form: 'copiaDocumento', campo: 'url'})),
});


export default connect(mapStateToProps, mapDispatchToProps)(CopiaDocumento);
