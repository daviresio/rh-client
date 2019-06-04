import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";
import InputRow from "../../components/form/InputRow";
import Toogle from "../../components/form/Toogle";

const FaleComRh = () => {
    return (
        <div className={'fale-com-rh'}>
            <div className={'title'}>{'Fale com o rh'}</div>
            <CardSimples>
                <div className={'header'}>
                    <Buttom color={'blue'} label={'Iniciar uma nova conversa'}/>
                    <InputRow/>
                    <Toogle label={'Mostrar fechadas'}/>
                </div>

            </CardSimples>
        </div>
    );
};

export default FaleComRh;
