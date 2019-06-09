import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import InputRow from "../components/form/InputRow";
import Checkbox from "../components/form/Checkbox";

let Banco = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Informacoes bancarias'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'banco'} label={'Banco'} />
                <Field component={InputRow} name={'agencia'} label={'Agencia'} />
                <Field component={InputRow} name={'conta'} label={'Conta'} />
                <Field component={Checkbox} name={'poupanca'} label={'E poupanca?'} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.banco.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('banco', false)),
    save: (value, updateDropdown) => dispatch(save('bancos', value, {modal: 'banco', updateDropdown})),
    update: value => dispatch(update('bancos', value, {modal: 'banco', list: true})),
})

Banco = reduxForm({form: 'banco', enableReinitialize: true})(Banco)

export default connect(mapStateToProps, mapDispatchToProps)(Banco);