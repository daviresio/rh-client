import React, {useEffect, useState} from 'react';
import Page from "../layout/Page";
import SimplePanel from "../components/SimplePanel";
import Message from "../components/util/Message";
import CardBorda from "../components/card/CardBorda";
import Buttom from "../components/Buttom";
import {changeRoute} from "../store/actions/routerActions";
import {connect} from "react-redux";
import {loadList, remove} from "../store/actions/serverActions";
import TableManual from "../components/table/TableManual";
import Edit from "../components/util/Edit";
import Delete from "../components/util/Delete";
import {formateDateFull, getValue} from "../util/metodosUteis";

const Ferias = ({changeRoute, colaboradores, loadData, feriasParaAprovacao, feriasAprovadas, feriasColetivas, feriasReprovadas, remove}) => {

    const [infoSelected, setInfoSelected] = useState(0);

    useEffect(() => {
        loadData('colaboradores');
        loadData('ferias?status=PENDENTE', 'feriasParaAprovacao');
        loadData('ferias?status=APROVADA', 'feriasAprovadas');
        loadData('ferias?feriasColetivas=true', 'feriasColetivas');
        loadData('ferias?status=REPROVADA', 'feriasReprovadas')
    }, []);


    const showMessage = () =>
        infoSelected === 0 ? <Message text={'Nenhum colaborador está em férias'} color={'blue'}/>
            : infoSelected === 1 ? <Message text={'Nenhum colaborador com férias próximo a vencer'} color={'orange'}/>
            : <Message text={'Nenhum colaborador sairá de férias nos próximos 30 dias'} color={'green'}/>;


    return (
        <Page title={'Ferias'}>
            <div className={'ferias page-divided'}>
                <div>
                    <div className={'painel'}>
                        <div className={'resumos'}>
                            <SimplePanel color={'blue'} qtd={'0'} text={'Colaboradores em ferias'} onClick={() => setInfoSelected(0)}/>
                            <SimplePanel color={'orange'} qtd={'0'}
                                         text={'Colaboradores com ferias a vencer nos proximos 90 dias'} onClick={() => setInfoSelected(1)}/>
                            <SimplePanel color={'green'} qtd={'0'}
                                         text={'Colaboradores que sairao de ferias nos proximos meses'} onClick={() => setInfoSelected(2)}/>
                        </div>
                        {showMessage()}
                        &nbsp;
                    </div>
                    <CardBorda title={`Saldo de ferias`}>

                        <TableManual tableHeader={
                            <tr>
                                <th>Nome</th>
                                <th>Início do aquisitivo</th>
                                <th>Fim do aquisitivo</th>
                                <th>Fim do concessivo</th>
                                <th>Saldo proporcional</th>
                                <th>Saldo disponível</th>
                            </tr>
                        }
                                     tableBody={
                                         colaboradores && colaboradores.length > 0 && colaboradores.map(v =>
                                             <tr key={v.id}>
                                                 <td>{v.nome}</td>
                                                 <td>{'27/02/2019'}</td>
                                                 <td>{'26/02/2020'}</td>
                                                 <td>{'26/02/2020'}</td>
                                                 <td>{'10,00'}</td>
                                                 <td>{'30'}</td>
                                             </tr>
                                         )
                                     }
                        />

                    </CardBorda>
                </div>
                <div>
                    <CardBorda style={{marginTop: '0'}} icon={'spinner'} color={'orange'} title={`Ferias para aprovacao (${feriasParaAprovacao ? feriasParaAprovacao.length : 0})`}>
                        {feriasParaAprovacao && feriasParaAprovacao.length ?
                            feriasParaAprovacao.map(v =>
                                <FeriasParaAprovacao key={v.id} value={v} edit={() => changeRoute('/ferias/processo/aprovacao-gestor/' + v.id)}
                                                     remove={() => remove('ferias', v.id, 'feriasParaAprovacao')}/>
                            )
                            : <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>}
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'green'} title={'Historico de ferias aprovadas'}>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} title={'Historico de ferias coletivas'}>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'red'} title={'Historico de ferias reprovadas'}>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <div style={{marginTop: '2rem'}}>
                        <Buttom onClick={() => changeRoute('/ferias/cadastro-ferias-coletivas')} color={'blue'} full label={'Cadastrar ferias coletivas'}/>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <Buttom onClick={() => changeRoute('/ferias/cadastro-ferias-individuais')} color={'blue'} full label={'Gerenciar ferias por colaborador'}/>
                    </div>
                </div>
            </div>

        </Page>
    );
};

const mapStateToProps = state => ({
    colaboradores: state.serverValues.colaboradores,
    feriasParaAprovacao: state.serverValues.feriasParaAprovacao,
    feriasAprovadas: state.serverValues.feriasAprovadas,
    feriasColetivas: state.serverValues.feriasColetivas,
    feriasReprovadas: state.serverValues.feriasReprovadas,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    remove: (entity, value, target, options) => dispatch(remove(entity, value, target, options)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Ferias);


const getProgress = v => {
    let acumulated = 0;
    if (v.aprovadoPeloGestorConcluido === 'APROVADA') acumulated = acumulated + 20;
    if (v.aprovadoPeloRhConcluido === 'APROVADA') acumulated = acumulated + 20;
    if (v.enviadoParaContabilidadeConcluido === 'APROVADA') acumulated = acumulated + 20;
    if (v.calculosContabilidadeConcluido === 'APROVADA') acumulated = acumulated + 20;
    if (v.conclusoesConcluido === 'APROVADA') acumulated = acumulated + 20;
    return acumulated
};

const FeriasParaAprovacao = ({value: v, edit, remove}) =>
    <div className={'ferias-para-aprovacao'}>
        <img src={getValue('colaborador.foto', v)}/>
        <div className={'content'}>
            <span>{getValue('colaborador.nome', v)}</span>
            <ProgressBar value={getProgress(v)}/>
            <span>{`De: ${formateDateFull(v.inicioPeriodoAquisitivo)} ate: ${formateDateFull(v.finalPeriodoAquisitivo)}`}</span>
            <div className={'acoes'}>
                <Edit onClick={edit}/>
                <Delete onClick={remove}/>
            </div>
        </div>
    </div>;


const ProgressBar = ({value}) =>
    <div className={'progress-bar'}>
        {value + '%'}
        <div className={'progress-bar-value'} style={{width: value + '%'}}/>
    </div>;
