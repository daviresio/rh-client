import React from 'react';
import Stepper from "../../components/Stepper";
import StepperItem from "../../components/StepperItem";
import PageEmpty from "../PageEmpty";
import StepperContent from "../../components/StepperContent";
import CardSimples from "../../components/CardSimples";
import Input from "../../components/Input";
import Select from "../../components/Select";

const NovoColaborador = props => {
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
                    <Input label={'Nome completo'}/>
                    <Input label={'Email'}/>
                    <Select title={'Selecione'}/>
                </CardSimples>
            </StepperContent>


        </PageEmpty>
    );
};

export default NovoColaborador;