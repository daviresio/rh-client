import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update, uploadFile} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import DatePicker from "../components/form/DatePicker";
import Checkbox from "../components/form/Checkbox";
import CenterContent from "../components/util/CenterContent";

let Feriado = props => {
    const {closeModal, visible, handleSubmit, save, update} = props

    const submit = value => value.id ? update(value) : save(value)

    return (
        <Modal border visible={visible} title={'Adicionar feriado'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Titulo do feriado'}/>
                <Field component={DatePicker} name={'data'} label={'Data'}/>
                <CenterContent>
                    <Field component={Checkbox} name={'dsr'} label={'Aplicat a DSR'}/>
                </CenterContent>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Feriado = reduxForm({form: 'feriado', enableReinitialize: true})(Feriado)

const mapStateToProps = state => {
    return {
        initialValues: state.modal.feriado.value,
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('feriado', false)),
    save: (value, reload, updateDropdown) => dispatch(save('feriados', value, {modal: 'feriado', updateDropdown, reload})),
    update: (value, reload) => dispatch(update('feriados', value, {modal: 'feriado', reload})),
})


export default connect(mapStateToProps, mapDispatchToProps)(Feriado);
