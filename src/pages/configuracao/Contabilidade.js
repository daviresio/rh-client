import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";

const Contabilidade = () => {
    return (
        <CardSimples start>
            <div className={'configuracao-contador-title'}>{'Contador'}</div>
            <Buttom color={'green'} label={'Adicionar contador'}/>
        </CardSimples>
    );
};

export default Contabilidade;
