import React from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";

let Endereco = ({closeModal, visible, handleSubmit, save, update, idReload, data}) => {

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Endereco'} close={closeModal}>
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
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Endereco = reduxForm({form: 'endereco', enableReinitialize: true})(Endereco);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.endereco.value,
        visible: state.modal.endereco.visible,
        idReload: state.modal.endereco.idReload,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('endereco')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('enderecos', value, 'endereco', {entity: 'colaboradores', target: 'colaborador', id: idReload})),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('enderecos', value, 'endereco', {entity: 'colaboradores', target: 'colaborador', id: idReload})),
});


export default connect(mapStateToProps, mapDispatchToProps)(Endereco);
