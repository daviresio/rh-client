import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update, uploadDocumento} from "../store/actions/serverActions";
import {change, Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import CenterContent from "../components/util/CenterContent";
import UploadFile from "../components/UploadFile";
import InputRow from "../components/form/InputRow";
import CardSimples from "../components/card/CardSimples";
import {downloadFile} from "../util/metodosUteis";
import Delete from "../components/util/Delete";

let CopiaDocumento = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown, data, reload, formValues, uploadDocumento} = props

    const submit = value => value.id ? update({...value, ...data}, reload) : save({...value, ...data}, reload, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar documento'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome do documento'} />
                {formValues ?
                    <CardSimples>
                        <div className={'item-colaborador-documento'}>
                            <span>{'Comprovante'}</span>
                            <span className={'link'}
                                  onClick={() => downloadFile(formValues)}>{formValues}</span>
                            <Delete onClick={() => props.dispatch(change('copiaDocumento', 'url', null))}/>
                        </div>
                    </CardSimples>
                    : <CenterContent>
                        <UploadFile label={'Adicionar comprovante'} onChange={e => uploadDocumento(e)}/>
                    </CenterContent>
                }
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

CopiaDocumento = reduxForm({form: 'copiaDocumento', enableReinitialize: true})(CopiaDocumento)

const mapStateToProps = state => {
    const selector = formValueSelector('copiaDocumento')
    return {
        initialValues: state.modal.copiaDocumento.value,
        formValues: selector(state, 'url'),
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('copiaDocumento', false)),
    save: (value, reload, updateDropdown) => dispatch(save('copia-documentos', value, {modal: 'copiaDocumento', updateDropdown, reload, target: 'copiaDocumentos'})),
    update: (value, reload) => dispatch(update('copia-documentos', value, {modal: 'copiaDocumento', list: true, reload})),
    uploadDocumento: event => dispatch(uploadDocumento(event, {form: 'copiaDocumento', campo: 'url'})),
})


export default connect(mapStateToProps, mapDispatchToProps)(CopiaDocumento);
