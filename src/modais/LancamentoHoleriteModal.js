import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {meses, tiposLancamentoHolerite} from "../config/defaultValues";

let LancamentoHoleriteModal = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar holerite'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'ano'} label={'Ano'}/>
                <Field component={SelectRow} name={'mes'} label={'Mes'} options={meses}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposLancamentoHolerite}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Criar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = state => ({
    initialValues: state.modal.cargo.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('lancamentoHolerite', false)),
    save: (value, updateDropdown) => dispatch(save('lancamentoHolerite', value, {modal: 'lancamentoHolerite', updateDropdown})),
    update: value => dispatch(update('lancamentoHolerite', value, {modal: 'cargo', list: true})),
})

LancamentoHoleriteModal = reduxForm({form: 'lancamentoHolerite', enableReinitialize: true})(LancamentoHoleriteModal)

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoHoleriteModal);