import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Select from "../../components/form/Select";
import Table from "../../components/table/Table";
import Input from "../../components/form/Input";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";


const LancamentoManual = () => {



    const renderRowValue = () =>
        <div className={'linha-valor'}>
            <Input placeholder={'0,00'} style={{maxWidth: '15rem',}}/>
            <i className="far fa-trash-alt"/>
        </div>

    return (
        <>
            <Buttom color={'blue'} label={'Salvar e avancar'} style={{marginTop: '2rem'}}/>
            <CardBorda start title={'Lancamentos'} style={{marginTop: '.5rem'}}>
                <div className={'lancamento-manual-filtros'}>
                    <Select label={'Filtrar por cargo'}/>
                    <Select label={'Filtrar por departamento'}/>
                    <Select label={'Filtrar por vinculo'}/>
                    <div className={'botao-campos-lancamento'}>
                        <Buttom color={'blue'} label={'Campos de lancamento'}/>
                    </div>
                </div>
                <Table borda header={['Nome', 'Contribuicao sindical', 'Afastamentos', 'Ferias']} smallPadding
                       keys={['nome', 'contribuicaoSindical', 'afastamentos', 'ferias']}
                       data={[
                           {
                               nome: <ColaboradorComFoto nome={'Davi Resio'} foto={null} />,
                               contribuicaoSindical: renderRowValue(),
                               afastamentos: renderRowValue(),
                               ferias: renderRowValue(),
                           }
                       ]}/>
                <div className={'totais'}>

                </div>
            </CardBorda>
        </>
    );
};

export default LancamentoManual;

