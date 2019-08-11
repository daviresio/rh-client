import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let DadosEmpresa = props => {
    const {closeModal, visible, handleSubmit, update, reload} = props;

    const submit = value => update(value, reload);

    return (
        <Modal border visible={visible} title={'Dados da empresa'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome da empresa'}/>
                <Field component={InputRow} name={'razaoSocial'} label={'Razao social'}/>
                <Field component={InputRow} name={'cnpj'} label={'CNPJ'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

DadosEmpresa = reduxForm({form: 'dadosEmpresa', enableReinitialize: true})(DadosEmpresa);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.dadosEmpresa.value,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('dadosEmpresa', false)),
    update: (value, reload) => dispatch(update('empresas', value, {modal: 'dadosEmpresa', reload})),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosEmpresa);
