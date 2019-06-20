import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";

let HoleriteModal = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar novo holerite'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'mes'} label={'Mes'}/>
                <Field component={SelectRow} name={'ano'} label={'Ano'}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'}/>
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
    initialValues: state.modal.holerite.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('holerite', false)),
    save: (value, updateDropdown) => dispatch(save('holerites', value, {modal: 'holerite', updateDropdown})),
    update: value => dispatch(update('holerites', value, {modal: 'holerite', list: true})),
})

HoleriteModal = reduxForm({form: 'holerite', enableReinitialize: true})(HoleriteModal)

export default connect(mapStateToProps, mapDispatchToProps)(HoleriteModal);