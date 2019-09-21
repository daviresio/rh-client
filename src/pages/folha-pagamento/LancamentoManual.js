import React, {useEffect, useState} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";
import ButtomSelectOptions from "../../components/ButtomSelectOptions";
import AlignRight from "../../components/util/AlignRight";
import {connect} from "react-redux";
import {loadList, save, update} from "../../store/actions/serverActions";
import {arrayToObj, randomId} from "../../util/metodosUteis";
import TableManual from "../../components/table/TableManual";
import {change, Field, FieldArray, formValueSelector, reduxForm} from "redux-form";
import {changeRoute} from "../../store/actions/routerActions";


let LancamentoManual = ({loadData, cargos, departamentos, vinculos, eventos, save, colaboradores, handleSubmit, dispatch, changeRoute, match}) => {

    const [eventosAtivos, setEventosAtivos] = useState()

    useEffect(() => {
        loadData('cargos');
        loadData('departamentos');
        loadData('vinculos');
        loadData('eventos?campoAtivo=true', 'eventos');
        loadData('colaboradores')
    }, []);

    useEffect(() => {
        setEventosAtivos(eventos)
    }, [eventos])

    const eventoHandleChange = (v, {obj}) => {
        // update('eventos', {...obj, campoAtivo: v})
        setEventosAtivos(prev => {
            const index = prev.findIndex(v => v.id === obj.id)
            const newObj = Object.assign({}, {...prev[index], campoAtivo: v})
            const copy = prev.slice(0)
            copy.splice(index, 1, newObj)
            return copy
        })
    };

    const getEventos = () => eventosAtivos ? eventosAtivos.filter(o => o.campoAtivo) : []

    const submit = ({valores}) => {
        const data = []
        const v = valores.forEach(c => {
            const {eventos} = c
            Object.keys(eventos).forEach(e => {
                data.push({
                    FechamentoEventoId: Number(e.replace('a', '')),
                    FechamentoColaboradorId: c.id,
                    FechamentoId: Number(match.params.id),
                    valor: Number(eventos[e]),
                })
            })
        })
        console.log(data)
        save(data, {redirect: {route: `/folha/lancamento/conferencia/${match.params.id}`}, target: 'fechamentoFolhas'})
    }

    const renderRowValue = ({fields}) => {

        return fields.map((field, index) =>
            <tr key={index}>
                <td><ColaboradorComFoto key={index} nome={fields.get(index).nome} foto={fields.get(index).foto}
                                        style={{minWidth: '25rem'}}/></td>
                {getEventos().filter(o => o.campoAtivo).map((x, i) =>
                    <td key={i} className={'linha-valor-table'}>
                        <Field name={`${field}.eventos.${'a' + x.id}`} component={Input}
                               style={{maxWidth: '15rem'}}/>
                        <i className="far fa-trash-alt"
                           onClick={() => dispatch(change('lancamentoManualFolhaPagamento', `${field}.valores.${'a' + x.codigo}`, ''))}/>
                    </td>
                )}
            </tr>
        )
    }

    return (
        <>
            <AlignRight>
                <Buttom color={'blue'} label={'Salvar e avancar'} style={{marginTop: '2rem'}}/>
            </AlignRight>
            <CardBorda start title={'Lancamentos'} style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <div className={'lancamento-manual-filtros'}>
                        <Select correcaoList label={'Filtrar por cargo'} options={cargos}/>
                        <Select correcaoList label={'Filtrar por departamento'} options={departamentos}/>
                        <Select correcaoList label={'Filtrar por vinculo'} options={vinculos}/>
                        <div className={'botao-campos-lancamento'}>
                            <ButtomSelectOptions color={'blue'} label={'Campos de lancamento'}
                                                 options={eventosAtivos && eventosAtivos.map(v => ({
                                                     nome: v.nome,
                                                     value: v.campoAtivo,
                                                     obj: v
                                                 }))}
                                                 onChange={eventoHandleChange}
                                                 actionButton={()=> changeRoute('/folha/configuracao/adicionar-evento')}
                            />
                        </div>
                    </div>
                    <div className={'table-scroll'}>
                        <TableManual tableHeader={
                            <tr>
                                {['Nome'].concat(getEventos().map(v => v.nome)).map(v => <th key={v}>{v}</th>)}
                            </tr>
                        }
                                     tableBody={
                                         <>
                                             <FieldArray name={'valores'} component={renderRowValue}/>
                                             <tr className={'table-folha-totais'}>
                                                 {[<td key={-1} className={'table-folha-totais'}/>].concat(
                                                     getEventos().map((v, i) => {
                                                         return <td key={i} className={'table-folha-totais'}>
                                                             <span className={'label'}>{`Total ${v.nome}`}</span>
                                                             <span className={'value'}>{`R$: ${'0,00'}`}</span>
                                                         </td>
                                                     }))}</tr>
                                         </>
                                     }
                        />
                    </div>
                    <Buttom label={'enviar'} type={'submit'}/>
                </form>
            </CardBorda>
        </>
    );
};

LancamentoManual = reduxForm({form: 'lancamentoManualFolhaPagamento', enableReinitialize: true})(LancamentoManual)

const mapStateToProps = state => {

    return {
        cargos: state.serverValues.cargos,
        departamentos: state.serverValues.departamentos,
        vinculos: state.serverValues.vinculos,
        eventos: state.serverValues.eventos,
        colaboradores: state.serverValues.colaboradores,
        initialValues: {
            valores: state.serverValues.colaboradores,
        },

    }

};

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: (value, entity) => dispatch(update(value, entity, {list: true})),
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('fechamento-folhas/item', value, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoManual);
