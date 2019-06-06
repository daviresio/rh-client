import React from 'react';
import Page from "../layout/Page";
import CardHome from "../components/card/CardHome";
import Calendar from "../components/Calendar";
import CardBorda from "../components/card/CardBorda";
import Buttom from "../components/Buttom";
import Chart from "../components/Chart";
import CardSimples from "../components/card/CardSimples";

const Home = () => {



    return (
        <Page title={'Painel'}>
            <div className={'home-resumos'}>
                <CardHome title={'Admissoes / Inclusoes pendentes'} qtd={2} color={'black'}
                          button={'Incluir novo colaborador'} route={'/colaboradores/cadastro'}
                          message={'Colaboradores em admissao'}/>
                <CardHome title={'Na ativa'} qtd={1} color={'green'} button={'Ir para colaboradores'} route={'/colaboradores'}
                          message={'Colaboradores ativos'}/>
                <CardHome title={'Ferias / Faltas / Afastamentos'} qtd={0} color={'orange'} button={'Gerenciar ferias'}
                          message={'Colaboradores nesse estagio'} route={'/ferias'}/>
            </div>
            <div className={'home-center'}>
                <CardSimples style={{marginTop: '2rem'}}>
                <Chart />
                </CardSimples>

            <CardBorda title={'lembretes'} color={'dark'}>
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

export default Home;
