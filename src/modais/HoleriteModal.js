import React from 'react';
import {connect} from "react-redux";
import {closeModal} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import CenterContent from "../components/util/CenterContent";
import {tiposHolerite} from "../config/defaultValues";

let HoleriteModal = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props;

    const submit = value => value.id ? update(value) : save(value, updateDropdown);

    return (
        <Modal border visible={visible} title={'Adicionar novo holerite'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'mes'} label={'Mes'}/>
                <Field component={SelectRow} name={'ano'} label={'Ano'}/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposHolerite}/>
                <CenterContent style={{marginTop: '2rem'}}>
                    <Buttom color={'blue'} label={'Selecione o arquivo'}/>
                </CenterContent>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.holerite.value,
    visible: state.modal.holerite.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('holerite')),
    save: (value, updateDropdown) => dispatch(save('holerites', value, {modal: 'holerite', updateDropdown})),
    update: value => dispatch(update('holerites', value, {modal: 'holerite', list: true})),
});

HoleriteModal = reduxForm({form: 'holerite', enableReinitialize: true})(HoleriteModal);

export default connect(mapStateToProps, mapDispatchToProps)(HoleriteModal);
