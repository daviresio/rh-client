import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import DatePicker from "../components/form/DatePicker";
import InputRow from "../components/form/InputRow";
import Checkbox from "../components/form/Checkbox";

let SolicitarFerias = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props

    const submit = value => value.id ? update(value) : save(value, updateDropdown)

    return (
        <Modal border visible={visible} title={'Solicitar ferias'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={DatePicker} name={'dataInicio'} label={'De'} />
                <Field component={DatePicker} name={'dataFinal'} label={'Ate'} />
                <Field component={InputRow} name={'diasDeAbono'} label={'Dias de abono'} />
                <Field component={Checkbox} name={'anteciparDecimoTerceiro'} label={'Antecipar primeira parcela do 13º?'} />
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
    initialValues: state.modal.solicitarFerias.value,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('solicitarFerias', false)),
    save: (value, updateDropdown) => dispatch(save('ferias', value, {modal: 'solicitarFerias', updateDropdown})),
    update: value => dispatch(update('ferias', value, {modal: 'solicitarFerias', list: true})),
})

SolicitarFerias = reduxForm({form: 'solicitarFerias', enableReinitialize: true})(SolicitarFerias)

export default connect(mapStateToProps, mapDispatchToProps)(SolicitarFerias);