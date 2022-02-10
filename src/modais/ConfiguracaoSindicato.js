import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {closeModal} from "../store/actions/modalActions";
import {
    loadList,
    removeAndReloadWihoutDoMore,
    saveAndReloadWihoutDoMoreAndResetForm,
    search
} from "../store/actions/serverActions";
import {Field, formValueSelector, reduxForm} from "redux-form";
import Modal from "../components/Modal";
import Buttom from "../components/Buttom";
import InputRow from "../components/form/InputRow";
import SelectRow from "../components/form/SelectRow";
import TableManual from "../components/table/TableManual";
import Delete from "../components/util/Delete";
import CenterContent from "../components/util/CenterContent";

let ConfiguracaoSindicato = ({closeModal, visible, handleSubmit, save, idReload, loadData, data, remove, tipoSelected, sindicato, search, tiposAdicionaisSindicato}) => {


    const submit = v => save({...v, ...data}, idReload);

    useEffect(() => {
        if (idReload) search(idReload);
        loadData('tipos-adicionais-sindicatos', 'tiposAdicionaisSindicato')
    }, [idReload]);

    const getValue = v => v && v !== 0 ? v + '%' : '-';

    return (
        <Modal border visible={visible} title={'Configuracao de horas extras e adicionais do sindicato'} close={closeModal}>
            <form onSubmit={handleSubmit(submit)}>

                <Field component={InputRow} name={'nome'} label={'Nome'} required/>
                <Field component={SelectRow} name={'tipo'} label={'Tipo'} options={tiposAdicionaisSindicato} required/>
                {tipoSelected === 1 || tipoSelected === 3 ? <Field component={InputRow} name={'horaExtra'} label={'% de hora extra'} required/> : null}
                {tipoSelected === 2 || tipoSelected === 3 ? <Field component={InputRow} name={'adicional'} label={'% de adicional'} required/> : null}

                <CenterContent>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={closeModal}/>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </CenterContent>
            </form>

            <h2 style={{marginTop: '3rem'}}>Horas extras e adicionais cadastrados</h2>

            <TableManual tableHeader={
                <tr>
                    <th>Nome</th>
                    <th>Hora extra</th>
                    <th>Adicional</th>
                    <th>Acao</th>
                </tr>
            }
                         tableBody={
                             sindicato && sindicato.configuracoes && sindicato.configuracoes.length && sindicato.configuracoes.reverse().map(v =>
                                 <tr key={v.id}>
                                     <td>{v.nome}</td>
                                     <td>{getValue(v.horaExtra)}</td>
                                     <td>{getValue(v.adicional)}</td>
                                     <td><Delete onClick={() => remove('configuracoes-sindicatos', v.id, idReload)}/></td>
                                 </tr>
                             )
                         }
            />
        </Modal>
    )
};

ConfiguracaoSindicato = reduxForm({form: 'configuracaoSindicato', enableReinitialize: true})(ConfiguracaoSindicato);

const mapStateToProps = state => {
    const selector = formValueSelector('configuracaoSindicato');

    return {
        value: state.modal.configuracaoSindicato.value,
        visible: state.modal.configuracaoSindicato.visible,
        idReload: state.modal.configuracaoSindicato.idReload,
        data: state.modal.configuracaoSindicato.data,
        sindicato: state.serverValues.sindicato,
        tipoSelected: selector(state, 'tipo'),
        tiposAdicionaisSindicato: state.serverValues.tiposAdicionaisSindicato,
    }

};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal('configuracaoSindicato')),
    save: (value, idReload) => dispatch(saveAndReloadWihoutDoMoreAndResetForm('configuracoes-sindicatos', value, {
        entity: 'sindicatos',
        value: idReload,
        field: 'sindicato'
    }, 'configuracaoSindicato')),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    remove: (entity, value, idReload) => dispatch(removeAndReloadWihoutDoMore(entity, value, {entity: 'sindicatos', value: idReload, field: 'sindicato'})),
    search: id => dispatch(search('sindicatos', id, 'sindicato')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracaoSindicato);
