import React from 'react';
import CardBorda from "../../../components/card/CardBorda";
import Select from "../../../components/form/Select";
import Table from "../../../components/Table";

const DissidioStep2 = () => {
    return (
        <CardBorda title={'Colaboradores'}>
            <div style={{width: '100%'}}>
                <div className={'selecionar-colaboradores-header'}>
                    <Select label={'Cargos'}/>
                    <Select label={'Departamentos'}/>
                    <Select label={'Vinculos'}/>
                </div>
                <Table header={['Nome', 'Cargo', 'Departamento', 'Vinculo', 'Salario', 'Data de admissao']}/>
            </div>
        </CardBorda>
    );
};

export default DissidioStep2;
