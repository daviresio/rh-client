import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";
import TabCard from "../../components/TabCard";
import CardSimples from "../../components/card/CardSimples";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import Edit from "../../components/util/Edit";
import {loadList} from "../../store/actions/serverActions";

const ConfiguracaoFolhaBody = ({changeRoute, router, loadData, serverValues}) => {

    const {eventos} = serverValues
    const path = '/folha/configuracao/'

    useEffect(()=> {
        loadData('eventos')
    }, [])

    return (
        <div className={'folha-configuracao page-divided'}>
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Buttom onClick={() => changeRoute(path + 'adicionar-evento')} color={'green'} label={'Adicionar evento'}/>
                </div>
                <CardBorda title={'Eventos'}>
                        <Table header={['Cod', 'Evento']} data={eventos} keys={['codigo', 'nome']} />
                </CardBorda>
            </div>
            <div>
                <div className={'title-second-content'}>
                    <span className={'title'}>{'Informacoes gerais'}</span>
                    <Edit onClick={()=> changeRoute(path + 'editar-configuracoes-gerais')} />
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
                        <Buttom full label={'Configurar 13 salario'} color={'blue'} onClick={()=>changeRoute(path + 'configurar-decimo-terceiro')}/>
                    </div>
                </CardSimples>

                <div style={{marginTop: '2rem'}}>
                    <Buttom color={'blue'} full label={'Configurar DSR'} onClick={()=>changeRoute(path + 'configurar-dsr')}/>
                    {/* <Buttom color={'black'} full label={'Todos os colaboradores desligados'}/> */}
                </div>

            </div>
        </div>
    );
};

export default connect(state => ({router: state.router, serverValues: state.serverValues}),
    dispatch => ({
        changeRoute: route => dispatch(changeRoute(route)),
        loadData: entity => dispatch(loadList(entity)),
    }))(ConfiguracaoFolhaBody);