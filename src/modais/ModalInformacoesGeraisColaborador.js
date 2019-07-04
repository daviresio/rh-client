import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import {getEstados} from "../config/localidades";
import DatePicker from "../components/form/DatePicker";
import {simNaoOptions, tiposCorRaca, tiposEstadoCivil, tiposSexo} from "../config/defaultValues";

let ModalInformacoesGeraisColaborador = props => {
    const {closeModal, visible, handleSubmit, update, reload, data} = props

    const submit = value => update({...value, ...data}, reload)

    return (
        <Modal border visible={visible} title={'Informacoes gerais'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={DatePicker} name={'dataAdmissao'} label={'Data da admissao'}/>
                <Field component={InputRow} name={'email'} label={'Email'}/>
                <Field component={InputRow} name={'celular'} label={'Celular'}/>
                <Field component={InputRow} name={'telefone'} label={'Telefone'}/>
                <Field component={InputRow} name={'nacionalidade'} label={'Nacionalidade'}/>
                <Field component={SelectRow} name={'corRaca'} label={'Cor/Raca'} options={tiposCorRaca}/>
                <Field component={SelectRow} name={'naturalEstado'} label={'Natural do estado'} options={getEstados()}/>
                <Field component={InputRow} name={'naturalCidade'} label={'Natural da cidade'}/>
                <Field component={SelectRow} name={'sexo'} label={'Sexo'} options={tiposSexo}/>
                <Field component={SelectRow} name={'vinculo.id'} label={'Vinculo'}/>
                <Field component={SelectRow} name={'sindicato.id'} label={'Sindicato'}/>
                <Field component={SelectRow} name={'formaPagamento.id'} label={'Forma de pagamento'}/>
                <Field component={InputRow} name={'matricula'} label={'Matricula'}/>
                <Field component={SelectRow} name={'estadoCivil'} label={'Estado civil'} options={tiposEstadoCivil}/>
                <Field component={DatePicker} name={'dataNascimento'} label={'Data de nascimento'}/>
                <Field component={SelectRow} name={'primeiroEmprego'} label={'Primeiro emprego?'} options={simNaoOptions}/>
                <Field component={SelectRow} name={'pagouContribSindicalAnoAdmissao'} label={'Colaborador ja pagou contribuicao social no ano da admissao?'} options={simNaoOptions}/>
                <Field component={DatePicker} name={'dataExameAdmissional'} label={'Data do exame admissional\n'}/>
                <Field component={InputRow} name={'nomeMae'} label={'Nome da mae'}/>
                <Field component={InputRow} name={'nomePai'} label={'Nome do pai'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

ModalInformacoesGeraisColaborador = reduxForm({form: 'informacoesGeraisColaborador', enableReinitialize: true})(ModalInformacoesGeraisColaborador)

const mapStateToProps = state => {
    return {
        initialValues: state.modal.informacoesGeraisColaborador.value,
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('informacoesGeraisColaborador', false)),
    update: (value, reload) => dispatch(update('colaboradores', value, {modal: 'informacoesGeraisColaborador', reload})),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalInformacoesGeraisColaborador);
