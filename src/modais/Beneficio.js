import React, {useEffect} from 'react';
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import {closeModal, saveModalAndReloadOtherEntity, updateModalAndReloadOtherEntity,} from "../store/actions/modalActions";
import {connect} from "react-redux";
import SelectRow from "../components/form/SelectRow";
import {loadList} from "../store/actions/serverActions";
import TableManual from "../components/table/TableManual";
import {Field, FieldArray, formValueSelector, reduxForm} from "redux-form";
import {simNaoOptions} from "../config/defaultValues";
import Select from "../components/form/Select";
import {getValue} from "../util/metodosUteis";
import Input from "../components/form/Input";
import Message from "../components/util/Message";

const ShowLabelValue = ({input}) => {
    console.log(input.value)
    return <div className={'valor'}>{typeof input.value === 'object' ? input.value.nome : input.value}</div>;
}

let Beneficio = ({closeModal, visible, saveAndReload, updateAndReload, data, idReload, loadData, beneficios, colaborador, handleSubmit, beneficioSelecionado}) => {

    const renderData = ({fields}) =>
        fields.map((field, i) => {

            return fields.get(i).id === beneficioSelecionado ?

                <div key={i}>
                    <div className={'conteudo-chave-valor'} style={{marginTop: '2rem'}}>
                        <div className={'campo'}>Operador</div>
                        <Field name={`${field}.operador`} component={ShowLabelValue}/>
                    </div>

                    <div className={'conteudo-chave-valor'} style={{marginTop: '2rem'}}>
                        <div className={'campo'}>Data de corte</div>
                        <Field name={`${field}.dataDeCorte`} component={ShowLabelValue}/>
                    </div>

                    <div className={'conteudo-chave-valor'} style={{marginTop: '2rem'}}>
                        <div className={'campo'}>Credito</div>
                        <Field name={`${field}.tipoCalculoSaldo`} component={ShowLabelValue}/>
                    </div>
                    <TableManual tableHeader={
                        <tr>
                            <th>Nome</th>
                            <th>Custo colaborador</th>
                            <th>Custo empresa</th>
                            <th style={{width: '12rem'}}>Vincular</th>
                        </tr>
                    }
                                 tableBody={
                                     <tr>
                                         <td><Field name={`${field}.colaborador.nome`} component={ShowLabelValue}/></td>
                                         <td>{'Baseado na configuracao do beneficio'}</td>
                                         <td><Field name={`${field}.custoEmpresa`} component={Input}/></td>
                                         <td><Field name={`${field}.vinculado`} component={Select} options={simNaoOptions} className={''}/></td>
                                     </tr>
                                 }
                    />
                </div> : null
        });

    useEffect(() => {
        loadData('beneficios')
    }, []);

    const submit = value => {
        const v = value.beneficios.map(v => ({
            beneficio: v.id,
            colaborador: v.colaborador,
            vinculado: v.vinculado,
            custoEmpresa: v.custoEmpresa,
            custoColaborador: v.custoColaborador
        }))
            .filter(x => x.vinculado);
        if (v.length === 0) {
            closeModal();
            return
        }
        value.id ? updateAndReload(v, idReload) : saveAndReload(v, idReload);
    };

    const getBeneficios = () => {
        if (colaborador && colaborador.beneficios && colaborador.beneficios.length) {
            let arr = [];
            beneficios.forEach(v => {
                const index = colaborador.beneficios.findIndex(x => x.id === v.id);
                if (index === -1) arr.push(colaborador.beneficios[index])
            });
            return arr
        }
        return beneficios
    };

    return (
        <Modal border visible={visible} title={'Beneficios'} close={closeModal}>
            {getBeneficios().length === 0 && (data == null || data.id === 0) ?
                <>
                    <Message color={'orange'}
                             text={beneficios.length === 0 ? 'Voce nao tem nenhum beneficio cadastrado' : 'Este colaborador ja tem adicionado todos os seus beneficios'}/>
                    <div className={'modal-footer'} style={{justifyContent: 'flex-start'}}>
                        <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Fechar'} onClick={closeModal}/>
                    </div>
                </>
                :
                <form onSubmit={handleSubmit(submit)}>

                    <Field component={SelectRow} name={'beneficio'} label={'Beneficio'} options={getBeneficios()} required/>

                    <FieldArray name={'beneficios'} component={renderData}/>

                    <div className={'modal-footer'}>
                        <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                        <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                    </div>
                </form>}
        </Modal>
    )
};

Beneficio = reduxForm({form: 'beneficioModal', enableReinitialize: true})(Beneficio);

const mapStateToProps = state => {
    const selector = formValueSelector('beneficioModal');
    return {
        visible: state.modal.beneficio.visible,
        data: state.modal.beneficio.data,
        idReload: state.modal.beneficio.idReload,
        updateFormArray: state.modal.beneficio.updateFormArray,
        beneficios: state.serverValues.beneficios,
        colaborador: state.serverValues.colaborador,

        initialValues: {
            beneficios: state.serverValues.beneficios.map(v => ({...v, vinculado: false, custoEmpresa: 0, custoColaborador: 0, colaborador: state.serverValues.colaborador.id})),
            beneficio: getValue('id', state.serverValues.beneficios[0])
        },
        beneficioSelecionado: selector(state, 'beneficio'),
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('beneficio')),
    saveAndReload: (value, idReload) => dispatch(saveModalAndReloadOtherEntity('colaboradores-beneficios', value, 'beneficio', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    },)),
    updateAndReload: (value, idReload) => dispatch(updateModalAndReloadOtherEntity('colaboradores-beneficios', value, 'beneficio', {
        entity: 'colaboradores',
        id: idReload,
        target: 'colaborador'
    })),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Beneficio)
