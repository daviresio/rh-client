import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    closeModal,
    saveModalAndReloadOtherEntity,
    updateModalAndReloadOtherEntity
} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import DatePicker from "../components/form/DatePicker";
import {getValue} from "../util/metodosUteis";
import {loadList} from "../store/actions/serverActions";

let FaltasEAfastamentos = ({
                               closeModal, visible, handleSubmit, save, update, idReload, data, loadData,
                               motivosFaltasAfastamentos, tiposFaltasAfastamentos,
                           }) => {

    useEffect(() => {
        loadData('motivos-faltas-afastamentos', 'motivosFaltasAfastamentos');
        loadData('tipos-faltas-afastamentos', 'tiposFaltasAfastamentos')
    }, []);

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Faltas e afastamentos'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'motivo'} label={'Motivo'} options={motivosFaltasAfastamentos}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposFaltasAfastamentos}/>
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
    initialValues: {
        ...state.modal.falta.value, motivo: getValue('motivo.id', state.modal.falta.value),
        tipo: getValue('tipo.id', state.modal.falta.value),
    },
    visible: state.modal.falta.visible,
    idReload: state.modal.falta.idReload,
    data: state.modal.falta.data,
    motivosFaltasAfastamentos: state.serverValues.motivosFaltasAfastamentos,
    tiposFaltasAfastamentos: state.serverValues.tiposFaltasAfastamentos,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('falta')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('faltas', value, 'falta', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('faltas', value, 'falta', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

FaltasEAfastamentos = reduxForm({form: 'falta', enableReinitialize: true})(FaltasEAfastamentos);

export default connect(mapStateToProps, mapDispatchToProps)(FaltasEAfastamentos);
