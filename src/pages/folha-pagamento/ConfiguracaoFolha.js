import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/CardBorda";
import Table from "../../components/Table";
import TableContainer from "../../components/TableContainer";
import CardSimples from "../../components/CardSimples";
import TabCard from "../../components/TabCard";

const ConfiguracaoFolha = () => {
    return (
        <div className={'folha-configuracao page-divided'}>
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Buttom click={() => {
                    }} color={'green'} label={'Adicionar evento'}/>
                </div>
                <CardBorda title={'Eventos'}>
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
                <div className={'title-second-content'}>
                    <span className={'title'}>{'Informacoes gerais'}</span>
                    <div className={'edit'}>
                        <i className={`fas fa-edit`}/>
                        {'Editar'}
                    </div>
                </div>

                <TabCard tabTitle={['FPAS', 'Impostos', 'Outros']} content={[
                        <div className={'fpas'}>
                            <div>%<span className={'negrito'}> Empresa:</span> <span>0</span></div>
                            <div>%<span className={'negrito'}> Incra:</span> <span>0</span></div>
                        </div>,
                        <div>

                        </div>,
                        <div className={'outros'}>
                            <div><span className={'negrito'}>Desoneração:</span> <span>Não</span></div>
                            <div><span className={'negrito'}>Cálculo de Proporcionalidade:</span> <span>Conforme dias do mês</span></div>
                            <div><span className={'negrito'}>RAT:</span><span> 0,00 %</span></div>
                            <div><span className={'negrito'}>FAP:</span><span> 0,00 %</span></div>
                            <div><span className={'negrito'}>Terceiros:</span><span> 0,00 %</span></div>
                            <div><span className={'negrito'}>Tipo de cálculo de horas extras:</span><span> Mês corrente</span></div>
                        </div>

                ]}/>

                <CardSimples>
                    <div className="folha-configuracao-card">
                    <div className={'title'}>{'Integracoes'}</div>
                    <div className={'text'}>{'Nenhuma integracao habilitada'}</div>
                    </div>
                </CardSimples>

                <CardSimples>
                    <div className="folha-configuracao-card">
                    <div className={'title'}>{'13 Salario'}</div>
                    <div className={'text'}>{'Voce ainda nao configurou os pagamentos do 13 salario'}</div>
                    <Buttom full label={'Configurar 13 salario'} color={'blue'}/>
            </div>
                </CardSimples>

                <div style={{marginTop: '2rem'}}>
                    <Buttom click={() => {
                    }} color={'black'} full label={'Todos os colaboradores desligados'}/>
                </div>

            </div>
        </div>
    );
};

export default ConfiguracaoFolha;
