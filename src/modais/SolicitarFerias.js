import React from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import DatePicker from "../components/form/DatePicker";
import InputRow from "../components/form/InputRow";
import Checkbox from "../components/form/Checkbox";
import AlignContentOnGrid from "../components/util/AlignContentOnGrid";
import TextAreaRow from "../components/form/TextAreaRow";

let SolicitarFerias = ({closeModal, visible, handleSubmit, save, update, idReload, data}) => {

    const submit = value => {
        value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);
    };

    return (
        <Modal border visible={visible} title={'Solicitar ferias'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={DatePicker} name={'inicioPeriodoAquisitivo'} label={'De'}/>
                <Field component={DatePicker} name={'finalPeriodoAquisitivo'} label={'Ate'}/>
                <Field component={InputRow} name={'diasDeAbono'} label={'Dias de abono'} type={'number'}/>
                <AlignContentOnGrid margen>
                <Field component={Checkbox} name={'anteciparDecimoTerceiro'} label={'Antecipar primeira parcela do 13º?'} />
                </AlignContentOnGrid>
                <Field component={TextAreaRow} name={'justificativa'} label={'Justificativa'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.ferias.value,
    visible: state.modal.ferias.visible,
    idReload: state.modal.ferias.idReload,
    data: state.modal.ferias.data,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('solicitarFerias')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('ferias', value, 'ferias', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('ferias', value, 'ferias', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
});

SolicitarFerias = reduxForm({form: 'solicitarFerias', enableReinitialize: true})(SolicitarFerias);

export default connect(mapStateToProps, mapDispatchToProps)(SolicitarFerias);
