import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/CardBorda";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";

const GestaoColaboradores = ({navigate}) => {
    return (
        <React.Fragment>
            <Buttom click={() => navigate('/colaboradores/novo')} color={'green'} label={'Adicionar Colaborador'}/>
            <div className={'gestao-colaboradores page-divided'}>
                <div>
                    <CardBorda icon={'users'} title={`Ativos(1)`} config={true}>
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
                </div>
                <div>
                    <CardBorda icon={'spinner'} title={'Em admissao / Inclusao pendentes (1)'}>
                        {'falta implementar'}
                    </CardBorda>

                    <CardBorda color={'red'} icon={'power-off'} title={'Desligamentos pendentes (1)'}>
                        {'Nenhum colaborador em desligamento'}
                    </CardBorda>

                    <Buttom click={() => {
                    }} color={'black'} full label={'Todos os colaboradores desligados'}/>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({navigate: route => dispatch(changeRoute(route))})
export default connect(null, mapDispatchToProps)(GestaoColaboradores)