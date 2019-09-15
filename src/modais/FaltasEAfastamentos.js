import React from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import DatePicker from "../components/form/DatePicker";
import {motivosFaltaAfastamento, tipoFaltaAfastamento} from "../config/defaultValues";

let FaltasEAfastamentos = ({closeModal, visible, handleSubmit, save, update, idReload, data}) => {

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Faltas e afastamentos'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'motivo'} label={'Motivo'} options={motivosFaltaAfastamento}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tipoFaltaAfastamento}/>
                <Field component={DatePicker} name={'dataInicial'} label={'De'} />
                <Field component={DatePicker} name={'dataFinal'} label={'Ate'} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.falta.value,
    visible: state.modal.falta.visible,
    idReload: state.modal.falta.idReload,
    data: state.modal.falta.data,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('falta')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('faltas', value, 'falta', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('faltas', value, 'falta', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
});

FaltasEAfastamentos = reduxForm({form: 'falta', enableReinitialize: true})(FaltasEAfastamentos);

export default connect(mapStateToProps, mapDispatchToProps)(FaltasEAfastamentos);
