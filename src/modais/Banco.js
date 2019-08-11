import React from 'react';
import {connect} from "react-redux";
import {changeModalVisible} from "../store/actions/modalActions";
import {save, update, uploadFile} from "../store/actions/serverActions";
import {change, Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import Checkbox from "../components/form/Checkbox";
import CardSimples from "../components/card/CardSimples";
import {downloadFile} from "../util/metodosUteis";
import Delete from "../components/util/Delete";
import UploadFile from "../components/UploadFile";
import {MAX_IMAGE_SIZE} from "../config/defaultValues";
import styled from "styled-components";

let Banco = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown, formValues, uploadFile, reload, data} = props;

    const submit = value => value.id ? update({...value, ...data}, reload) : save({...value, ...data}, reload, updateDropdown);

    const uploadComprovanteBanco = event => {
        const type = event.target.files[0].type;
        const reader = new FileReader();
        reader.onload = e => {
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'banco', campo: 'comprovante'})
        };
        reader.readAsDataURL(event.target.files[0])
    };

    return (
        <Modal border visible={visible} title={'Informacoes bancarias'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'banco'} label={'Banco'}/>
                <Field component={InputRow} name={'agencia'} label={'Agencia'}/>
                <Field component={InputRow} name={'conta'} label={'Conta'}/>
                <CenterButton>
                    <Field component={Checkbox} name={'poupanca'} label={'E poupanca?'}/>
                </CenterButton>
                {formValues ?
                    <CardSimples>
                        <div className={'item-colaborador-documento'}>
                            <span>{'Comprovante'}</span>
                            <span className={'link'}
                                  onClick={() => downloadFile(formValues)}>{formValues}</span>
                            <Delete onClick={() => props.dispatch(change('banco', 'comprovante', null))}/>
                        </div>
                    </CardSimples>
                    : <CenterButton>
                        <UploadFile label={'Adicionar comprovante'} onChange={uploadComprovanteBanco}/>
                    </CenterButton>
                }
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

Banco = reduxForm({form: 'banco', enableReinitialize: true})(Banco);

const mapStateToProps = state => {
    const selector = formValueSelector('banco');
    return {
        initialValues: state.modal.banco.value,
        formValues: selector(state, 'comprovante')
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('banco', false)),
    save: (value, reload, updateDropdown ) => dispatch(save('bancos', value, {modal: 'banco', updateDropdown, reload})),
    update: (value, reload) => dispatch(update('bancos', value, {modal: 'banco', reload})),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Banco);


const CenterButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;
