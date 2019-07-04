import React from 'react';
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import Table from "../../components/table/Table";

const GerenciarFeriasIndividuais = ({changeRoute}) => {
    return (
        <Page title={'Gerenciar ferias por colaborador'}>
            <Buttom color={'gray'} label={'Voltar'} onClick={()=> changeRoute('/ferias')}/>

            <CardSimples>
                <Table header={['Nome', 'Inicio periodo aquisitivo atual', 'Saldo de ferias', 'Controle de ferias', 'Acoes', 'Faltas injustificadas']}
                       keys={['nome', 'inicioPeriodoAquisitivoAtual', 'saldoFerias', 'controleFerias', 'acoes', 'faltasInjustificadas']} data={[]} />
            </CardSimples>
        </Page>
    );
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
})


export default connect(mapStateToProps, mapDispatchToProps)(GerenciarFeriasIndividuais);
