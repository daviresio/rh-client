import React from 'react';
import Buttom from "../../components/Buttom";

const TerminoExperiencia = () => {
    return (
        <>
            <div className="title">{'Termino da experiencia'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'E-mail informando quais colaboradores estão com contrato de experiência a vencer'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'De dois em dois dias 14 dias antes do término do período de experiência do colaborador.'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Contratos de experiência'}</span>
                    <p>Olá,</p>
                    <p>Este e-mail é apenas um alerta de que o contrato de experiência do colaborador abaixo está para vencer: </p>

                    <p>Nome: #colaborador</p>
                    <p>Departamento: #departamento</p>
                    <p>Cargo: #cargo</p>
                    <p>Data do término do contrato: #data - #dia_da_semana</p>
                    <p>Supervisor: #supervisor</p>

                    <p>Obrigado</p>
                    <p>Equipe Convenia</p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>

                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TerminoExperiencia;
