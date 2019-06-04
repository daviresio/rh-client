import React from 'react';
import Modal from "../../../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../../components/form/InputRow";
import Buttom from "../../../components/Buttom";
import {changeModalVisible} from "../../../store/actions/modalActions";
import {save, update} from "../../../store/actions/serverActions";
import {connect} from "react-redux";

let Sindicato = props => {
    const {closeModal, visible, handleSubmit, save, update} = props

    const submit = value => value.id ? update(value) : save(value)

    return (
        <Modal border visible={visible} title={'Adicionar sindicato'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={InputRow} name={'telefone'} label={'telefone'}/>
                <Field component={InputRow} name={'site'} label={'Site'}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = state => ({
    initialValues: state.modal.sindicato.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('sindicato', false)),
    save: value => dispatch(save('sindicatos', value, {modal: 'sindicato'})),
    update: value => dispatch(update('sindicatos', value, {modal: 'sindicato'})),
})

Sindicato = reduxForm({form: 'sindicato', enableReinitialize: true})(Sindicato)

export default connect(mapStateToProps, mapDispatchToProps)(Sindicato)
