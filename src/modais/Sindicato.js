import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible, saveModal, updateModalAndList} from "../store/actions/modalActions";
import {connect} from "react-redux";

let Sindicato = ({closeModal, visible, handleSubmit, save, update}) => {

    const submit = value => value.id ? update(value) : save(value);

    return (
        <Modal border visible={visible} title={'Adicionar sindicato'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={InputRow} name={'telefone'} label={'telefone'}/>
                <Field component={InputRow} name={'site'} label={'Site'}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.sindicato.value,
    visible: state.modal.sindicato.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('sindicato', false)),
    save: value => dispatch(saveModal('sindicatos', value, 'sindicato')),
    update: value => dispatch(updateModalAndList('sindicatos', value, 'sindicato')),
});

Sindicato = reduxForm({form: 'sindicato', enableReinitialize: true})(Sindicato);

export default connect(mapStateToProps, mapDispatchToProps)(Sindicato)
