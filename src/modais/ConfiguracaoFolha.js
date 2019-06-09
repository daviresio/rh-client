import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";

let ConfiguracaoFolha = props => {
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
    initialValues: state.modal.configuracaoFolha.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('configuracaoFolha', false)),
    save: (value, updateDropdown) => dispatch(save('folha', value, {modal: 'configuracaoFolha', updateDropdown})),
    update: value => dispatch(update('folha', value, {modal: 'configuracaoFolha', list: true})),
})

ConfiguracaoFolha = reduxForm({form: 'configuracaoFolha', enableReinitialize: true})(ConfiguracaoFolha)

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracaoFolha);