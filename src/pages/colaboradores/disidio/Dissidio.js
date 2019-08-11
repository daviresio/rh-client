import React from 'react';
import Stepper from "../../../components/Stepper";
import StepperItem from "../../../components/StepperItem";
import StepperContent from "../../../components/StepperContent";
import {Redirect, Route, Switch} from "react-router";
import PageEmpty from "../../../layout/PageEmpty";
import {changeRoute} from "../../../store/actions/routerActions";
import {connect} from "react-redux";
import DissidioStep1 from "./DissidioStep1";
import DissidioStep4 from "./DissidioStep4";
import DissidioStep3 from "./DissidioStep3";
import DissidioStep2 from "./DissidioStep2";

const Dissidio = ({changeRoute, ...props}) => {

    const path = '/colaboradores/dissidio/';
    const currentPath = props.router.location.pathname;

    return (
        <PageEmpty>
            <Stepper>
                <StepperItem number={1} onClick={()=> changeRoute(path + 'selecionar-dissidio')} selected={currentPath.includes('selecionar-dissidio')} label={'Selecionar dissidio'}/>
                <StepperItem number={2} onClick={()=> changeRoute(path + 'selecionar-colaboradores')} selected={currentPath.includes('selecionar-colaboradores')} label={'Selecionar colaboradores'}/>
                <StepperItem number={3} onClick={()=> changeRoute(path + 'adicionar-faixas')} selected={currentPath.includes('adicionar-faixas')} label={'Adicionar faixas'}/>
                <StepperItem number={4} onClick={()=> changeRoute(path + 'conferencia')} selected={currentPath.includes('conferencia')} label={'Conferencia'}/>
            </Stepper>

            <StepperContent>
                <Switch>
                    <Route path={path + 'selecionar-dissidio'} component={DissidioStep1} />
                    <Route path={path + 'selecionar-colaboradores'} component={DissidioStep2} />
                    <Route path={path + 'adicionar-faixas'} component={DissidioStep3} />
                    <Route path={path + 'conferencia'} component={DissidioStep4} />
                    <Redirect from={path} to={path + 'selecionar-dissidio'} exact={true} />
                </Switch>
            </StepperContent>

        </PageEmpty>
    );
};

const mapStateToProps = state => ({
    colaborador: state.colaborador,
    router: state.router,
});
const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(Dissidio);
