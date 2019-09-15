import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {
    closeModal,
    saveModalAndReloadOtherEntity,
    saveModalAndUpdateFormArray,
    updateModalAndReloadOtherEntity,
    updateModalAndUpdateFormArray
} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {tiposRelacaoContato} from "../config/defaultValues";

let Contato = ({closeModal, visible, handleSubmit, save, saveAndReload, update, updateAndReload, updateFormArray, data, idReload}) => {

    const submit = value => {
        if (updateFormArray) value.id ? update({...value, ...data}, updateFormArray) : save({...value, ...data}, updateFormArray);

        if (idReload) value.id ? updateAndReload({...value, ...data}, idReload) : saveAndReload({...value, ...data}, idReload);
    };

    return (
        <Modal border visible={visible} title={'Adicionar contato'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <Field component={InputRow} name={'celular'} label={'Celular'}/>
                <Field component={InputRow} name={'telefoneTrabalho'} label={'Telefone de trabalho'}/>
                <Field component={SelectRow} name={'relacao'} label={'Relacao'} options={tiposRelacaoContato} required/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.contato.value,
    visible: state.modal.contato.visible,
    data: state.modal.contato.data,
    idReload: state.modal.contato.idReload,
    updateFormArray: state.modal.contato.updateFormArray,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('contato')),
    save: (value, updateFormArray) => dispatch(saveModalAndUpdateFormArray('contatos', value, 'contato', updateFormArray,)),
    update: (value, updateFormArray) => dispatch(updateModalAndUpdateFormArray('contatos', value, 'contato', updateFormArray)),
    saveAndReload: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('contatos', value, 'contato', {entity: 'colaboradores', id: idReload, target: 'colaborador'},)),
    updateAndReload: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('contatos', value, 'contato', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
});

Contato = reduxForm({form: 'contato', enableReinitialize: true})(Contato);

export default connect(mapStateToProps, mapDispatchToProps)(Contato)
