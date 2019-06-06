import React, {useState} from 'react';
import Stepper from "../../components/Stepper";
import StepperItem from "../../components/StepperItem";
import PageEmpty from "../../layout/PageEmpty";
import StepperContent from "../../components/StepperContent";
import {connect} from "react-redux";
import CadastroColaboradorStep1 from "./CadastroColaboradorStep1";
import CadastroColaboradorStep2 from "./CadastroColaboradorStep2";
import CadastroColaboradorStep3 from "./CadastroColaboradorStep3";
import CadastroColaboradorStep4 from "./CadastroColaboradorStep4";
import {changeRoute} from "../../store/actions/routerActions";
import {Redirect, Route, Switch} from "react-router";

const CadastroColaborador = props => {

    const {changeRoute} = props
    const path = '/colaboradores/cadastro/'
    const currentPath = props.router.location.pathname
    const [id, setId] = useState('')

    return (
                <PageEmpty>
                    <Stepper>
                        <StepperItem number={1} onClick={()=> changeRoute(`${path}informacoes-basicas/${id}`)} selected={currentPath.includes('informacoes-basicas')} label={'Informacoes basicas'}/>
                        <StepperItem number={2} onClick={()=> changeRoute(`${path}dados-pessoais/${id}`)} selected={currentPath.includes('dados-pessoais')} label={'Dados pessoais'}/>
                        <StepperItem number={3} onClick={()=> changeRoute(`${path}documentos/${id}`)} selected={currentPath.includes('documentos')} label={'Documentos'}/>
                        <StepperItem number={4} onClick={()=> changeRoute(`${path}beneficios/${id}`)} selected={currentPath.includes('beneficios')} label={'Beneficios'}/>
                    </Stepper>

                    <StepperContent>
                        <Switch>
                            <Route path={path + 'informacoes-basicas/:id'} render={props => <CadastroColaboradorStep1 {...props} setId={id=> setId(id)} />} />
                            <Route path={path + 'informacoes-basicas'} render={props => <CadastroColaboradorStep1 {...props} setId={id=> setId(id)} />} />
                            <Route path={path + 'dados-pessoais/:id'} render={props => <CadastroColaboradorStep2 {...props} setId={id=> setId(id)} />} />
                            <Route path={path + 'documentos/:id'} render={props => <CadastroColaboradorStep3 {...props} setId={id=> setId(id)} />} />
                            <Route path={path + 'beneficios/:id'} render={props => <CadastroColaboradorStep4 {...props} setId={id=> setId(id)} />} />
                            <Redirect from={path} to={path + 'informacoes-basicas'} exact={true} />
                        </Switch>
                    </StepperContent>

                </PageEmpty>

        );
}

const mapStateToProps = state => ({
    colaborador: state.colaborador,
    router: state.router,
})
const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
})
export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaborador);


