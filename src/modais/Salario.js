import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import DatePicker from "../components/form/DatePicker";

let Salario = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown, serverValues} = props
    const {cargos, departamentos} = serverValues

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Definir vinculo e salario'}>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className={'title'}>Período</h2>
                <Field component={DatePicker} name={'dataInicio'} label={'Valido a partir de'} required />
                <Field component={DatePicker} name={'dataFinal'} label={'Válido até: (se for a última alteração, deixar este campo em branco)'} />
                <h2 className={'title'}>Período</h2>
                <Field component={SelectRow} name={'cargo'} label={'Cargo'} options={cargos} />
                <Field component={SelectRow} name={'departamento'} label={'Departamento'} options={departamentos} />
                <Field component={SelectRow} name={'vinculo'} label={'Vinculo'} />
                <Field component={InputRow} name={'Salário (R$)'} label={'salario'} />
                <Field component={SelectRow} name={'motivo'} label={'Motivo'} />
                <Field component={InputRow} name={'justificativa'} label={'Justificativa'} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.salario.value,
    serverValues: state.serverValues,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('salario', false)),
    save: (value, updateDropdown) => dispatch(save('salarios', value, {modal: 'salario', updateDropdown})),
    update: value => dispatch(update('salarios', value, {modal: 'salario', list: true})),
})

Salario = reduxForm({form: 'salario', enableReinitialize: true})(Salario)

export default connect(mapStateToProps, mapDispatchToProps)(Salario);