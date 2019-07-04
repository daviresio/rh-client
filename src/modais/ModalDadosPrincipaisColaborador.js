import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {loadList, update, uploadFile} from "../store/actions/serverActions";
import {Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import {getEstados} from "../config/localidades";
import DatePicker from "../components/form/DatePicker";
import {MAX_IMAGE_SIZE, simNaoOptions, tiposEstadoCivil} from "../config/defaultValues";
import UploadPhoto from "../components/UploadPhoto";
import CardSimples from "../components/card/CardSimples";

let ModalDadosPrincipaisColaborador = props => {
    const {closeModal, visible, handleSubmit, update, reload, data, uploadFile, foto, loadData, serverValues} = props
    const {departamentos, centrodecustos} = serverValues

    const submit = value => update({...value, ...data}, reload)

    useEffect(() => {
        loadData('departamentos')
        loadData('centrodecustos')
    }, [])

    const getValues = v => v? v : []

    const prepareToUpload = event => {
        const type = event.target.files[0].type
        const reader = new FileReader()
        reader.onload = e => {
            if (!e.target.result.includes('data:image/')) {
                return alert('Selecione um arquivo que seja uma imagem')
            }
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'dadosPrincipaisColaborador', campo: 'foto'}, foto)
        }
        reader.readAsDataURL(event.target.files[0])
    }

    return (
        <Modal border visible={visible} title={'Documentos pessoais'}>
            <form onSubmit={handleSubmit(submit)}>
                <UploadPhoto label={'Foto do perfil'} onChange={prepareToUpload} image={foto}/>
                <Field component={InputRow} name={'nome'} label={'Nome completo'} required/>
                <Field component={SelectRow} name={'departamento'} label={'Departamento'} options={getValues(departamentos)}/>
                <Field component={SelectRow} name={'centroDeCusto'} label={'Centro de custo'} options={getValues(centrodecustos)}/>
                <Field component={SelectRow} name={'gestor'} label={'Gestor'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

ModalDadosPrincipaisColaborador = reduxForm({form: 'dadosPrincipaisColaborador', enableReinitialize: true})(ModalDadosPrincipaisColaborador)

const mapStateToProps = state => {
    const selector = formValueSelector('dadosPrincipaisColaborador')
    return {
        initialValues: state.modal.dadosPrincipaisColaborador.value,
        foto: selector(state, 'foto'),
        serverValues: state.serverValues
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('dadosPrincipaisColaborador', false)),
    update: (value, reload) => dispatch(update('colaboradores', value, {modal: 'dadosPrincipaisColaborador', reload})),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form, urlExistente)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalDadosPrincipaisColaborador);
