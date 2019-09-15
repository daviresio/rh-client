import React from 'react';
import {connect} from "react-redux";
import {closeModal} from "../store/actions/modalActions";
import {save, update} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import SelectRow from "../components/form/SelectRow";
import {simNaoOptions} from "../config/defaultValues";

let ConfiguracaoFolha = props => {
    const {closeModal, visible, handleSubmit, save, update, updateDropdown} = props;

    const submit = value => value.id ? update(value) : save(value, updateDropdown);

    return (
        <Modal border visible={visible} title={'Editar configuracoes de folha'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={SelectRow} name={'incluirNoFechamento'} label={'Incluir no fechamento'} options={simNaoOptions} />
                <Field component={SelectRow} name={'isencaoDeInss'} label={'Isencao de INSS'} options={simNaoOptions} />
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )
};

const mapStateToProps = state => ({
    initialValues: state.modal.configuracaoFolha.value,
    visible: state.modal.configuracaoFolha.visible,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('configuracaoFolha')),
    save: (value, updateDropdown) => dispatch(save('folhas', value, {modal: 'configuracaoFolha', updateDropdown})),
    update: value => dispatch(update('folhas', value, {modal: 'configuracaoFolha', list: true})),
});

ConfiguracaoFolha = reduxForm({form: 'configuracaoFolha', enableReinitialize: true})(ConfiguracaoFolha);

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracaoFolha);
