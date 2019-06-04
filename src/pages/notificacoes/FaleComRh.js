import React from 'react';
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";

const FaleComRh = () => {
    return (
        <>
            <div className="title">{'Fale com o rh'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'A cada mensagem enviada pelo colaborador é enviado um e-mail com uma notificação para os administradores vinculados. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'A cada interação do colaborador na conversa. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Convenia Fale com o RH - Nova mensagem'}</span>
                    <p>Você recebeu uma nova mensagem de #colaborador</p>

                    <p>--- Mensagem ---</p>

                    <p>Você pode responder essa mensagem respondendo o e-mail, ou pelo sistema clicando no botão abaixo.</p>

                    <p className={'link'}>Acessar sistema</p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <InputRow label={'E-mails'}/>
                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaleComRh;
