import React from 'react';
import Stepper from "../../components/Stepper";
import StepperItem from "../../components/StepperItem";
import PageEmpty from "../PageEmpty";
import StepperContent from "../../components/StepperContent";
import CardSimples from "../../components/CardSimples";
import InputRow from "../../components/InputRow";
import SelectRow from "../../components/SelectRow";
import {Field, reduxForm} from "redux-form";

const Teste = props => <input />

let NovoColaborador = props => {

    const {handleSubmit} = props;

    return (
        <PageEmpty>
            <Stepper>
                <StepperItem number={1} label={'Informacoes basicas'} active={true}/>
                <StepperItem number={2} label={'Dados pessoais'}/>
                <StepperItem number={3} label={'Documentos'}/>
                <StepperItem number={4} label={'Beneficios'}/>
            </Stepper>

            <StepperContent>
                <div className={'title-2'}>Informacoes Basicas</div>
                <CardSimples>
                    <form onSubmit={handleSubmit}>
                        <Field component={<InputRow label={'Nome completo'}/>} />
                        <Field component={<InputRow label={'Email'}/>} />
                        <Field component={<SelectRow label={'Cargo'}/>} />
                        <Field component={<SelectRow label={'Departamento'}/>} />
                        <Field component={<SelectRow label={'Centro de custo'}/>} />
                        <Field component={<SelectRow label={'Supervisor'}/>} />
                        <Field component={<InputRow label={'Matricula'}/>} />
                        <Field component={<SelectRow label={'Primeiro emprego'}/>} />
                        <Field component={<InputRow label={'Data do exame admissional'}/>} />
                    </form>
                </CardSimples>
            </StepperContent>


        </PageEmpty>
    );
};

NovoColaborador = reduxForm({form: 'colaborador'})(NovoColaborador);

export default NovoColaborador;


