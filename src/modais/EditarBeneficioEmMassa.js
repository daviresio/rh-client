import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal, updateModalAndListOtherEntity} from "../store/actions/modalActions";
import {loadList} from "../store/actions/serverActions";
import {Field, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import Input from "../components/form/Input";
import TableManual from "../components/table/TableManual";
import RadioButton from "../components/form/RadioButton";

let EditarBeneficioEmMassa = ({closeModal, visible, handleSubmit, saveAndReload, updateAndReload, idReload, colaboradores}) => {

    useEffect(() => {
    }, []);

    const submit = value => updateAndReload({colaboradores, value}, idReload);

    return (
        <Modal border visible={visible} title={'Editar beneficio em massa'} close={closeModal}>
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

                <Field name={'vinculado'} component={RadioButton} label={'Vincular'}/>
                <Field name={'vinculado'} component={RadioButton} label={'Desvincular'}/>

                <div className={'modal-footer'}>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </div>

            </form>
        </Modal>
    )
};

EditarBeneficioEmMassa = reduxForm({form: 'editarBeneficioEmMassa', enableReinitialize: true})(EditarBeneficioEmMassa);

const mapStateToProps = state => ({
    initialValues: {},
    colaboradores: state.modal.editarBeneficioEmMassa.value,
    visible: state.modal.editarBeneficioEmMassa.visible,
    idReload: state.modal.editarBeneficioEmMassa.idReload,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('editarBeneficioEmMassa')),
    updateAndReload: (value, idReload) => dispatch(updateModalAndListOtherEntity('colaboradores-beneficios/all', value, 'editarBeneficioEmMassa', 'colaboradores')),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarBeneficioEmMassa);
