import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible, saveModal, updateModalAndList} from "../store/actions/modalActions";
import {connect} from "react-redux";
import Checkbox from "../components/form/Checkbox";
import CenterContent from "../components/util/CenterContent";

let Contador = ({closeModal, visible, handleSubmit, save, update}) => {

    const submit = value => value.id ? update(value) : save(value);

    return (
        <Modal border visible={visible} title={'Adicionar Contador'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <Field component={InputRow} name={'softwareContabil'} label={'Software Contabil'}/>
                <Field component={InputRow} name={'responsavelPor'} label={'Responsavel Por'}/>
                <CenterContent>
                    <Field component={Checkbox} name={'acessoAoSistemaDeContador'} label={'Acesso Ao Sistema De Contador'}/>
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
    initialValues: state.modal.contador.value,
    visible: state.modal.contador.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('contador', false)),
    save: value => dispatch(saveModal('contadores', value, 'contador')),
    update: value => dispatch(updateModalAndList('contadores', value, 'contador')),
});

Contador = reduxForm({form: 'contador', enableReinitialize: true})(Contador);

export default connect(mapStateToProps, mapDispatchToProps)(Contador)
