import React from 'react';
import Page from "../../../layout/Page";
import DatePicker from "../../../components/form/DatePicker";
import Buttom from "../../../components/Buttom";
import CardBorda from "../../../components/card/CardBorda";
import Table from "../../../components/table/Table";
import Input from "../../../components/form/Input";

const DissidioStep1 = () => {
    return (
        <>
            <div className={'atualizacao-dissidio-header'}>
            <Input input={{value: ''}} label={'Data base'} />
                <Buttom color={'green'} label={'Adicionar dissidio'} style={{marginTop: '2rem'}} />

            </div>
            <CardBorda title={'Dissidios'} style={{marginTop: '0'}}>
                <Table header={['Data', '']} data={[{data: '12/06/2019',}]}
                       keys={['data']}
                       addAndRemoveEnd
                />
            </CardBorda>

        </>
    );
};

export default DissidioStep1;
