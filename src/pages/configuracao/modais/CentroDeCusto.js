import Modal from "../../../components/Modal";
import {Field, reduxForm} from "redux-form";
import InputRow from "../../../components/form/InputRow";
import {connect} from "react-redux";
import {changeModalVisible} from "../../../store/actions/modalActions";
import React from "react";
import {save, update} from "../../../store/actions/serverActions";
import Buttom from "../../../components/Buttom";

let CentroDeCusto = props => {
    const {closeModal, visible, handleSubmit, save, update} = props
    const submit = value => value.id ? update(value) : save(value)
    return (
        <Modal border visible={visible} title={'Adicionar centro de custo'}>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </form>
        </Modal>
    )

}

const mapStateToProps = ({modal}) => ({
    initialValues: modal.centroDeCusto.value
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(changeModalVisible('centroDeCusto', false)),
    save: value => dispatch(save('centroDeCustos', value, {modal: 'centroDeCusto'})),
    update: value => dispatch(update('centroDeCustos', value, {modal: 'centroDeCusto', list: true})),
})

CentroDeCusto = reduxForm({form: 'centroDeCusto', enableReinitialize: true})(CentroDeCusto)

export default connect(mapStateToProps, mapDispatchToProps)(CentroDeCusto)

