import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";

let Contato = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar contato'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Contato'} detail={'Exemplos: Estagiário, Analista, Coordenador, Gerente e Diretor'}/>
                <Field component={InputRow} name={'cbo'} label={'Cbo'} detail={'Classificação Brasileira de Ocupações - CBO'} actionLabel={'Buscar por Título'}/>
                <Field component={InputRow} name={'descricao'} label={'Descricao'}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = state => ({
    initialValues: state.modal.contato.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('contato', false)),
    save: (value, updateDropdown) => dispatch(save('contatos', value, {modal: 'contato', updateDropdown})),
    update: value => dispatch(update('contatos', value, {modal: 'contato', list: true})),
})

Contato = reduxForm({form: 'contato', enableReinitialize: true})(Contato)

export default connect(mapStateToProps, mapDispatchToProps)(Contato)