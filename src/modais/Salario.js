import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {loadList} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import DatePicker from "../components/form/DatePicker";
import {motivosAlteracaoSalario} from "../config/defaultValues";
import TextAreaRow from "../components/form/TextAreaRow";
import Checkbox from "../components/form/Checkbox";
import AlignContentOnGrid from "../components/util/AlignContentOnGrid";

let Salario = ({closeModal, visible, handleSubmit, save, update, idReload, serverValues, loadData, data}) => {
    const {cargos, departamentos, vinculos} = serverValues;

    useEffect(() => {
        loadData('cargos');
        loadData('departamentos');
        loadData('vinculos')
    }, []);

    const submit = value => value.id ? update({...value, ...data}, idReload) : save({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Definir vinculo e salario'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className={'title'}>Período</h2>
                <Field component={DatePicker} name={'dataInicial'} label={'Valido a partir de'} required/>
                <Field component={DatePicker} name={'dataFinal'} label={'Válido até: (se for a última alteração, deixar este campo em branco)'}/>
                <h2 className={'title'} style={{marginTop: '2rem', marginBottom: '2rem'}}>Informacoes de registro</h2>
                <Field component={SelectRow} name={'cargo'} label={'Cargo'} options={cargos}/>
                <Field component={SelectRow} name={'departamento'} label={'Departamento'} options={departamentos}/>
                <Field component={SelectRow} name={'vinculo'} label={'Vinculo'} options={vinculos}/>
                <Field component={InputRow} name={'salario'} label={'Salário (R$)'}/>
                <Field component={SelectRow} name={'motivo'} label={'Motivo'} options={motivosAlteracaoSalario}/>
                <Field component={TextAreaRow} name={'justificativa'} label={'Justificativa'}/>
                <AlignContentOnGrid style={{marginBottom: '2rem', marginLeft: '1.5rem'}}>
                    <Field component={Checkbox} name={'atualizar'} label={'Atualizar funcionario?'} type={'checkbox'}/>
                </AlignContentOnGrid>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Salario = reduxForm({form: 'salario', enableReinitialize: true})(Salario);

const mapStateToProps = state => ({
    initialValues: state.modal.salario.value,
    visible: state.modal.salario.visible,
    idReload: state.modal.salario.idReload,
    data: state.modal.salario.data,
    serverValues: state.serverValues,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('salario')),
    save: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('salarios', value, 'salario', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('salarios', value, 'salario', {entity: 'colaboradores', id: idReload, target: 'colaborador'})),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Salario);
