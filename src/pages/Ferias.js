import React from 'react';
import Page from "./Page";
import SimplePanel from "../components/SimplePanel";
import Message from "../components/Message";
import TableContainer from "../components/TableContainer";
import Table from "../components/Table";
import CardBorda from "../components/CardBorda";
import Buttom from "../components/Buttom";

const Ferias = () => {
    return (
        <Page title={'Ferias'}>
            <div className={'ferias page-divided'}>
                <div>
                    <div className={'painel'}>
                        <div className={'resumos'}>
                            <SimplePanel color={'blue'} qtd={'0'} text={'Colaboradores em ferias'}/>
                            <SimplePanel color={'orange'} qtd={'0'}
                                         text={'Colaboradores com ferias a vencer nos proximos 90 dias'}/>
                            <SimplePanel color={'green'} qtd={'0'}
                                         text={'Colaboradores que sairao de ferias nos proximos meses'}/>
                        </div>
                        <Message text={'Nenhum colaborador está em férias'} color={'blue'}/>
                        &nbsp;
                    </div>
                    <CardBorda title={`Saldo de ferias`}>
                        <TableContainer>
                            <Table data={[{
                                nome: 'davi Resio Moreira',
                                cargo: 'programador',
                                departamento: 'ti'
                            },
                                {
                                    nome: 'princesa bruna sergio da silva',
                                    cargo: 'designer',
                                    departamento: 'web'
                                }]}/>
                        </TableContainer>
                    </CardBorda>
                </div>
                <div>
                    <CardBorda icon={'spinner'} color={'orange'} title={'Ferias para aprovacao (0)'}>
                        {'falta implementar'}
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'green'} title={'Historico de ferias aprovadas'}>
                        {'falta implementar'}
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} title={'Historico de ferias coletivas'}>
                        {'falta implementar'}
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'red'} title={'Historico de ferias reprovadas'}>
                        {'falta implementar'}
                    </CardBorda>
                    <div style={{marginTop: '2rem'}}>
                        <Buttom click={() => {
                        }} color={'blue'} full label={'Cadastrar ferias coletivas'}/>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <Buttom click={() => {
                        }} color={'blue'} full label={'Gerenciar ferias por colaborador'}/>
                    </div>
                </div>
            </div>

        </Page>
    );
};

export default Ferias;
