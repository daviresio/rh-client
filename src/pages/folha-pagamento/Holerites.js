import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Table from "../../components/Table";
import Select from "../../components/form/Select";
import {connect} from "react-redux";
import LancamentoHoleriteModal from "../../modais/LancamentoHoleriteModal";
import {changeModalVisible} from "../../store/actions/modalActions";

const Holerites = ({modal, openModal}) => {

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Buttom onClick={()=>openModal('lancamentoHolerite')} color={'green'} label={'Criar novo mes'}/>
            </div>
            <CardBorda title={`Holerites`}>
                <div className={'holerites-filtro'}>
                    <h3>Filtrar por: </h3>
                    <Select label={'Ano'}/>
                    <Select label={'Mes'}/>
                    <Select label={'Tipo'}/>
                </div>
                <Table header={['Mes', 'Ano', 'Tipo', 'Acoes']}/>

            </CardBorda>

            <LancamentoHoleriteModal visible={modal.lancamentoHolerite.visible} />
        </>
    );
};
const mapStateToProps = state => ({
    folhaPagamento: state.folhaPagamento,
    modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(changeModalVisible(modal, true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Holerites);
