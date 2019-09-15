import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity,} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import TextAreaRow from "../components/form/TextAreaRow";
import {categoriaAnotacao} from "../config/defaultValues";

let Anotacao = ({closeModal, visible, handleSubmit, saveAndReload, updateAndReload, data, idReload}) => {

    const submit = value => {
        value.id ? updateAndReload({...value, ...data}, idReload) : saveAndReload({...value, ...data}, idReload);
    };

    return (
        <Modal border visible={visible} title={'Adicionar anotacao'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'titulo'} label={'Titulo'} required/>
                <Field component={SelectRow} name={'categoria'} label={'Categoria'} options={categoriaAnotacao} required/>
                <Field component={TextAreaRow} name={'anotacao'} label={'Anotacao'} required/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.anotacao.value,
    visible: state.modal.anotacao.visible,
    data: state.modal.anotacao.data,
    idReload: state.modal.anotacao.idReload,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('anotacao')),
    saveAndReload: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('anotacoes', value, 'anotacao', {entity: 'colaboradores', id: idReload, target: 'colaborador'},)),
    updateAndReload: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('anotacoes', value, 'anotacao', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
});

Anotacao = reduxForm({form: 'anotacao', enableReinitialize: true})(Anotacao);

export default connect(mapStateToProps, mapDispatchToProps)(Anotacao)
