import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";

let Documento = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props
    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar documento'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'categoria'} label={'Categoria'} />
                <Field component={SelectRow} name={'nome'} label={'Nome do documento'} />
                <Buttom color={'blue'} label={'Selecione o arquivo'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.documento.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('documento', false)),
    save: (value, updateDropdown) => dispatch(save('documentos', value, {modal: 'documento', updateDropdown})),
    update: value => dispatch(update('documentos', value, {modal: 'documento', list: true})),
})

Documento = reduxForm({form: 'documento', enableReinitialize: true})(Documento)

export default connect(mapStateToProps, mapDispatchToProps)(Documento);