import React, {useEffect} from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import Buttom from "../components/Buttom";
import {closeModal, saveModalAndRedirect} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {meses} from "../config/defaultValues";
import {changeRoute} from "../store/actions/routerActions";
import {loadList} from "../store/actions/serverActions";
import {getValue} from "../util/metodosUteis";

let LancamentoHoleriteModal = ({closeModal, visible, handleSubmit, save, loadData, tiposHolerites}) => {

    useEffect(() => {
        loadData('tipos-holerites', 'tiposHolerites')
    }, []);

    const submit = value => {
        save(value, {route: `/folha/holerites/lancamento/`, id: true, target: 'holerites'})
    };

    return (
        <Modal border visible={visible} title={'Adicionar holerite'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'ano'} label={'Ano'} options={[{nome: '2019', id: '2019'}]}/>
                <Field component={SelectRow} name={'mes'} label={'Mes'} options={meses}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposHolerites}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Criar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

LancamentoHoleriteModal = reduxForm({form: 'lancamentoHolerite', enableReinitialize: true})(LancamentoHoleriteModal);

const mapStateToProps = state => ({
    initialValues: {
        ...state.modal.lancamentoHolerite.value,
        tipo: getValue('tipo.id', state.modal.lancamentoHolerite.value)
    },
    visible: state.modal.lancamentoHolerite.visible,
    tiposHolerites: state.serverValues.tiposHolerites,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('lancamentoHolerite')),
    save: (value, redirect) => dispatch(saveModalAndRedirect('holerites', value, 'lancamentoHolerite', redirect)),
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoHoleriteModal);
