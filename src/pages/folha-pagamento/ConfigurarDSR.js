import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import {fechamentoFolhaMesAno, meses, quantidadeParcelasDecimoTerceiro} from "../../config/defaultValues";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import InputRow from "../../components/form/InputRow";
import Divided from "../../components/util/Divided";
import CardSimples from "../../components/card/CardSimples";
import {loadList, update, remove} from "../../store/actions/serverActions";
import {formateDateFull} from "../../util/metodosUteis";
import Checkbox from "../../components/form/Checkbox";
import Delete from "../../components/util/Delete";
import Feriado from "../../modais/Feriado";
import {changeModalVisible} from "../../store/actions/modalActions";

let ConfigurarDsr = ({router, handleSubmit, changeRoute, loadData, feriados, update, remove, modal, openModal}) => {

    const submit = values => {

    }

    const changeDsrValue = v => update('feriados', v)

    const deletar = v => remove('feriados', v)

    const renderRow = () => {
        if (!feriados) return
        const render = feriados.map(v =>
            <div className={'item-feriado'} key={v.id}>
                <div>{v.nome}</div>
                <div>{formateDateFull(v.data).substring(0, 5)}</div>
                <Checkbox value={v.dsr} onChange={value => changeDsrValue({...v, dsr: value})}/>
                <Delete onClick={()=> deletar(v.id)}/>
            </div>
        )
        render.unshift(
            <div key={-1} className={'item-feriado'} style={{border: 'none'}}>
                <div className={'item-title'}>Titulo</div>
                <div className={'item-title'}>Data</div>
                <div className={'item-title'}>DSR</div>
            </div>
        )
        return render
    }

    useEffect(() => {
        loadData('feriados')
    }, [])

    const diasUteis = () => {}
    return (
        <>
            <Feriado visible={modal.feriado.visible}/>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/folha/configuracao/')}/>
            <CardBorda title={'Configurar DSR'} style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field component={SelectRow} name={'mesEAno'} label={'Mes e Ano'} options={fechamentoFolhaMesAno} value={new Date(2019, 7, 0, 0, 0, 0)}/>
                    <Field component={InputRow} name={'diasUteis'} label={'Dias úteis + Sábado'} disabled value={diasUteis}/>
                    <Field component={InputRow} name={'diasNaoUteis'} label={'Domingos e Feriados'} disabled/>
                    <Divided/>
                    <h1 className={'title'}>Feriados</h1>
                    <CardSimples start>
                        {renderRow()}
                    </CardSimples>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                        <Buttom color={'green'} label={'Adicionar feriado'} onClick={()=>openModal('feriado')}/>
                        <Buttom color={'red'} label={'Resertar padrao'} onClick={()=> loadData('/feriados/restaure', 'feriados')}/>
                    </div>
                </form>
            </CardBorda>
        </>
    );
};

ConfigurarDsr = reduxForm({form: "configurarDecimoTerceiro"})(ConfigurarDsr)

const mapStateToProps = state => ({
    router: state.router,
    feriados: state.serverValues.feriados,
    modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: (entity, value, options) => dispatch(update(entity, value, options)),
    remove: (entity, value) => dispatch(remove(entity, value)),
    openModal: modal => dispatch(changeModalVisible(modal, true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurarDsr);
