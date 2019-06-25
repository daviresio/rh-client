import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {connect} from "react-redux";
import DatePicker from "../components/form/DatePicker";
import SelectRow from "../components/form/SelectRow";
import {simNaoOptions, tiposRelacaoDependente} from "../config/defaultValues";
import Checkbox from "../components/form/Checkbox";

let Dependente = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Adicionar dependente'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'} />
                <Field component={DatePicker} name={'dataNascimento'} label={'Data de Nascimento'} />
                <Field component={SelectRow} options={simNaoOptions} name={'estrangeiro'} label={'E estrangeiro?'}/>
                <Field component={InputRow} name={'cpf'} label={'Cpf'}/>
                <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                <Field component={SelectRow} name={'relacao'} label={'Relacao'} options={tiposRelacaoDependente}/>
                <Field component={Checkbox} name={'incluirParaFinsDeImpostoRenda'} label={'Incluir para fins de imposto de renda'}/>
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
