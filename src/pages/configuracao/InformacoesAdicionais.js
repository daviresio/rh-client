import React, {useEffect} from 'react';
import CardBorda from "../../components/card/CardBorda";
import Buttom from "../../components/Buttom";
import Edit from "../../components/util/Edit";
import Delete from "../../components/util/Delete";
import {connect} from "react-redux";
import {changeModalVisible} from "../../store/actions/modalActions";
import Cargo from "../../modais/Cargo";
import Departamento from "../../modais/Departamento";
import CentroDeCusto from "../../modais/CentroDeCusto";
import {loadList, remove} from "../../store/actions/serverActions";

const InformacoesAdicionais = props => {

    const {cargo, departamento, centroDeCusto} = props.modal
    const {openModal, loadData, remove} = props
    const {cargos, departamentos, centroDeCustos} = props.serverValues

    useEffect(() => {
        loadData('departamentos')
        loadData('cargos')
        loadData('centroDeCustos')
    }, [])

    const renderItem = (item, modal) => item.length ?
        item.map((x, i) =>
            <div key={x.id} className={'item'}>
                <span className={'nome'}>{x.nome}</span>
                <div className={'options'}>
                    <Edit onClick={() => openModal(modal, x)}/>
                    <Delete onClick={() => remove(modal + 's', x.id)}/>
                </div>
            </div>) : null

    return (
        <>
            <Cargo visible={cargo.visible}/>
            <Departamento visible={departamento.visible}/>
            <CentroDeCusto visible={centroDeCusto.visible}/>

            <div className={'configuracao-informacoes-adicionais'}>
                <CardBorda title={'Cargos'} color={'blue'}>
                    {renderItem(cargos, 'cargo')}
                    <Buttom color={'green'} full label={'Adicionar cargo'} onClick={() => openModal('cargo')}/>
                </CardBorda>
                <CardBorda title={'Departamentos'} color={'blue'}>
                    {renderItem(departamentos, 'departamento')}
                    <Buttom color={'green'} full label={'Adicionar departamento'} onClick={() => openModal('departamento')}/>
                </CardBorda>
                <CardBorda title={'Centro de custo'} color={'blue'}>
                    {renderItem(centroDeCustos, 'centroDeCusto')}
                    <Buttom color={'green'} full label={'Adicionar centro de custo'} onClick={() => openModal('centroDeCusto')}/>
                </CardBorda>
            </div>
        </>
    );
};

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
    loadData: entity => dispatch(loadList(entity)),
    remove: (entity, value) => dispatch(remove(entity, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(InformacoesAdicionais);



