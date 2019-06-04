import Modal from "../../../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../../components/form/InputRow";
import {connect} from "react-redux";
import {changeModalVisible} from "../../../store/actions/modalActions";
import React, {useRef} from "react";
import Buttom from "../../../components/Buttom";
import {save, update} from "../../../store/actions/serverActions";

let Cargo = props => {
    const {closeModal, visible, handleSubmit, save, update} = props

    const submit = value => value.id ? update(value) : save(value)

    return (
        <Modal border visible={visible} title={'Adicionar cargo'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Cargo'} detail={'Exemplos: Estagiário, Analista, Coordenador, Gerente e Diretor'} value={''}/>
                <Field component={InputRow} name={'cbo'} label={'Cbo'} detail={'Classificação Brasileira de Ocupações - CBO'} actionLabel={'Buscar por Título'} value={''}/>
                <Field component={InputRow} name={'descricao'} label={'Descricao'} value={''}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = state => ({
    initialValues: state.modal.cargo.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('cargo', false)),
    save: value => dispatch(save('cargos', value, {modal: 'cargo'})),
    update: value => dispatch(update('cargos', value, {modal: 'cargo'})),
})

Cargo = reduxForm({form: 'cargo', enableReinitialize: true})(Cargo)

export default connect(mapStateToProps, mapDispatchToProps)(Cargo)

