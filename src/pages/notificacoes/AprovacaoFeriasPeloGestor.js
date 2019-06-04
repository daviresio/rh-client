import React from 'react';
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";

const AprovacaoFeriasPeloGestor = () => {
    return (
        <>
            <div className="title">{'Aprovacao de ferias pelo gestor'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'E-mail informando que o gestor aprovou as férias de um colaborador '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'Quando um gestor ou RH aprovar a etapa do gestor de um pedido de férias de um colaborador'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <p>Texto para o colaborador:</p>
                    <span className={'negrito'}>{'Atualização do processo de férias'}</span>
                    <p>Olá #colaborador,</p>

                    <p>Seu pedido de férias no período de #inicio até #fim passou pela etapa de aprovação do seu gestor.</p>

                    <p>Aguarde para ser notificado por e-mail sobre as próximas etapas do seu processo de férias.</p>


                    <p>Obrigado,</p>
                    <p>Equipe Convenia </p>

                    <Divided/>

                    <p>Texto para os e-mails cadastrados:</p>
                    <span className={'negrito'}>{'Atualização do processo de férias'}</span>
                    <p>Olá,</p>

                    <p>As férias de #colaborador no período de #inicio até #fim passaram pela etapa de aprovação do gestor.</p>

                    <p>O processo seguirá para a etapa de aprovação do RH e o seu colaborador receberá uma notificação no momento em que for finalizado.</p>


                    <p>Obrigado,</p>
                    <p>Equipe Convenia </p>

                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Colaborador que solicitou as férias'} />

                    <Divided/>
                    <InputRow label={'E-mails'} />

                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AprovacaoFeriasPeloGestor;
