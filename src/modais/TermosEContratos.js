import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";

let TermosEContratos = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar cargo'}>
            <form onSubmit={handleSubmit(submit)}>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.termosEContratos.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('termosEContratos', false)),
    save: (value, updateDropdown) => dispatch(save('termosEContratos', value, {modal: 'termosEContratos', updateDropdown})),
    update: value => dispatch(update('termosEContratos', value, {modal: 'termosEContratos', list: true})),
})

TermosEContratos = reduxForm({form: 'termosEContratos', enableReinitialize: true})(TermosEContratos)

export default connect(mapStateToProps, mapDispatchToProps)(TermosEContratos);