import React from 'react';
import Buttom from "../../components/Buttom";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";

const ConclusaoFerias = () => {
    return (
        <>
            <div className="title">{'Conclusao de ferias'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{' E-mail informando que o processo de férias foi finalizado '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{' Quando um RH finalizar um processo de férias '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <p>Texto para o colaborador:</p>
                    <span className={'negrito'}>{'Suas férias foram aprovadas'}</span>
                    <p>Olá #colaborador,</p>

                    <p>Sua #empresa aprovou sua solicitacão de férias.</p>

                    <p>Aproveite!</p>

                    <p>Périodo de: #data_de até #data_ate</p>

                    <p>Abono pecuniário (dias): #dias ou Não solicitou</p>

                    <p>Se houver dúvidas, entre em contato com o RH. </p>

                    <p>Obrigado,</p>
                    <p> Equipe Convenia </p>
                    <Divided/>

                    <p>Texto para o gestor:</p>
                    <span className={'negrito'}>{'A solicitação de férias de #colaborador foi aprovada. '}</span>
                    <p>Olá,</p>

                    <p>A empresa #empresa aprovou a solicitacão de férias de #colaborador.</p>

                    <p>Périodo de: #data_de até #data_ate</p>

                    <p>Abono pecuniário (dias): #dias ou Não solicitou</p>

                    <p>Se houver dúvidas, você pode falar diretamente com o RH. </p>

                    <p>Obrigado,</p>
                    <p> Equipe Convenia </p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Colaborador que solicitou as férias'}/>
                    <Divided/>
                    <Checkbox label={'Gestor do colaborador que solicitou férias'}/>
                    <Divided/>
                    <InputRow label={'E-mails'}/>
                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConclusaoFerias;
