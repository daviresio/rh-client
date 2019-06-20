import React from 'react';
import Page from "../../../layout/Page";
import DatePicker from "../../../components/form/DatePicker";
import Buttom from "../../../components/Buttom";
import CardBorda from "../../../components/card/CardBorda";
import Table from "../../../components/Table";

const DissidioStep1 = () => {
    return (
        <>
            <div className={'atualizacao-dissidio-header'}>
            <DatePicker input={{value: ''}} label={'Data base'} detail={<Buttom color={'green'} label={'Adicionar dissidio'}/>}/>

            </div>
            <CardBorda title={'Dissidios'} style={{marginTop: '0'}}>
                <Table header={['Data', '']} data={[{
                    data: '12/06/2019',
                    acoes: <><Buttom color={'green'} label={'Selecionar'} style={{marginRight: '1rem'}}/>
                    <Buttom color={'red'} label={'Remover'}/></>
                }]}
                       keys={['data', 'acoes']}/>
            </CardBorda>

        </>
    );
};

export default DissidioStep1;
