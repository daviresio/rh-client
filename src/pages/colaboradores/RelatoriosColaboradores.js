import React from 'react';
import CardBorda from "../../components/CardBorda";
import CardLateral from "../../components/CardLateral";

const RelatoriosColaboradores = () => {
    return (
        <CardBorda icon={'list'} title={'Relatorios'}>
            <div className={'relatorios'}>
            <CardLateral icon={'sync-alt'} title={'Turnover'} text={'Headcount, demissoes, turnover e turnover agregado'}
                         secondText={'Ultimos 12 meses'}/>
            <CardLateral icon={'dollar-sign'} title={'Custo provisionado de colaborador'}
                         text={'Salario, beneficios e impostos para provisionamento de custos - Calculos baseados nas configuracoes da folha de pagamento'}/>
            </div>
        </CardBorda>
    );
};

export default RelatoriosColaboradores;
