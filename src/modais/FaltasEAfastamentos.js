import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import DatePicker from "../components/form/DatePicker";

let FaltasEAfastamentos = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Faltas e afastamentos'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'motivo'} label={'Motivo'} options={[]} />
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={[]} />
                <Field component={DatePicker} name={'dataInicial'} label={'De'} />
                <Field component={DatePicker} name={'dataFinal'} label={'Ate'} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.faltasEAfastamentos.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('faltasEAfastamentos', false)),
    save: (value, updateDropdown) => dispatch(save('faltasEAfastamentos', value, {modal: 'faltasEAfastamentos', updateDropdown})),
    update: value => dispatch(update('faltasEAfastamentos', value, {modal: 'faltasEAfastamentos', list: true})),
})

FaltasEAfastamentos = reduxForm({form: 'faltasEAfastamentos', enableReinitialize: true})(FaltasEAfastamentos)

export default connect(mapStateToProps, mapDispatchToProps)(FaltasEAfastamentos);