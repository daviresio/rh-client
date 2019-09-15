import React from 'react';
import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import Buttom from "../components/Buttom";
import {
    closeModal,
    saveModalAndReloadOtherEntity,
    saveModalAndUpdateFormArray,
    updateModalAndReloadOtherEntity,
    updateModalAndUpdateFormArray
} from "../store/actions/modalActions";
import {connect} from "react-redux";
import DatePicker from "../components/form/DatePicker";
import SelectRow from "../components/form/SelectRow";
import {simNaoOptions, tiposRelacaoDependente} from "../config/defaultValues";
import Checkbox from "../components/form/Checkbox";
import AlignContentOnGrid from "../components/util/AlignContentOnGrid";

let Dependente = ({closeModal, visible, handleSubmit, save, saveAndReload, update, updateAndReload, updateFormArray, data, idReload}) => {

    const submit = value => {
        if (updateFormArray) value.id ? update({...value, ...data}, updateFormArray) : save({...value, ...data}, updateFormArray);

        if (idReload) value.id ? updateAndReload({...value, ...data}, idReload) : saveAndReload({...value, ...data}, idReload);
    };

    return (
        <Modal border visible={visible} title={'Adicionar dependente'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={DatePicker} name={'dataNascimento'} label={'Data de Nascimento'}/>
                <Field component={SelectRow} options={simNaoOptions} name={'estrangeiro'} label={'E estrangeiro?'}/>
                <Field component={InputRow} name={'cpf'} label={'Cpf'}/>
                <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                <Field component={SelectRow} name={'relacao'} label={'Relacao'} options={tiposRelacaoDependente}/>
                <AlignContentOnGrid margen style={{marginTop: '2rem'}}>
                    <Field component={Checkbox} name={'incluirParaFinsDeImpostoRenda'} label={'Incluir para fins de imposto de renda'}/>
                </AlignContentOnGrid>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.dependente.value,
    visible: state.modal.dependente.visible,
    data: state.modal.dependente.data,
    idReload: state.modal.dependente.idReload,
    updateFormArray: state.modal.dependente.updateFormArray,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('dependente')),
    save: (value, updateFormArray) => dispatch(saveModalAndUpdateFormArray('dependentes', value, 'dependente', updateFormArray,)),
    update: (value, updateFormArray) => dispatch(updateModalAndUpdateFormArray('dependentes', value, 'dependente', updateFormArray)),
    saveAndReload: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('dependentes', value, 'dependente', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    },)),
    updateAndReload: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('dependentes', value, 'dependente', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
});

Dependente = reduxForm({form: 'dependente', enableReinitialize: true})(Dependente);

export default connect(mapStateToProps, mapDispatchToProps)(Dependente)
