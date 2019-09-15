import React, {useState} from 'react';
import {changeRoute} from "../../../store/actions/routerActions";
import {connect} from "react-redux";
import PageEmpty from "../../../layout/PageEmpty";
import Stepper from "../../../components/stepper/Stepper";
import StepperItem from "../../../components/stepper/StepperItem";
import StepperContent from "../../../components/stepper/StepperContent";
import {Route, Switch} from "react-router";
import DesligamentoColaboradorStep1 from "./DesligamentoColaboradorStep1";
import DesligamentoColaboradorStep2 from "./DesligamentoColaboradorStep2";
import DesligamentoColaboradorStep3 from "./DesligamentoColaboradorStep3";

const DesligamentoColaborador = ({router, changeRoute}) => {

    const path = '/colaboradores/desligamento/';
    const currentPath = router.location.pathname;
    const [id, setId] = useState('');

    //const mudarRota = rota => changeRoute(`${path}${rota}/${id}`)
    const mudarRota = rota => changeRoute(`${path}${rota}/${1}`);

    //  if(!currentPath.toString()[currentPath.toString().length - 1].match(/\d/)) changeRoute('/colaboradores')

    return (
        <PageEmpty>
            <Stepper>
                <StepperItem number={1} onClick={() => mudarRota('envio-contabilidade')} selected={currentPath.includes('envio-contabilidade')}
                             label={'Envio para a contabilidade'}/>
                <StepperItem number={2} onClick={() => mudarRota('rescisao')} selected={currentPath.includes('rescisao')} label={'Recisao e check list de documentos'}/>
                <StepperItem number={3} onClick={() => mudarRota('conclusao')} selected={currentPath.includes('conclusao')} label={'Conclusao'}/>
            </Stepper>

            <StepperContent>
                <Switch>
                    <Route path={path + 'envio-contabilidade/:id'} render={props => <DesligamentoColaboradorStep1 {...props} setId={id => setId(id)}/>}/>
                    <Route path={path + 'rescisao/:id'} render={props => <DesligamentoColaboradorStep2 {...props} setId={id => setId(id)}/>}/>
                    <Route path={path + 'conclusao/:id'} render={props => <DesligamentoColaboradorStep3 {...props} setId={id => setId(id)}/>}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DesligamentoColaborador);
