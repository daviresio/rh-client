import React from 'react';
import CardBorda from "../../../components/card/CardBorda";
import Input from "../../../components/form/Input";
import ButtomAdicionar from "../../../components/ButtomAdicionar";
import Checkbox from "../../../components/form/Checkbox";
import AlignRight from "../../../components/util/AlignRight";
import Buttom from "../../../components/Buttom";

const DissidioStep3 = () => {
    return (
        <CardBorda title={'Faixas de atualizacao de salario'} start>
            <AlignRight>
                <Buttom color={'green'} label={'avancar'}/>
            </AlignRight>
            <div className={'body-dissidio-step-3'}>
                <Input label={'De'}/>
                <Input label={'Ate'}/>
                <Input label={'%'}/>
            </div>
            <ButtomAdicionar label={'Adicionar faixa'}/>
            <Checkbox label={'Utilizar os ultimos 12 meses para base de calculo'}/>
        </CardBorda>
    );
};

export default DissidioStep3;
