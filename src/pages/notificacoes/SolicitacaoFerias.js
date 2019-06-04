import React from 'react';
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";
import Buttom from "../../components/Buttom";

const SolicitacaoFerias = () => {
    return (
        <>
            <div className="title">{'Soliticacao de ferias'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'E-mail informando que um colaborador solicitou ferias'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'A cada solicitação de férias feita por um colaborador'}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Solicitação de férias - #colaborador'}</span>
                    <p>Olá,</p>

                    <p>#colaborador solicitou férias. Entre no Convenia e aprove o pedido.</p>

                    <p>#colaborador, #dias de férias a vencer em #data</p>

                    <p>Clique #link para acessar o Convenia.</p>

                    <p>Obrigado,</p>
                    <p>Equipe Convenia</p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Gestor do colaborador'} />
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

export default SolicitacaoFerias;
