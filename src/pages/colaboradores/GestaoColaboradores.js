import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Table from "../../components/table/Table";
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import {loadList} from "../../store/actions/serverActions";
import ConfigOptions from "../../components/util/ConfigOptions";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";

const GestaoColaboradores = ({changeRoute, loadData, qtd, colaboradoresAtivos, colaboradoresEmAdimissao, colaboradoresEmDemissao, ...props}) => {

    useEffect(()=> {
        loadData('colaboradores?status=ATIVO', 'colaboradoresAtivos');
        loadData('colaboradores?status=ADMISSAO_PENDENTE', 'colaboradoresEmAdimissao');
        loadData('colaboradores?status=DESLIGAMENTO_PENDENTE', 'colaboradoresEmDemissao');
        loadData('colaboradores/quantidade', 'qtdColaboradores')
    }, []);

    const configOptions = <ConfigOptions options={[
        {nome: 'Editar em massa', onClick: ()=> changeRoute('/colaboradores/editar-em-massa')},
        {nome: 'Atualizacao de dissidio', onClick: ()=>  changeRoute('/colaboradores/dissidio')},
        {nome: 'Gerenciar acesso dos colaboradores', onClick: ()=>  changeRoute('/colaboradores/gerenciar-acesso')},
    ]}/>;

    const renderIfExists = value => value ? value.map(v => ({...v, nome: <ColaboradorComFoto nome={v.nome} foto={v.foto}/>})) : [];

    return (
        <React.Fragment>
            <Buttom onClick={() => changeRoute('/colaboradores/cadastro')} color={'green'} label={'Adicionar Colaborador'}/>
            <div className={'gestao-colaboradores page-divided'}>
                <div>
                    <CardBorda icon={'users'} title={`Ativos(${qtd.ativo || 0})`} iconAction={configOptions}>
                            <Table header={['nome', 'cargo', 'departamento']} data={renderIfExists(colaboradoresAtivos)}
                                   keys={['nome', 'cargo.nome', 'departamento.nome']} clicable smallPadding onClick={v=> changeRoute(`/colaboradores/visualizar/${v.id}`)}/>
                    </CardBorda>
                </div>
                <div>
                    <CardBorda icon={'spinner'} title={`Em admissao / Inclusao pendentes (${qtd.admissaoPendente || 0})`}>
                        {colaboradoresEmAdimissao && colaboradoresEmAdimissao.length ?
                            <Table header={['nome']} data={renderIfExists(colaboradoresEmAdimissao)} keys={['nome']}
                                   clicable smallPadding removeReader onClick={v=> changeRoute(`/colaboradores/cadastro/informacoes-basicas/${v.id}`)}/>
                        : <span>Nenhum colaborador em admissao</span>}
                    </CardBorda>

                    <CardBorda color={'red'} icon={'power-off'} title={`Desligamentos pendentes (${qtd.desligamentoPendente || 0})`}>
                        {colaboradoresEmDemissao && colaboradoresEmDemissao.length ?
                            <Table header={['nome']} data={renderIfExists(colaboradoresEmDemissao)} keys={['nome']}
                                   clicable smallPadding removeReader onClick={v => changeRoute(`/colaboradores/desligamento/envio-contabilidade/${v.id}`)}/>
                            : <span>Nenhum colaborador em admissao</span>}
                    </CardBorda>

                    <Buttom click={() => {
                    }} color={'black'} full label={'Todos os colaboradores desligados'} onClick={() => changeRoute('/colaboradores/desligados')}/>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    qtd: state.serverValues.qtdColaboradores,
    colaboradoresAtivos: state.serverValues.colaboradoresAtivos,
    colaboradoresEmAdimissao: state.serverValues.colaboradoresEmAdimissao,
    colaboradoresEmDemissao: state.serverValues.colaboradoresEmDemissao,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GestaoColaboradores)
