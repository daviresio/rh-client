import React from 'react';
import Page from "../layout/Page";
import CardHome from "../components/card/CardHome";

const Home = () => {
    return (
        <Page title={'Painel'}>
            <div className={'home-resumos'}>
                <CardHome title={'Admissoes / Inclusoes pendentes'} qtd={2} color={'black'}
                          button={'Incluir novo colaborador'} route={'/colaboradores/novo'}
                          message={'Colaboradores em admissao'}/>
                <CardHome title={'Na ativa'} qtd={1} color={'green'} button={'Ir para colaboradores'} route={'/colaboradores'}
                          message={'Colaboradores ativos'}/>
                <CardHome title={'Ferias / Faltas / Afastamentos'} qtd={0} color={'orange'} button={'Gerenciar ferias'}
                          message={'Colaboradores nesse estagio'} route={'/ferias'}/>
            </div>
        </Page>
    );
};

export default Home;
