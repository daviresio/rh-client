import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";

let Dependente = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar dependente'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Dependente'} detail={'Exemplos: Estagiário, Analista, Coordenador, Gerente e Diretor'}/>
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
    initialValues: state.modal.dependente.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('dependente', false)),
    save: (value, updateDropdown) => dispatch(save('dependentes', value, {modal: 'dependente', updateDropdown})),
    update: value => dispatch(update('dependentes', value, {modal: 'dependente', list: true})),
})

Dependente = reduxForm({form: 'dependente', enableReinitialize: true})(Dependente)

export default connect(mapStateToProps, mapDispatchToProps)(Dependente)