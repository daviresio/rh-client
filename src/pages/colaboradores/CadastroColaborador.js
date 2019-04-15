import React from 'react';
import Stepper from "../../components/Stepper";
import StepperItem from "../../components/StepperItem";
import PageEmpty from "../PageEmpty";
import StepperContent from "../../components/StepperContent";
import CadastroColaboradorStep1 from "./CadastroColaboradorStep1";
import {connect} from "react-redux";
import CadastroColaboradorStep2 from "./CadastroColaboradorStep2";
import CadastroColaboradorStep3 from "./CadastroColaboradorStep3";
import CadastroColaboradorStep4 from "./CadastroColaboradorStep4";
import {
    carregaDadosParaCadastroColaborador,
    colaboradorCadastroChangeTab
} from "../../store/actions/colaboradorActions";
import Modal from "../../components/Modal";

class CadastroColaborador extends React.Component{

    constructor(props) {
        super(props);
    }

componentDidMount() {
    this.props.carregaDados()
}

    submit = e => {
        console.log(e);
    }
render() {
    const {cadastroColaboradorTab, changeTab} = this.props
    return (
        <React.Fragment>

        <PageEmpty>
            <Stepper>
                <StepperItem number={1} click={() => changeTab(0)} label={'Informacoes basicas'} active={cadastroColaboradorTab === 0}/>
                <StepperItem number={2} click={() => changeTab(1)} label={'Dados pessoais'} active={cadastroColaboradorTab === 1}/>
                <StepperItem number={3} click={() => changeTab(2)} label={'Documentos'} active={cadastroColaboradorTab === 2}/>
                <StepperItem number={4} click={() => changeTab(3)} label={'Beneficios'} active={cadastroColaboradorTab === 3}/>
            </Stepper>

            <StepperContent>
                {cadastroColaboradorTab === 0 ? <CadastroColaboradorStep1 onSubmit={this.submit} /> :
                cadastroColaboradorTab === 1 ? <CadastroColaboradorStep2 /> :
                cadastroColaboradorTab === 2 ? <CadastroColaboradorStep3 /> :
                <CadastroColaboradorStep4 />}
            </StepperContent>

        </PageEmpty>


{/*        <Modal>
            hgsadfjhdsgf
        </Modal> */}
        </React.Fragment>
    );
};

}

const mapStateToProps = ({colaborador}) => colaborador
const mapDispatchToProps = dispatch => ({changeTab: tab => dispatch(colaboradorCadastroChangeTab(tab)),
                                        carregaDados: () => dispatch(carregaDadosParaCadastroColaborador())})
export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaborador);


