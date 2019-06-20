import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import {simNaoOptions} from "../config/defaultValues";
import InputRow from "../components/form/InputRow";

let ValoresRecorrentes = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={' Adicionar Valores Recorrentes '}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'item'} label={'Item'} options={[]} />
                <Field component={InputRow} name={'valor'} label={'Valor'} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.valoresRecorrentes.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('valoresRecorrentes', false)),
    save: (value, updateDropdown) => dispatch(save('valoresRecorrentes', value, {modal: 'valoresRecorrentes', updateDropdown})),
    update: value => dispatch(update('valoresRecorrentes', value, {modal: 'valoresRecorrentes', list: true})),
})

ValoresRecorrentes = reduxForm({form: 'valoresRecorrentes', enableReinitialize: true})(ValoresRecorrentes)

export default connect(mapStateToProps, mapDispatchToProps)(ValoresRecorrentes);