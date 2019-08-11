import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {tiposRelacaoContato} from "../config/defaultValues";

let Contato = props => {
    const {closeModal, visible, handleSubmit, save, update, updateForm, data, reload} = props;

    const submit = value => value.id ? update({...value, ...data}, updateForm, reload) : save({...value, ...data}, updateForm, reload);

    return (
        <Modal border visible={visible} title={'Adicionar contato'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <Field component={InputRow} name={'celular'} label={'Celular'}/>
                <Field component={InputRow} name={'telefoneTrabalho'} label={'Telefone de trabalho'}/>
                <Field component={SelectRow} name={'relacao'} label={'Relacao'} options={tiposRelacaoContato} required/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.contato.value,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('contato', false)),
    save: (value, updateForm, reload) => dispatch(save('contatos', value, {modal: 'contato', updateForm, reload})),
    update: (value, updateForm, reload) => dispatch(update('contatos', value, {modal: 'contato', list: true, updateForm, reload})),
});

Contato = reduxForm({form: 'contato', enableReinitialize: true})(Contato);

export default connect(mapStateToProps, mapDispatchToProps)(Contato)
