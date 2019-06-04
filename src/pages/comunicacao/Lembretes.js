import React from 'react';
import InputRow from "../../components/form/InputRow";
import Select from "../../components/form/Select";
import Buttom from "../../components/Buttom";
import Message from "../../components/util/Message";
import CardSimples from "../../components/card/CardSimples";

const Lembretes = () => {
    return (
        <div className={'lembretes'}>
            <div className={'title'}>{'Lembretes'}</div>
            <div className={'subtitle'}>{'Através dessa funcionalidade, você poderá organizar alertas e lembretes de datas recorrentes e pontuais. Clique no botão criar um lembrete e preencha o formulário.'}</div>
            <Buttom className={'botao'} color={'green'} label={'Criar lembrete'}/>
            <CardSimples>

            </CardSimples>
        </div>
    );
};

export default Lembretes;
