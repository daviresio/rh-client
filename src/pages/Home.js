import React, {useEffect} from 'react';
import Page from "../layout/Page";
import CardHome from "../components/card/CardHome";
import Calendar from "../components/Calendar";
import CardBorda from "../components/card/CardBorda";
import Buttom from "../components/Buttom";
import Chart from "../components/Chart";
import CardSimples from "../components/card/CardSimples";
import {connect} from "react-redux";
import {loadList} from "../store/actions/serverActions";

const Home = ({loadData, qtd}) => {

    useEffect(()=> {
        loadData('colaboradores/quantidade', 'qtdColaboradores')
    }, [])

    return (
        <Page title={'Painel'}>
            <div className={'home-resumos'}>
                <CardHome title={'Admissoes / Inclusoes pendentes'} qtd={qtd.admissaoPendente || 0} color={'black'}
                          button={'Incluir novo colaborador'} route={'/colaboradores/cadastro'}
                          message={'Colaboradores em admissao'}/>
                <CardHome title={'Na ativa'} qtd={qtd.ativo || 0} color={'green'} button={'Ir para colaboradores'} route={'/colaboradores'}
                          message={'Colaboradores ativos'}/>
                <CardHome title={'Ferias / Faltas / Afastamentos'} qtd={0} color={'orange'} button={'Gerenciar ferias'}
                          message={'Colaboradores nesse estagio'} route={'/ferias'}/>
            </div>
            <div className={'home-center'}>
                <CardSimples style={{marginTop: '2rem'}}>
                <Chart />
                </CardSimples>

            <CardBorda title={'Lembretes'} color={'dark'}>
                <div className={'content'}>

                </div>
                <div className={'footer'}>
                    <Buttom color={'blue'} label={'Editar lembretes'}/>
                    <Buttom color={'green'} label={'Novo lembrete'}/>
                </div>

            </CardBorda>
            </div>
            <Calendar/>
        </Page>
    );
};

const mapStateToProps = state => ({
    qtd: state.serverValues.qtdColaboradores,
})
const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
