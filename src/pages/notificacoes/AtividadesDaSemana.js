import React from 'react';
import Buttom from "../../components/Buttom";
import InputRow from "../../components/form/InputRow";

const AtividadesDaSemana = () => {
    return (
        <>
            <div className="title">{'Atividades da semana'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{' Resumo do que acontecerá no Departamento Pessoal da sua empresa na semana.'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{' Resumo de aniversariantes, colaboradores que irão sair de férias entre outras informações importantes. '}</span>
                <span>{' Toda segunda-feira as 7:00 '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <InputRow label={'E-mails'} />
                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AtividadesDaSemana;
