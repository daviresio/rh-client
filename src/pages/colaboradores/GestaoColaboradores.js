import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import {loadList} from "../../store/actions/serverActions";

const GestaoColaboradores = ({navigate, loadData, ...props}) => {

    const {colaboradores} = props.serverValues

    useEffect(()=> {
        loadData('colaboradores')
    }, [])

    return (
        <React.Fragment>
            <Buttom onClick={() => navigate('/colaboradores/cadastro')} color={'green'} label={'Adicionar Colaborador'}/>
            <div className={'gestao-colaboradores page-divided'}>
                <div>
                    <CardBorda icon={'users'} title={`Ativos(1)`} iconAction={'config'}>
                        <TableContainer>
                            <Table header={['nome', 'cargo', 'departamento']} data={colaboradores} keys={['nome', 'cargo.nome', 'departamento.nome']}/>
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

const mapStateToProps = state => ({
    serverValues: state.serverValues
})

const mapDispatchToProps = dispatch => ({
    navigate: route => dispatch(changeRoute(route)),
    loadData: entity => dispatch(loadList(entity)),
})
export default connect(mapStateToProps, mapDispatchToProps)(GestaoColaboradores)
