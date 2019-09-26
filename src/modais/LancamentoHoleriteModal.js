import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import Buttom from "../components/Buttom";
import {closeModal, saveModal, saveModalAndRedirect} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {meses, tiposHolerite} from "../config/defaultValues";
import {changeRoute} from "../store/actions/routerActions";

let LancamentoHoleriteModal = ({closeModal, visible, handleSubmit, save}) => {

    const submit = value => {
        save(value, {route: `/folha/holerites/lancamento/`, id: true, target: 'holerites'})
    };

    return (
        <Modal border visible={visible} title={'Adicionar holerite'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'ano'} label={'Ano'} options={[{nome: '2019', id: '2019'}]}/>
                <Field component={SelectRow} name={'mes'} label={'Mes'} options={meses}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposHolerite}/>
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
    initialValues: state.modal.lancamentoHolerite.value,
    visible: state.modal.lancamentoHolerite.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('lancamentoHolerite')),
    save: (value, redirect) => dispatch(saveModalAndRedirect('holerites', value, 'lancamentoHolerite', redirect)),
    changeRoute: route => dispatch(changeRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoHoleriteModal);
