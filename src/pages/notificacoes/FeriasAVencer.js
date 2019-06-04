import React from 'react';
import Buttom from "../../components/Buttom";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";

const FeriasAVencer = () => {
    return (
        <>
            <div className="title">{'Ferias a vencer'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{' E-mail informando quais colaboradores estão com férias a vencer '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{' Duas vezes por semana, quando o saldo proporcional de férias do colaborador for maior ou igual a 30 '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Alerta de férias dos colaboradores a vencer'}</span>
                    <p>Olá #nome,</p>

                    <p> Existem colaboradores com férias a vencer. Se eles não saírem de férias antes deste período, a empresa pagará o valor dobrado de férias. Veja a lista abaixo
                        e converse com o seu time para que todos saiam de férias o mais breve possível: </p>

                    <p>#colaborador, #dias de férias a vencer em #data</p>

                    <p>Clique no link abaixo para agendar agora as férias no Convenia. Lembre-se: é preciso agendar e tirar suas férias antes deste período.</p>

                    <p>Clique aqui para agendar.</p>

                    <p> Obrigado,</p>
                    <p> Equipe Convenia </p>
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

export default FeriasAVencer;
