import React from 'react';
import {connect} from "react-redux";
import {closeModal, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import {getEstados} from "../config/localidades";
import DatePicker from "../components/form/DatePicker";
import {simNaoOptions} from "../config/defaultValues";

let ModalDocumentoColaborador = ({closeModal, visible, handleSubmit, update, idReload, data}) => {

    const submit = value => update({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={'Documentos pessoais'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'cpf'} label={'CPF'}/>
                <Field component={InputRow} name={'rg'} label={'RG'}/>
                <Field component={DatePicker} name={'dataExpedicaoRg'} label={'Data de expedicao do RG'}/>
                <Field component={InputRow} name={'orgaoEmissorRg'} label={'Orgao emissor do RG'}/>
                <Field component={SelectRow} name={'ufEmissorRg'} label={'Uf emissor do RG'} options={getEstados()}/>
                <Field component={InputRow} name={'cnh'} label={'CNH'}/>
                <Field component={InputRow} name={'categoriaCnh'} label={'Categoria da CNH'}/>
                <Field component={DatePicker} name={'dataExpedicaoCnh'} label={'Data de expedicao da CNH'}/>
                <Field component={DatePicker} name={'dataValidadeCnh'} label={'Data de validade da CNH'}/>
                <Field component={InputRow} name={'carteiraTrabalho'} label={'Carteira de Trabalho'}/>
                <Field component={InputRow} name={'nSerieCtps'} label={'n de Serie da CTPS'}/>
                <Field component={DatePicker} name={'dataEmissaoCtps'} label={'Data de emissao da CTPS'}/>
                <Field component={SelectRow} name={'ufCtps'} label={'UF da CTPS'} options={getEstados()}/>
                <Field component={InputRow} name={'pis'} label={'PIS'}/>
                <Field component={InputRow} name={'tituloEleitor'} label={'Titulo de eleitor'}/>
                <Field component={InputRow} name={'zonaEleitoral'} label={'Zona eleitoral'}/>
                <Field component={InputRow} name={'secaoEleitoral'} label={'Secao eleitoral'}/>
                <Field component={SelectRow} name={'estrangeiro'} label={'E estrangeiro?'} options={simNaoOptions}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

ModalDocumentoColaborador = reduxForm({form: 'documentoColaborador', enableReinitialize: true})(ModalDocumentoColaborador);

const mapStateToProps = state => {
    return {
        initialValues: state.modal.documentoColaborador.value,
        visible: state.modal.documentoColaborador.visible,
        idReload: state.modal.documentoColaborador.idReload,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('documentoColaborador')),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('colaboradores', value, 'documentoColaborador', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
});


export default connect(mapStateToProps, mapDispatchToProps)(ModalDocumentoColaborador);
