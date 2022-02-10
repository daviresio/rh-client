import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import DatePicker from "../components/form/DatePicker";
import RadioButton from "../components/form/RadioButton";
import Checkbox from "../components/form/Checkbox";
import CenterContent from "../components/util/CenterContent";

let PeriodoAquisitivoSaldoFerias = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props;

    const submit = value => value.id ? update(value) : save(value, updateDropdown);

    return (
        <Modal border visible={visible} title={'Edite as informacoes de periodo aquisitivo e saldo de ferias'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={DatePicker} name={'inicioPeriodoAquisitivoAtual'} label={'Inicio do periodo aquisitivo atual'} />
                <Field component={InputRow} name={'saldoFerias'} label={'Saldo'} />
                <CenterContent style={{flexDirection: 'column', alignItems: 'center'}}>
                <h2 className={'title'}>Este usuario tera ferias?</h2>
                <Field component={RadioButton} type={'radio'} value={true} normalize={v => !!v} label={'Sim'}
                       name={"usuarioTeraFerias"}/>
                <Field component={RadioButton} type={'radio'} value={false} normalize={v => !!v} label={'Nao'}
                       name={"usuarioTeraFerias"}/>
                <Field component={Checkbox} name={'limparHistoricoFerias'} label={'Limpar historico de ferias?'}/>
                </CenterContent>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

PeriodoAquisitivoSaldoFerias = reduxForm({form: 'periodoAquisitivoSaldoFerias', enableReinitialize: true})(PeriodoAquisitivoSaldoFerias);

const mapStateToProps = state => ({
    initialValues: state.modal.periodoAquisitivoSaldoFerias.value,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('periodoAquisitivoSaldoFerias', false)),
    save: (value, updateDropdown) => dispatch(save('ferias', value, {modal: 'periodoAquisitivoSaldoFerias', updateDropdown})),
    update: value => dispatch(update('ferias', value, {modal: 'periodoAquisitivoSaldoFerias', list: true})),
});


export default connect(mapStateToProps, mapDispatchToProps)(PeriodoAquisitivoSaldoFerias);
