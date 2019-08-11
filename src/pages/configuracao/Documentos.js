import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";

const Documentos = () => {
    return (
        <CardBorda title={'Minutas padrao'} start>
            <Buttom color={'green'} label={'Adicionar documento'}/>
        </CardBorda>
    );
};

export default Documentos;
