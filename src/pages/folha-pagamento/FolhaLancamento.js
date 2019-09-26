import React from 'react';
import PageEmpty from "../../layout/PageEmpty";
import Stepper from "../../components/stepper/Stepper";
import StepperItem from "../../components/stepper/StepperItem";
import StepperContent from "../../components/stepper/StepperContent";
import {Route, Switch} from "react-router";
import FolhaLancamentoStep1 from "./FolhaLancamentoStep1";
import FolhaLancamentoStep2 from "./FolhaLancamentoStep2";
import FolhaLancamentoStep3 from "./FolhaLancamentoStep3";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

const FolhaLancamento = ({changeRoute, router, match, ...props}) => {

    const path = '/folha/lancamento/';
    const currentPath = router.location.pathname;
    let id
    try {
    id = currentPath.match(/\d+$/)[0]
    } catch (e) {

    }

    return (
        <PageEmpty>
            <Stepper>
                <StepperItem number={1} onClick={() => changeRoute(`${path}tipo-lancamento/${id}`)}
                             selected={currentPath.includes('tipo-lancamento')} label={'Lancamento'}/>
                <StepperItem number={2} onClick={() => changeRoute(`${path}conferencia/${id}`)}
                             selected={currentPath.includes('conferencia')} label={'Conferencia'}/>
                <StepperItem number={3} onClick={() => changeRoute(`${path}guia/${id}`)}
                             selected={currentPath.includes('guia')} label={'Guias'}/>
            </Stepper>

            <StepperContent>
                <Switch>
                    <Route path={path + 'tipo-lancamento/:id'} component={FolhaLancamentoStep1}/>
                    <Route path={path + 'conferencia/:id'} component={FolhaLancamentoStep2}/>} />
                    <Route path={path + 'guia/:id'} component={FolhaLancamentoStep3}/>} />
                </Switch>
            </StepperContent>
        </PageEmpty>
    );
};

export default connect(
    state => ({router: state.router}),
    dispatch => ({changeRoute: route => dispatch(changeRoute(route))})
)(FolhaLancamento);
