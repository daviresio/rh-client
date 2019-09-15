import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import {connect} from "react-redux";
import {closeModal, saveModal, saveModalAndUpdateDropdown, updateModalAndList} from "../store/actions/modalActions";
import React from "react";
import Buttom from "../components/Buttom";

let Departamento = ({closeModal, visible, handleSubmit, save, update, saveAndUpdateDropdown, updateDropdown}) => {

    const submit = value => value.id ? update(value) : updateDropdown ? saveAndUpdateDropdown(value, updateDropdown) : save(value);

    return (
        <Modal border visible={visible} title={'Adicionar Departamento'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} detail={'Exemplos: Administrativo, Financeiro, Marketing, Recursos Humanos, Vendas, etc.'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.departamento.value,
    visible: state.modal.departamento.visible,
    updateDropdown: state.modal.departamento.updateDropdown,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('departamento')),
    saveAndUpdateDropdown: (value, updateDropdown) => dispatch(saveModalAndUpdateDropdown('departamentos', value, 'departamento', updateDropdown)),
    save: value => dispatch(saveModal('departamentos', value, 'departamento')),
    update: value => dispatch(updateModalAndList('departamentos', value, 'departamento')),
});

Departamento = reduxForm({form: 'departamento', enableReinitialize: true})(Departamento);

export default connect(mapStateToProps, mapDispatchToProps)(Departamento)

