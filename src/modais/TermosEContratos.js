import React from 'react';
import {connect} from "react-redux";
import {closeModal} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import Message from "../components/util/Message";

let TermosEContratos = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props;

    const submit = value => value.id ? update(value) : save(value, updateDropdown);

    return (
        <Modal border visible={visible} title={'Adicionar termos e contratos.'}>
            <form onSubmit={handleSubmit(submit)}>
                <Message icon={null} color={'orange'} text={<span>caso queira adicionar um novo termo ou contrato <span className={'link'}>clique aqui</span></span>}/>
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
    visible: state.modal.termosEContratos.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('termosEContratos')),
    save: (value, updateDropdown) => dispatch(save('termosEContratos', value, {modal: 'termosEContratos', updateDropdown})),
    update: value => dispatch(update('termosEContratos', value, {modal: 'termosEContratos', list: true})),
});

TermosEContratos = reduxForm({form: 'termosEContratos', enableReinitialize: true})(TermosEContratos);

export default connect(mapStateToProps, mapDispatchToProps)(TermosEContratos);
