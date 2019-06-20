import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import React from "react";
import {save, update} from "../store/actions/serverActions";
import Buttom from "../components/Buttom";

let Departamento = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props
    const submit = value => value.id ? update(value) : save(value, updateDropdown)
    return (
        <Modal border visible={visible} title={'Adicionar Departamento'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} detail={'Exemplos: Administrativo, Financeiro, Marketing, Recursos Humanos, Vendas, etc.'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
}

const mapStateToProps = ({modal}) => ({
    initialValues: modal.departamento.value
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('departamento', false)),
    save: (value, updateDropdown) => dispatch(save('departamentos', value, {modal: 'departamento', updateDropdown})),
    update: value => dispatch(update('departamentos', value, {modal: 'departamento', list: true})),
})

Departamento = reduxForm({form: 'departamento', enableReinitialize: true})(Departamento)

export default connect(mapStateToProps, mapDispatchToProps)(Departamento)

