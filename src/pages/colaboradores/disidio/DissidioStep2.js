import React, {useEffect} from 'react';
import CardBorda from "../../../components/card/CardBorda";
import Select from "../../../components/form/Select";
import Table from "../../../components/table/Table";
import {connect} from "react-redux";
import {loadList, save, search, update} from "../../../store/actions/serverActions";
import {formateDateFull} from "../../../util/metodosUteis";

const DissidioStep2 = ({loadData, cargos, departamentos, vinculos, colaboradores, }) => {

    useEffect(()=> {
        loadData('cargos')
        loadData('departamentos')
        loadData('vinculos')
        loadData('colaboradores')
    }, [])

    const checkboxChange = (v, i) => {console.log(v,i)}

    return (
        <CardBorda title={'Colaboradores'}>
            <div style={{width: '100%'}}>
                <div className={'selecionar-colaboradores-header'}>
                    <Select correcaoList label={'Cargos'} options={cargos}/>
                    <Select correcaoList label={'Departamentos'} options={departamentos}/>
                    <Select correcaoList label={'Vinculos'} options={vinculos}/>
                </div>
                <Table header={['Nome', 'Cargo', 'Departamento', 'Vinculo', 'Salario', 'Data de admissao']}
                data={colaboradores.map(v => ({...v, dataAdmissao: formateDateFull(v.dataAdmissao)}))}
                       keys={['nome', 'cargo.nome', 'departamento.nome', 'vinculo.nome', 'salario', 'dataAdmissao']}
                       selectMultiple checkboxChange={checkboxChange}/>
            </div>
        </CardBorda>
    );
};

const mapStateToProps = state => ({
    cargos: state.serverValues.cargos,
    departamentos: state.serverValues.departamentos,
    vinculos: state.serverValues.vinculos,
    colaboradores: state.serverValues.colaboradores,
})

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    save: (value, redirect) => dispatch(save('dissidios', value, redirect)),
    update: (value, redirect) => dispatch(update('dissidios', value, redirect)),
    search: id => dispatch(search('dissidios', id, 'dissidios')),
})

export default connect(mapStateToProps, mapDispatchToProps)(DissidioStep2);
