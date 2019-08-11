import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let DadosCobranca = ({closeModal, visible, handleSubmit, update, reload}) => {

    const submit = value => update(value, reload);

    return (
        <Modal border visible={visible} title={'Dados de cobranca'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'razaoSocial'} label={'Cep'}/>
                <Field component={InputRow} name={'cnpj'} label={'Endereco'}/>
                <Field component={InputRow} name={'email'} label={'Numero'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

DadosCobranca = reduxForm({form: 'dadosCobranca', enableReinitialize: true})(DadosCobranca);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.dadosCobranca.value,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('dadosCobranca', false)),
    update: (value, reload) => dispatch(update('cobrancas', value, {modal: 'dadosCobranca', reload})),
});


export default connect(mapStateToProps, mapDispatchToProps)(DadosCobranca);
