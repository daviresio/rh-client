import React, {useEffect, useState} from 'react';
import Page from "../../layout/Page";
import CardSimples from "../../components/card/CardSimples";
import styled from "styled-components";
import StepperHorizontal from "../../components/stepper/StepperHorizontal";
import StepperHorizontalItem from "../../components/stepper/StepperHorizontalItem";
import {Route, Switch} from "react-router";
import ProcessoFeriasStep1 from "./ProcessoFeriasStep1";
import ProcessoFeriasStep2 from "./ProcessoFeriasStep2";
import ProcessoFeriasStep3 from "./ProcessoFeriasStep3";
import ProcessoFeriasStep4 from "./ProcessoFeriasStep4";
import ProcessoFeriasStep5 from "./ProcessoFeriasStep5";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import {search} from "../../store/actions/serverActions";
import {formateDateFull, getValue} from "../../util/metodosUteis";

const ProcessoFerias = ({router, changeRoute, search, ferias, ...props}) => {
    const path = '/ferias/processo/';
    const currentPath = router.location.pathname;

    const [id, setId] = useState();

    useEffect(() => {
        try {
            setId(currentPath.toString().match(/\d+/)[0])
        } catch (e) {
            changeRoute('/ferias')
        }
    }, []);

    useEffect(() => {
        if (id) search(id)
    }, [id]);

    return (
        <Page title={'Socilitacao de ferias'}>

            <h2 className={'nome-colaborador'}>{}</h2>

            <ItemContainer>
                <Chave>{'Período solicitado: '}</Chave>
                <Valor>{`De: ${formateDateFull(getValue('inicioPeriodoAquisitivo', ferias))} ate: ${formateDateFull(getValue('finalPeriodoAquisitivo', ferias))}`}</Valor>
            </ItemContainer>

            <ItemContainer>
                <Chave>{'Dias solicitados: '}</Chave>
                <Valor>{getValue('diasDeFerias', ferias)}</Valor>
            </ItemContainer>

            <ItemContainer>
                <Chave>{'Dias de abono: '}</Chave>
                <Valor>{getValue('diasDeAbono', ferias)}</Valor>
            </ItemContainer>

            <ItemContainer>
                <Chave>{'Antecipar 13°? '}</Chave>
                <Valor>{getValue('anteciparParcelaDecimoTerceiro', ferias) ? 'Sim' : 'Nao'}</Valor>
            </ItemContainer>

            <ItemContainer>
                <Chave>{'Saldo antes desta solicitação: '}</Chave>
                <Valor>{''}</Valor>
            </ItemContainer>

            <CardSimples start>
                <Content>
                    <StepperHorizontal>
                        <StepperHorizontalItem number={'1'} title={'Aprovacao do Gestor'} onClick={() => changeRoute(path + 'aprovacao-gestor/' + id)}
                                               active={currentPath.includes('aprovacao-gestor')} status={ferias ? ferias.aprovadoPeloGestorConcluido : 'PENDENTE'}/>
                        <StepperHorizontalItem number={'2'} title={'Aprovacao do RH'} onClick={() => changeRoute(path + 'aprovacao-rh/' + id)}
                                               active={currentPath.includes('aprovacao-rh')} status={ferias ? ferias.aprovadoPeloRhConcluido : 'PENDENTE'}/>
                        <StepperHorizontalItem number={'3'} title={'Envio de informacoes para contabilidade'} onClick={() => changeRoute(path + 'informacoes-contabilidade/' + id)}
                                               active={currentPath.includes('informacoes-contabilidade')} status={ferias ? ferias.enviadoParaContabilidadeConcluido : 'PENDENTE'}/>
                        <StepperHorizontalItem number={'4'} title={'Documentos e calculos da contabilidade'} onClick={() => changeRoute(path + 'calculos-contabilidade/' + id)}
                                               active={currentPath.includes('calculos-contabilidade')} status={ferias ? ferias.calculosContabilidadeConcluido : 'PENDENTE'}/>
                        <StepperHorizontalItem number={'5'} title={'Conclusao'} onClick={() => changeRoute(path + 'conclusao/' + id)} active={currentPath.includes('conclusao')}
                                               status={ferias ? ferias.conclusoesConcluido : 'PENDENTE'}/>
                    </StepperHorizontal>
                    <Switch>
                        <Route path={path + 'aprovacao-gestor/:id'} component={ProcessoFeriasStep1}/>
                        <Route path={path + 'aprovacao-rh/:id'} component={ProcessoFeriasStep2}/>
                        <Route path={path + 'informacoes-contabilidade/:id'} component={ProcessoFeriasStep3}/>
                        <Route path={path + 'calculos-contabilidade/:id'} component={ProcessoFeriasStep4}/>
                        <Route path={path + 'conclusao/:id'} component={ProcessoFeriasStep5}/>
                    </Switch>
                </Content>
            </CardSimples>

        </Page>
    );
};


const mapStateToProps = state => ({
    router: state.router,
    ferias: state.serverValues.feria,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    search: id => dispatch(search('ferias', id, 'feria')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFerias);


const ItemContainer = styled.div`
margin-top: 1rem;
font-size: 1.2rem;
`;

const Chave = styled.span`
font-weight: bold;
margin-right: .5rem;
`;

const Valor = styled.span`

`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 5fr;
 // grid-gap: 2rem;
`;


