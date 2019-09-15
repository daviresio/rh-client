import React from 'react';
import {connect} from "react-redux";
import {closeModal} from "../store/actions/modalActions";
import {save, update, uploadFile} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import {tiposEscolaridade} from "../config/defaultValues";

let Escolaridade = ({closeModal, visible, handleSubmit, save, update, updateDropdown, reload, data}) => {

    const submit = value => value.id ? update({...value, ...data}, reload) : save({...value, ...data}, reload, updateDropdown);

    return (
        <Modal border visible={visible} title={'Formacao academica'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'escolaridade'} label={'Escolaridade'} options={tiposEscolaridade}/>
                <Field component={InputRow} name={'curso'} label={'Curso'}/>
                <Field component={InputRow} name={'instituicao'} label={'Instituicao'}/>
                <Field component={InputRow} name={'anoConclusao'} label={'Ano de conclusao'} type={'number'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Escolaridade = reduxForm({form: 'escolaridade', enableReinitialize: true})(Escolaridade);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.escolaridade.value,
        visible: state.modal.escolaridade.visible,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('escolaridade')),
    save: (value, reload, updateDropdown ) => dispatch(save('escolaridades', value, {modal: 'escolaridade', updateDropdown, reload})),
    update: (value, reload) => dispatch(update('escolaridades', value, {modal: 'escolaridade', reload})),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Escolaridade);
