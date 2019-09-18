import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import Select from "../../components/form/Select";
import Input from "../../components/form/Input";
import ColaboradorComFoto from "../../components/util/ColaboradorComFoto";
import ButtomSelectOptions from "../../components/ButtomSelectOptions";
import AlignRight from "../../components/util/AlignRight";
import {connect} from "react-redux";
import {loadList, update} from "../../store/actions/serverActions";
import {arrayToObj} from "../../util/metodosUteis";
import TableManual from "../../components/table/TableManual";
import {Field, FieldArray, reduxForm} from "redux-form";


let LancamentoManual = ({loadData, cargos, departamentos, vinculos, eventos, update, colaboradores, handleSubmit}) => {

    useEffect(() => {
        loadData('cargos');
        loadData('departamentos');
        loadData('vinculos');
        loadData('eventos?campoAtivo=true', 'eventos');
        loadData('colaboradores')
    }, []);

    const renderRow = v =>
        eventos && Object.assign({nome: <ColaboradorComFoto nome={v.nome} foto={v.foto} style={{minWidth: '25rem'}}/>}, arrayToObj(eventos.filter(v => v.campoAtivo).map(v => ({
            [v.nome]: <div className={'linha-valor'}>
                <Input placeholder={'0,00'} style={{maxWidth: '15rem',}}/>
                <i className="far fa-trash-alt"/>
            </div>
        }))));

    const eventoHandleChange = (v, {obj}) => {
        update('eventos', {...obj, campoAtivo: v})
    };

    const submit = v => {

    }

    const renderRowValue = ({fields}) => {

        return fields.map((field, index) =>
        <tr key={index}>
            <td><ColaboradorComFoto nome={fields.get(index).nome} foto={fields.get(index).foto} style={{minWidth: '25rem'}}/></td>
            {eventos && eventos.map(x =>
            <td><Field name={`${field}.${x.codigo}`} component={Input} style={{maxWidth: '15rem'}} /> <i className="far fa-trash-alt"/> </td>
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
                            <ButtomSelectOptions color={'blue'} label={'Campos de lancamento'} options={eventos && eventos.map(v => ({nome: v.nome, value: v.campoAtivo, obj: v}))}
                                                 onChange={eventoHandleChange}/>
                        </div>
                    </div>
                    <div className={'table-scroll'}>
                        <TableManual tableHeader={
                            <tr>
                                {['Nome'].concat(eventos.map(v => v.nome)).map(v => <th key={v}>{v}</th>)}
                            </tr>
                        }
                                     tableBody={
                                         <FieldArray name={'valores'} component={renderRowValue} />
                                     }
                        />
                    </div>
                </form>
            </CardBorda>
        </>
    );
};

LancamentoManual = reduxForm({form: 'lancamentoManualFolhaPagamento', enableReinitialize: true})(LancamentoManual)

const mapStateToProps = state => ({
    cargos: state.serverValues.cargos,
    departamentos: state.serverValues.departamentos,
    vinculos: state.serverValues.vinculos,
    eventos: state.serverValues.eventos,
    colaboradores: state.serverValues.colaboradores,
    initialValues: {
        valores: state.serverValues.colaboradores,
    }
});

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: (value, entity) => dispatch(update(value, entity, {list: true})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LancamentoManual);

{/*<TableFolhaPagamento borda header={['Nome'].concat(eventos.filter(v => v.campoAtivo).map(v => v.nome))}
                                         keys={['nome'].concat(eventos.filter(v => v.campoAtivo).map(v => v.nome))}
                                         data={colaboradores.map(v => renderRowValue(v))}/>*/}
