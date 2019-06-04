import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import TabCard from "../../components/TabCard";
import Edit from "../../components/util/Edit";

const Permissoes = () => {
    return (
        <CardSimples start>
            <div className={'configuracao-permissoes-title'}>{'Permissoes'}</div>
            <TabCard start tabTitle={['Gestores', 'Funcionarios']} color={'blue'} content={[
                <div className={'configuracao-permissoes-gestores'}>
                    <Edit />
                    <div className={'subtitle'}>{'O que o Supervisor poderá ver no painel do Colaborador?'}</div>
                    <div><span className={'negrito'}> Cargo:</span> <span>Sim</span></div>
                    <div><span className={'negrito'}> Departamento:</span> <span>Sim</span></div>
                    <div><span className={'negrito'}> Admissao:</span> <span>Sim</span></div>
                    <div><span className={'negrito'}> Salario:</span> <span>Nao</span></div>
                </div>,
                <div className={'configuracao-permissoes-funcionarios'}>
                    <Edit />
                    <div className={'subtitle'}>{'Permissões disponíveis referente ao acesso do colaborador'}</div>
                    <div><span className={'negrito'}> Dar acesso ao colaborador editar as informações pessoais?</span> <span>Sim</span></div>
                </div>
            ]}/>

        </CardSimples>
    );
};

export default Permissoes;
