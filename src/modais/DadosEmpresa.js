import React from 'react';
import {connect} from "react-redux";
import {closeModal, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let DadosEmpresa = ({closeModal, visible, handleSubmit, update, idReload}) => {

    const submit = value => update(value, idReload);

    return (
        <Modal border visible={visible} title={'Dados da empresa'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome da empresa'}/>
                <Field component={InputRow} name={'razaoSocial'} label={'Razao social'}/>
                <Field component={InputRow} name={'cnpj'} label={'CNPJ'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

DadosEmpresa = reduxForm({form: 'dadosEmpresa', enableReinitialize: true})(DadosEmpresa);

const mapStateToProps = state => {

    return {
        initialValues: state.modal.dadosEmpresa.value,
        visible: state.modal.dadosEmpresa.visible,
        idReload: state.usuario.empresa.id,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('dadosEmpresa')),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('empresas', value, 'dadosEmpresa', {entity: 'empresas', id: idReload, target: 'empresa'})),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosEmpresa);
