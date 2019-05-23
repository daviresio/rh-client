import React from 'react';
import CardSimples from "../../components/CardSimples";
import Select from "../../components/Select";
import CardLateral from "../../components/CardLateral";
import CardLateralSimple from "../../components/CardLateralSimple";

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
