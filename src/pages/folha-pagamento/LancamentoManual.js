import React, {useEffect, useState} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";
import ButtomSelectOptions from "../../components/ButtomSelectOptions";
import AlignRight from "../../components/util/AlignRight";
import {connect} from "react-redux";
import {
    loadList,
    save,
    search,
    update,
    updateAndRedirect,
    updateAndReloadOtherEntity
} from "../../store/actions/serverActions";
import TableManual from "../../components/table/TableManual";
import {change, Field, FieldArray, formValues, formValueSelector, reduxForm} from "redux-form";
import {changeRoute} from "../../store/actions/routerActions";


const currencyNormalize = value => {
    if(value === undefined || value === null || value.toString().trim() === '') return value

    let v = value.toString().replace(/[^\d\.,]/g, '')
    v = v.replace(/\./g, ',')
    const qtdVirgulas = v.toString().match(/,/g)
    if((qtdVirgulas && qtdVirgulas.length > 1 && v.match(/,$/)) || v.match(/,\d{3}/)) v = v.substring(0, v.length - 1)
    return v
}

const toNumber = value => {
    let v = value.toString().replace(/,/g, '.')
    return Number(v)
}

const renderRowValue = ({fields}) => {

    return fields.map((field, index) => {

            return <tr key={index}>
                <td><ColaboradorComFoto key={index} nome={fields.get(index).nome} foto={fields.get(index).foto}
                                        style={{minWidth: '25rem'}}/></td>

                <FieldArray name={`${field}.fechamentoFolhaItens`} component={renderInput} />
            </tr>
        }
    ).filter(x => x !== null)
}

const renderInput = ({fields}) => {
    return fields.map((field, index) => {

        if(!fields.get(index).evento.campoAparece) return null
        return <td key={index} className={'linha-valor-table'}>

            <Field name={`${field}.valor`} component={Input} style={{maxWidth: '15rem'}} normalize={currencyNormalize} currency={true} />
            <i className="far fa-trash-alt"
               onClick={() => {}}/>
        </td>})
}

//dispatch(change('lancamentoManualFolhaPagamento', `${field}.valor`, 0))


let LancamentoManual = ({loadData, cargos, departamentos, vinculos, update, updateFieldVisible, handleSubmit, dispatch, changeRoute, match, search, fechamentoFolha, formValues, ...props}) => {

    useEffect(() => {
        search(match.params.id)
        loadData('cargos');
        loadData('departamentos');
        loadData('vinculos');
        loadData('eventos?campoAtivo=true', 'eventos');
    }, []);

    const eventoHandleChange = (v, {obj}) => {
        updateFieldVisible({...obj, campoAparece: v}, match.params.id)
    };

    const getEventos = (i = 0) => {
        if(!fechamentoFolha || !fechamentoFolha.colaboradores) return []
        if(fechamentoFolha.colaboradores[i] === undefined) return []
        return fechamentoFolha.colaboradores[i].fechamentoFolhaItens.map(e => e.evento).filter(x => x.campoAparece)
    }

    const listEventos = () => {
        if(!fechamentoFolha || !fechamentoFolha.colaboradores) return []
        if(fechamentoFolha.colaboradores[0] === undefined) return []
        return fechamentoFolha.colaboradores[0].fechamentoFolhaItens.map(e => e.evento)
    }

    const submit = ({colaboradores}) => {
        const value = colaboradores.map(x => x.fechamentoFolhaItens.map(v => v))
        let arr = []
        for(let i = 0; i < value.length; i++) {
            arr = arr.concat(value[i])
        }
        update(arr, {route: `/folha/lancamento/conferencia/${match.params.id}`, target: 'fechamentoFolhas'})
    }

    const sumEvento = id => {
        let valor = 0
        if(!formValues || !formValues.length) return valor

        formValues.forEach(v => {
            const val = v.fechamentoFolhaItens.filter(x => x.FechamentoEventoId === id)[0]
            if(typeof val === 'object' && Object.keys(val).length > 0) valor = valor + toNumber(val.valor)
        })
        return isNaN(valor) ? 0 : valor
    }

    return (
        <>
        <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
            <AlignRight>
                <Buttom color={'blue'} label={'Salvar e avancar'} style={{marginTop: '2rem'}} type={'submit'}/>
            </AlignRight>
            <CardBorda start title={'Lancamentos'} style={{marginTop: '.5rem'}}>
                    <div className={'lancamento-manual-filtros'}>
                        <Select correcaoList label={'Filtrar por cargo'} options={cargos}/>
                        <Select correcaoList label={'Filtrar por departamento'} options={departamentos}/>
                        <Select correcaoList label={'Filtrar por vinculo'} options={vinculos}/>
                        <div className={'botao-campos-lancamento'}>
                            <ButtomSelectOptions color={'blue'} label={'Campos de lancamento'}
                                                 options={listEventos().map(v => ({
                                                     nome: v.nome,
                                                     value: v.campoAparece,
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
                                             <FieldArray name={'colaboradores'} component={renderRowValue}/>
                                             <tr className={'table-folha-totais'}>
                                                 {[<td key={-1} className={'table-folha-totais'}/>].concat(
                                                     getEventos().map((v, i) => {
                                                         return <td key={i} className={'table-folha-totais'}>
                                                             <span className={'label'}>{`Total ${v.nome}`}</span>
                                                             <span className={'value'}>{`R$: ${sumEvento(v.id)}`}</span>
                                                         </td>
                                                     }))}</tr>
                                         </>
                                     }
                        />
                    </div>
            </CardBorda>
        </form>
        </>
    );
};

LancamentoManual = reduxForm({form: 'lancamentoManualFolhaPagamento', enableReinitialize: true, })(LancamentoManual)

const mapStateToProps = state => {
        const selector = formValueSelector('lancamentoManualFolhaPagamento')
    return {
        cargos: state.serverValues.cargos,
        departamentos: state.serverValues.departamentos,
        vinculos: state.serverValues.vinculos,
        eventos: state.serverValues.eventos,
        initialValues: state.serverValues.fechamentoFolha,
        fechamentoFolha: state.serverValues.fechamentoFolha,
        formValues: selector(state, 'colaboradores')
    }

};

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: (value, redirect) => dispatch(updateAndRedirect('fechamento-folhas-itens', value, redirect)),
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('fechamento-folhas-itens', value, options)),
    search: id => dispatch(search('fechamento-folhas', id, 'fechamentoFolha')),
    updateFieldVisible: (value, idReload) => dispatch(updateAndReloadOtherEntity('eventos', value, {entity: 'fechamento-folhas', id: idReload, target: 'fechamentoFolha'})),

});

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoManual);
