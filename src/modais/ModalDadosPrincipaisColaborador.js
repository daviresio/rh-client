import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {loadList, uploadFile} from "../store/actions/serverActions";
import {Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import {MAX_IMAGE_SIZE} from "../config/defaultValues";
import UploadPhoto from "../components/UploadPhoto";
import {getValue} from "../util/metodosUteis";

let ModalDadosPrincipaisColaborador = ({closeModal, visible, handleSubmit, update, idReload, data, uploadFile, foto, loadData, serverValues}) => {
    const {departamentos, centrodecustos} = serverValues;

    const submit = value => update({...value, ...data}, idReload);

    useEffect(() => {
        loadData('departamentos');
        loadData('centrodecustos')
    }, []);

    const getValues = v => v ? v : [];

    const prepareToUpload = event => {
        const type = event.target.files[0].type;
        const reader = new FileReader();
        reader.onload = e => {
            if (!e.target.result.includes('data:image/')) {
                return alert('Selecione um arquivo que seja uma imagem')
            }
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'dadosPrincipaisColaborador', campo: 'foto'}, foto)
        };
        reader.readAsDataURL(event.target.files[0])
    };

    return (
        <Modal border visible={visible} title={'Documentos pessoais'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <UploadPhoto label={'Foto do perfil'} onChange={prepareToUpload} image={foto}/>
                <Field component={InputRow} name={'nome'} label={'Nome completo'} required/>
                <Field component={SelectRow} name={'departamento'} label={'Departamento'} options={getValues(departamentos)}/>
                <Field component={SelectRow} name={'centroDeCusto'} label={'Centro de custo'} options={getValues(centrodecustos)}/>
                <Field component={SelectRow} name={'gestor'} label={'Gestor'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

ModalDadosPrincipaisColaborador = reduxForm({form: 'dadosPrincipaisColaborador', enableReinitialize: true})(ModalDadosPrincipaisColaborador);

const mapStateToProps = state => {
    const selector = formValueSelector('dadosPrincipaisColaborador');
    const colaborador = state.modal.dadosPrincipaisColaborador.value;
    return {
        initialValues: {
            id: getValue('id', colaborador),
            nome: getValue('nome', colaborador),
            departamento: getValue('departamento.id', colaborador),
            centroDeCusto: getValue('centroDeCusto.id', colaborador),
            foto: getValue('foto', colaborador),
        },
        visible: state.modal.dadosPrincipaisColaborador.visible,
        idReload: state.modal.dadosPrincipaisColaborador.idReload,
        foto: selector(state, 'foto'),
        serverValues: state.serverValues
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('dadosPrincipaisColaborador')),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('colaboradores', value, 'dadosPrincipaisColaborador', {
        entity: 'colaboradores',
        target: 'colaborador',
        id: idReload
    })),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form, urlExistente)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ModalDadosPrincipaisColaborador);
