import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity} from "../store/actions/modalActions";
import {loadList} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import {getValue} from "../util/metodosUteis";
import Input from "../components/form/Input";
import TableManual from "../components/table/TableManual";

let EditarValorBeneficio = ({closeModal, visible, handleSubmit, saveAndReload, updateAndReload, idReload, loadData, data, nome}) => {

    useEffect(() => {
    }, []);

    const submit = value => value.id ? updateAndReload({...value, ...data}, idReload) : saveAndReload({...value, ...data}, idReload);

    return (
        <Modal border visible={visible} title={`Editar valor do beneficio para ${nome}`} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
                <TableManual tableHeader={
                    <tr>
                        <th/>
                        <th>Colaborador</th>
                        <th>Empresa</th>
                    </tr>
                }
                             tableBody={
                                 <tr>
                                     <td>Custo</td>
                                     <td>{`Sera descontado 4,00 (% do salario)`}</td>
                                     <td><Field name={'custoEmpresa'} component={Input}/></td>
                                 </tr>
                             }
                />

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>

            </form>
        </Modal>
    )
};

EditarValorBeneficio = reduxForm({form: 'editarValorBeneficio', enableReinitialize: true})(EditarValorBeneficio);

const mapStateToProps = state => ({
    initialValues: {
        id: getValue('ColaboradorBeneficio.id', state.modal.editarValorBeneficio.value),
        custoEmpresa: getValue('ColaboradorBeneficio.custoEmpresa', state.modal.editarValorBeneficio.value),
        custoColaborador: getValue('ColaboradorBeneficio.custoColaborador', state.modal.editarValorBeneficio.value),
    },
    nome: getValue('nome', state.modal.editarValorBeneficio.value),
    visible: state.modal.editarValorBeneficio.visible,
    idReload: state.modal.editarValorBeneficio.idReload,
    data: state.modal.editarValorBeneficio.data,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('editarValorBeneficio')),
    saveAndReload: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('colaboradores-beneficios', value, 'editarValorBeneficio', {
        entity: 'beneficios',
        id: idReload,
        target: 'beneficio'
    },)),
    updateAndReload: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('colaboradores-beneficios', value, 'editarValorBeneficio', {
        entity: 'beneficios',
        id: idReload,
        target: 'beneficio'
    })),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarValorBeneficio);
