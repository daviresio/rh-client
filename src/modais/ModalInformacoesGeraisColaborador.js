import React, {useEffect} from 'react';
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
import {loadList} from "../store/actions/serverActions";
import {getValue} from "../util/metodosUteis";

let ModalInformacoesGeraisColaborador = ({closeModal, visible, handleSubmit, update, data, idReload, coresRacas, sexos, estadosCivis, loadData}) => {

    const submit = value => update({...value, ...data}, idReload);

    useEffect(() => {
        loadData('cores-racas', 'coresRacas');
        loadData('sexos', 'sexos');
        loadData('estados-civis', 'estadosCivis')
    }, []);

    return (
        <Modal border visible={visible} title={'Informacoes gerais'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={DatePicker} name={'dataAdmissao'} label={'Data da admissao'}/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <Field component={InputRow} name={'celular'} label={'Celular'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <Field component={InputRow} name={'nacionalidade'} label={'Nacionalidade'}/>
                <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'} options={coresRacas}/>
                <Field component={SelectRow} name={'naturalEstado'} label={'Natural do estado'} options={getEstados()}/>
                <Field component={InputRow} name={'naturalCidade'} label={'Natural da cidade'}/>
                <Field component={SelectRow} name={'sexo'} label={'Sexo'} options={sexos}/>
                <Field component={SelectRow} name={'vinculo.id'} label={'Vinculo'}/>
                <Field component={SelectRow} name={'sindicato.id'} label={'Sindicato'}/>
                <Field component={SelectRow} name={'formaPagamento.id'} label={'Forma de pagamento'}/>
                <Field component={InputRow} name={'matricula'} label={'Matricula'}/>
                <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'} options={estadosCivis}/>
                <Field component={DatePicker} name={'dataNascimento'} label={'Data de nascimento'}/>
                <Field component={SelectRow} name={'primeiroEmprego'} label={'Primeiro emprego?'} options={simNaoOptions}/>
                <Field component={SelectRow} name={'pagouContribSindicalAnoAdmissao'} label={'Colaborador ja pagou contribuicao social no ano da admissao?'} options={simNaoOptions}/>
                <Field component={DatePicker} name={'dataExameAdmissional'} label={'Data do exame admissional\n'}/>
                <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                <Field component={InputRow} name={'nomePai'} label={'Nome do pai'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

ModalInformacoesGeraisColaborador = reduxForm({form: 'informacoesGeraisColaborador', enableReinitialize: true})(ModalInformacoesGeraisColaborador);

const mapStateToProps = state => {
    return {
        initialValues: {
            ...state.modal.informacoesGeraisColaborador.value,
            corRaca: getValue('corRaca.id', state.modal.informacoesGeraisColaborador.value),
            sexo: getValue('sexo.id', state.modal.informacoesGeraisColaborador.value),
            estadoCivil: getValue('estadoCivil.id', state.modal.informacoesGeraisColaborador.value),
        },
        visible: state.modal.informacoesGeraisColaborador.visible,
        idReload: state.modal.informacoesGeraisColaborador.idReload,
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('informacoesGeraisColaborador')),
    update: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('colaboradores', value, 'informacoesGeraisColaborador', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ModalInformacoesGeraisColaborador);
