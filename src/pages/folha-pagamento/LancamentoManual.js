import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";
import TableFolhaPagamento from "../../components/table/TableFolhaPagamento";
import ButtomSelectOptions from "../../components/ButtomSelectOptions";
import AlignRight from "../../components/util/AlignRight";
import {connect} from "react-redux";
import {loadList, update} from "../../store/actions/serverActions";
import {arrayToObj} from "../../util/metodosUteis";
import CardSimples from "../../components/card/CardSimples";


const LancamentoManual = ({loadData, cargos, departamentos, vinculos, eventos, update, colaboradores}) => {

    useEffect(() => {
        loadData('cargos')
        loadData('departamentos')
        loadData('vinculos')
        loadData('eventos')
        loadData('colaboradores')
    }, [])

    const renderRowValue = v =>
        eventos && Object.assign({nome: <ColaboradorComFoto nome={v.nome} foto={v.foto} style={{minWidth: '25rem'}}/>}, arrayToObj(eventos.filter(v => v.campoAtivo).map(v => ({
            [v.nome]: <div className={'linha-valor'}>
                <Input placeholder={'0,00'} style={{maxWidth: '15rem',}}/>
                <i className="far fa-trash-alt"/>
            </div>
        }))))

    const eventoHandleChange = (v, {obj}) => {
        update('eventos', {...obj, campoAtivo: v})
    }

    return (
        <>
            <AlignRight>
                <Buttom color={'blue'} label={'Salvar e avancar'} style={{marginTop: '2rem'}}/>
            </AlignRight>
            <CardBorda start title={'Lancamentos'} style={{marginTop: '.5rem'}}>
                <div className={'lancamento-manual-filtros'}>
                    <Select correcaoList label={'Filtrar por cargo'} options={cargos}/>
                    <Select correcaoList label={'Filtrar por departamento'} options={departamentos}/>
                    <Select correcaoList label={'Filtrar por vinculo'} options={vinculos}/>
                    <div className={'botao-campos-lancamento'}>
                        <ButtomSelectOptions color={'blue'} label={'Campos de lancamento'} options={eventos && eventos.map(v => ({nome: v.nome, value: v.campoAtivo, obj: v}))}
                                             onChange={eventoHandleChange}/>
                    </div>
                </div>
                <div className={'table-scroll'}>
                    <TableFolhaPagamento borda header={['Nome'].concat(eventos.filter(v => v.campoAtivo).map(v => v.nome))}
                                         keys={['nome'].concat(eventos.filter(v => v.campoAtivo).map(v => v.nome))}
                                         data={colaboradores.map(v => renderRowValue(v))}/>
                </div>
            </CardBorda>
        </>
    );
};

const mapStateToProps = state => ({
    cargos: state.serverValues.cargos,
    departamentos: state.serverValues.departamentos,
    vinculos: state.serverValues.vinculos,
    eventos: state.serverValues.eventos,
    colaboradores: state.serverValues.colaboradores,
})

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: (value, entity) => dispatch(update(value, entity, {list: true})),
})

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoManual);

