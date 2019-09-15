import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import Buttom from "../components/Buttom";
import {closeModal, saveModal} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {meses, tiposHolerite} from "../config/defaultValues";
import {changeRoute} from "../store/actions/routerActions";

let LancamentoHoleriteModal = ({closeModal, visible, handleSubmit, changeRoute,}) => {

    const submit = value => {
        //value.id ? update(value) : save(value, updateDropdown)
        changeRoute('/folha/tipo-lancamento-holerite')
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

const mapStateToProps = state => ({
    initialValues: state.modal.lancamentoHolerite.value,
    visible: state.modal.lancamentoHolerite.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('lancamentoHolerite')),
    save: value => dispatch(saveModal('holerites', value, 'lancamentoHolerite', 'lancamentoHolerite')),
    changeRoute: route => dispatch(changeRoute(route)),
});

LancamentoHoleriteModal = reduxForm({form: 'lancamentoHolerite', enableReinitialize: true})(LancamentoHoleriteModal);

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoHoleriteModal);
