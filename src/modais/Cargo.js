import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import {connect} from "react-redux";
import {closeModal, saveModal, saveModalAndUpdateDropdown, updateModalAndList} from "../store/actions/modalActions";
import React from "react";
import Buttom from "../components/Buttom";

let Cargo = ({closeModal, visible, handleSubmit, save, update, saveAndUpdateDropdown, updateDropdown}) => {

    const submit = value => value.id ? update(value) : updateDropdown ? saveAndUpdateDropdown(value, updateDropdown) : save(value);

    return (
        <Modal border visible={visible} title={'Adicionar cargo'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Cargo'} detail={'Exemplos: Estagiário, Analista, Coordenador, Gerente e Diretor'}/>
                <Field component={InputRow} name={'cbo'} label={'Cbo'} detail={'Classificação Brasileira de Ocupações - CBO'} actionLabel={'Buscar por Título'}/>
                <Field component={InputRow} name={'descricao'} label={'Descricao'}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.cargo.value,
    visible: state.modal.cargo.visible,
    updateDropdown: state.modal.cargo.updateDropdown,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('cargo')),
    saveAndUpdateDropdown: (value, updateDropdown) => dispatch(saveModalAndUpdateDropdown('cargos', value, 'cargo', updateDropdown)),
    save: value => dispatch(saveModal('cargos', value, 'cargo')),
    update: value => dispatch(updateModalAndList('cargos', value, 'cargo')),
});

Cargo = reduxForm({form: 'cargo', enableReinitialize: true})(Cargo);

export default connect(mapStateToProps, mapDispatchToProps)(Cargo)

