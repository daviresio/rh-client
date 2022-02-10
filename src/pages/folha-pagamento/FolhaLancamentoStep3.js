import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";

const FolhaLancamentoStep3 = () => {
    return (
        <CardSimples className={'folha-lancamento-guia'}>
            <i className="far fa-clock" />
            <div className={'title'}>Hora do cafe</div>
            <div className={'text'}>Aguarde traquilo, voce chegou aqui pois solicitou o envio das informacoes
            de folha para voce ou para o seu contador</div>
            <Buttom color={'gray'} label={'Receber excel com informacoes da folha'}/>
            <Buttom color={'blue'} label={'Reenviar para a contabilidade'} style={{marginTop: '1rem'}}/>
        </CardSimples>
    );
};

export default FolhaLancamentoStep3;