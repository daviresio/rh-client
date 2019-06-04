import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Select from "../../components/form/Select";
import CardLateral from "../../components/card/CardLateral";
import CardLateralSimple from "../../components/card/CardLateralSimple";

const Fechamento = () => {
    return (
        <CardSimples>
            Iniciar fechamento de folha do período:
            <Select />

            <CardLateralSimple text={'Fechamento do mes 04 de 2019'} secondText={'iniciado em 20/04/2019'} />
        </CardSimples>
    );
};

export default Fechamento;
