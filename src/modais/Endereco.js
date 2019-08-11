import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update, uploadFile} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let Endereco = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown, reload, data} = props;

    const submit = value => value.id ? update({...value, ...data}, reload) : save({...value, ...data}, reload, updateDropdown);

    return (
        <Modal border visible={visible} title={'Endereco'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'cep'} label={'Cep'}/>
                <Field component={InputRow} name={'endereco'} label={'Endereco'}/>
                <Field component={InputRow} name={'numero'} label={'Numero'}/>
                <Field component={InputRow} name={'complemento'} label={'Complemento'}/>
                <Field component={InputRow} name={'bairro'} label={'Bairro'}/>
                <Field component={InputRow} name={'estado'} label={'Estado'}/>
                <Field component={InputRow} name={'cidade'} label={'Cidade'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Endereco = reduxForm({form: 'endereco', enableReinitialize: true})(Endereco);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.endereco.value,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('endereco', false)),
    save: (value, reload, updateDropdown ) => dispatch(save('enderecos', value, {modal: 'endereco', updateDropdown, reload})),
    update: (value, reload) => dispatch(update('enderecos', value, {modal: 'endereco', reload})),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Endereco);
