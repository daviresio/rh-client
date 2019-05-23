import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/CardBorda";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";

const Holerites = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Buttom click={() => {}} color={'green'} label={'Criar novo mes'}/>
            </div>
                    <CardBorda title={`Holerites`} >
                        <TableContainer>
                            <Table data={[{
                                nome: 'davi Resio Moreira',
                                cargo: 'programador',
                                departamento: 'ti'
                            },
                                {
                                    nome: 'princesa bruna sergio da silva',
                                    cargo: 'designer',
                                    departamento: 'web'
                                }]}/>
                        </TableContainer>
                    </CardBorda>
        </>
    );
};

export default Holerites;
