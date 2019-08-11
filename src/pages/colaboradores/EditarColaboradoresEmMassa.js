import React, {useEffect} from 'react';
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import {loadList} from "../../store/actions/serverActions";
import CardSimples from "../../components/card/CardSimples";
import EditTable from "../../components/table/EditTable";
import EditTextTable from "../../components/table/EditTextTable";
import EditSelectTable from "../../components/table/EditSelectTable";

const EditarColaboradoresEmMassa = ({changeRoute, loadData, colaboradores, departamentos}) => {

    useEffect(() => {
        loadData('colaboradores');
        loadData('departamentos')
    }, []);

    return (
        <Page title={'Edicao em massa de colaboradores'}>
            <div className={'editar-em-massa-botoes'}>
                <Buttom color={'gray'} label={'Voltar'} onClick={() => changeRoute('/colaboradores')}/>
                <Buttom color={'blue'} label={'Campos do sistema'}/>
            </div>

            <CardSimples>
                <div className={'table-scroll'}>
                <EditTable header={['Nome', 'Vinculo', 'Departamento', 'Centro de custo', 'Gestor', 'Banco', 'Agencia', 'Conta', 'Digito']}
                           keys={['nome', 'vinculo', 'departamento', 'centroDeCusto', 'gestor', 'banco', 'agencia', 'conta', 'digito']}
                           data={colaboradores.map(v => ({
                               nome: <EditTextTable entity={'colaboradores'} data={v} field={'nome'} />,
                               vinculo: <EditSelectTable/>,
                               departamento: <EditSelectTable entity={'colaboradores'} data={v} obj={'departamento'} options={departamentos} />,
                               centroDeCusto: <EditSelectTable/>,
                               banco: <EditTextTable entity={'colaboradores'} data={v} obj={'banco'} field={'banco'}/>,
                               agencia: <EditTextTable entity={'colaboradores'} data={v} obj={'banco'} field={'agencia'}/>,
                               conta: <EditTextTable entity={'colaboradores'} data={v} obj={'banco'} field={'conta'}/>,
                               digito: <EditTextTable entity={'colaboradores'} data={v} obj={'banco'} field={'digito'}/>,
                           }))}
                />
                </div>
            </CardSimples>

        </Page>
    );
};

const mapStateToProps = state => ({
    colaboradores: state.serverValues.colaboradores,
    departamentos: state.serverValues.departamentos,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarColaboradoresEmMassa);
