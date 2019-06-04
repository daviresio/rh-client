import React from 'react';
import Buttom from "../../components/Buttom";
import Divided from "../../components/util/Divided";
import Checkbox from "../../components/form/Checkbox";
import InputRow from "../../components/form/InputRow";

const AprovacaoFeriasPeloRh = () => {
    return (
        <>
            <div className="title">{'Aprovacao de ferias pelo rh'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'E-mail informando que o RH aprovou as férias de um colaborador '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'Quando um RH aprovar um pedido de férias de um colaborador '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <p>Texto para o colaborador:</p>
                    <span className={'negrito'}>{'Atualização do processo de férias'}</span>
                    <p>Olá #colaborador,</p>

                    <p>Seu pedido de férias no período de #inicio até #fim passou pela etapa de aprovação do RH.</p>

                    <p>Aguarde para ser notificado por e-mail sobre as próximas etapas do seu processo de férias.</p>

                    <p> Obrigado,</p>
                    <p> Equipe Convenia </p>

                    <Divided/>

                    <p>Texto para os e-mails cadastrados:</p>
                    <span className={'negrito'}>{'Atualização do processo de férias'}</span>
                    <p>Olá,</p>

                    <p>As férias de #colaborador no período de #inicio até #fim passaram pela etapa de aprovação do RH.</p>

                    <p>O processo seguirá para a etapa de documentação e o seu colaborador receberá uma notificação por e-mail no momento em que for finalizado.</p>

                    <p> Obrigado,</p>
                    <p> Equipe Convenia </p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Colaborador que solicitou as férias'}/>
                    <Divided/>
                    <Checkbox label={'Gestor que alterou seus dados'}/>
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

export default AprovacaoFeriasPeloRh;
