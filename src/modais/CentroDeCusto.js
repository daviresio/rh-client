import Modal from "../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../components/form/InputRow";
import {connect} from "react-redux";
import {closeModal, saveModal, saveModalAndUpdateDropdown, updateModalAndList} from "../store/actions/modalActions";
import React from "react";
import Buttom from "../components/Buttom";

let CentroDeCusto = ({closeModal, visible, handleSubmit, save, update, saveAndUpdateDropdown, updateDropdown}) => {

    const submit = value => value.id ? update(value) : updateDropdown ? saveAndUpdateDropdown(value, updateDropdown) : save(value);

    return (
        <Modal border visible={visible} title={'Adicionar centro de custo'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

};

const mapStateToProps = state => ({
    initialValues: state.modal.centroDeCusto.value,
    visible: state.modal.centroDeCusto.visible,
    updateDropdown: state.modal.centroDeCusto.updateDropdown,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('centroDeCusto')),
    saveAndUpdateDropdown: (value, updateDropdown) => dispatch(saveModalAndUpdateDropdown('centrodecustos', value, 'centroDeCusto', updateDropdown)),
    save: value => dispatch(saveModal('centrodecustos', value, 'centroDeCusto', 'centroDeCustos')),
    update: value => dispatch(updateModalAndList('centrodecustos', value, 'centroDeCusto', 'centroDeCustos')),
});

CentroDeCusto = reduxForm({form: 'centroDeCusto', enableReinitialize: true})(CentroDeCusto);

export default connect(mapStateToProps, mapDispatchToProps)(CentroDeCusto)

