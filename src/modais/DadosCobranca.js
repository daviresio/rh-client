import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let DadosCobranca = ({closeModal, visible, handleSubmit, update, save, idReload}) => {

    const submit = value => update(value, idReload);

    return (
        <Modal border visible={visible} title={'Dados de cobranca'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'razaoSocial'} label={'Razao social'}/>
                <Field component={InputRow} name={'cnpj'} label={'CNPJ'}/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

DadosCobranca = reduxForm({form: 'dadosCobranca', enableReinitialize: true})(DadosCobranca);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.dadosCobranca.value,
        visible: state.modal.dadosCobranca.visible,
        idReload: state.usuario.empresa.id,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('dadosCobranca', false)),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('cobrancas', value, 'dadosCobranca', {entity: 'empresas', id: idReload, target: 'empresa'})),
});


export default connect(mapStateToProps, mapDispatchToProps)(DadosCobranca);
