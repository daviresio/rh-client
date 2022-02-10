import React from 'react';
import CardBorda from "../../../components/card/CardBorda";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Buttom from "../../../components/Buttom";
import Table from "../../../components/table/Table";
import AlignRight from "../../../components/util/AlignRight";

const DissidioStep4 = () => {
    return (
        <CardBorda title={'Colaboradores'} start>
            <div className={'header-dissidio-step-4'}>
                <div className={'filtros'}>
                <Select label={'Cargos'} correcaoList/>
                <Select label={'Departamentos'} correcaoList/>
                <Select label={'Vinculos'} correcaoList/>
                </div>
                <Buttom color={'green'} label={'Salvar'}/>
            </div>
            <AlignRight>
                <Input style={{maxWidth: '20rem', padding: '0'}} placeholder={'Procurar...'}/>
            </AlignRight>
            <Table header={['Nome', 'Cargo', 'Departamento', 'Vinculo', 'Data de admissao', 'Salario anterior', 'Salario novo', '% Dissidio']}
                   keys={['nome', 'cargo', 'departamento', 'vinculo', 'dataAdmissao', 'salarioAnterior', 'salarioNovo', 'dissidio']}
                   data={[]}>

            </Table>
        </CardBorda>
    );
};

export default DissidioStep4;
