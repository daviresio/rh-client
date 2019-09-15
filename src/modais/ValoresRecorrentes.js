import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {loadList} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import InputRow from "../components/form/InputRow";
import {getValue} from "../util/metodosUteis";

let ValoresRecorrentes = ({closeModal, visible, handleSubmit, save, update, idReload, loadData, eventos, data}) => {

    useEffect(() => {
        loadData('eventos')
    }, []);

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={' Adicionar Valores Recorrentes '} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'item'} label={'Item'} options={eventos}/>
                <Field component={InputRow} name={'valor'} label={'Valor'} />
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
        id: getValue('id', state.modal.valoresRecorrentes.value),
        item: Number(getValue('item', state.modal.valoresRecorrentes.value)),
        valor: getValue('valor', state.modal.valoresRecorrentes.value),
    },
    visible: state.modal.valoresRecorrentes.visible,
    idReload: state.modal.valoresRecorrentes.idReload,
    data: state.modal.valoresRecorrentes.data,
    eventos: state.serverValues.eventos,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('valoresRecorrentes')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('valores-recorrentes', value, 'valoresRecorrentes', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('valores-recorrentes', value, 'valoresRecorrentes', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
    loadData: entity => dispatch(loadList(entity)),
});

ValoresRecorrentes = reduxForm({form: 'valoresRecorrentes', enableReinitialize: true})(ValoresRecorrentes);

export default connect(mapStateToProps, mapDispatchToProps)(ValoresRecorrentes);
