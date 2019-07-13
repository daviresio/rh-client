import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";
import Checkbox from "../components/form/Checkbox";
import CenterContent from "../components/util/CenterContent";

let Contador = props => {
    const {closeModal, visible, handleSubmit, save, update, updateForm, data, reload} = props

    const submit = value => value.id ? update({...value, ...data}, updateForm, reload) : save({...value, ...data}, updateForm, reload)

    return (
        <Modal border visible={visible} title={'Adicionar Contador'}>
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
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = state => ({
    initialValues: state.modal.contador.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('contador', false)),
    save: (value, updateForm, reload) => dispatch(save('contadores', value, {modal: 'contador', updateForm, reload})),
    update: (value, updateForm, reload) => dispatch(update('contadores', value, {modal: 'contador', list: true, updateForm, reload})),
})

Contador = reduxForm({form: 'contador', enableReinitialize: true})(Contador)

export default connect(mapStateToProps, mapDispatchToProps)(Contador)
