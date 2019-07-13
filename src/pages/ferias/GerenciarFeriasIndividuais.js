import React, {useEffect} from 'react';
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import Table from "../../components/table/Table";
import {loadList} from "../../store/actions/serverActions";
import {formateDateFull} from "../../util/metodosUteis";
import Edit from "../../components/util/Edit";
import Checkbox from "../../components/form/Checkbox";
import {changeModalVisible} from "../../store/actions/modalActions";
import PeriodoAquisitivoSaldoFerias from "../../modais/PeriodoAquisitivoSaldoFerias";

const GerenciarFeriasIndividuais = ({changeRoute, colaboradores, loadData, openModal, modal}) => {

    useEffect(()=> {
        loadData('colaboradores')

    }, [])

    return (
        <>
            <PeriodoAquisitivoSaldoFerias visible={modal.periodoAquisitivoSaldoFerias.visible}/>
        <Page title={'Gerenciar ferias por colaborador'}>
            <Buttom color={'gray'} label={'Voltar'} onClick={()=> changeRoute('/ferias')}/>

            <CardSimples>
                <Table header={['Nome', 'Inicio periodo aquisitivo atual', 'Saldo de ferias', 'Controle de ferias', 'Acoes', 'Faltas injustificadas']}
                       keys={['nome', 'inicioPeriodoAquisitivoAtual', 'saldoFerias', 'controleFerias', 'acoes', 'faltasInjustificadas']}
                       data={colaboradores && colaboradores.map(v => ({nome: v.nome, inicioPeriodoAquisitivoAtual: formateDateFull(v.dataAdmissao),
                           saldoFerias: '-10', controleFerias: 'Ativo', acoes: <Edit onClick={() => openModal('periodoAquisitivoSaldoFerias')} />, faltasInjustificadas: <Checkbox label={'Descontar'} />}))} />
            </CardSimples>
        </Page>
            </>
    );
};

const mapStateToProps = state => ({
    colaboradores: state.serverValues.colaboradores,
    modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(GerenciarFeriasIndividuais);
