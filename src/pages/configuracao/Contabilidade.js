import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";
import Contador from "../../modais/Contador";
import {connect} from "react-redux";
import {changeModalVisible} from "../../store/actions/modalActions";

const Contabilidade = ({modal, openModal}) => {
    return (
        <>
            <Contador visible={modal.contador.visible}/>
        <CardSimples start>
            <div className={'configuracao-contador-title'}>{'Contador'}</div>
            <Buttom color={'green'} label={'Adicionar contador'} onClick={()=> openModal('contador')}/>
        </CardSimples>
            </>
    );
};

const mapStateToProps = state => ({
    modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contabilidade);
