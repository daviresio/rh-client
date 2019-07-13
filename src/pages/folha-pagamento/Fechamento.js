import React, {useEffect, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import Select from "../../components/form/Select";
import CardLateral from "../../components/card/CardLateral";
import CardLateralSimple from "../../components/card/CardLateralSimple";
import SelectRow from "../../components/form/SelectRow";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import {fechamentoFolhaMesAno} from "../../config/defaultValues";
import {loadList, save} from "../../store/actions/serverActions";
import {adicionaZero, formateDateFull, parseDate} from "../../util/metodosUteis";

const Fechamento = ({changeRoute, save, loadData, fechamentoFolhas}) => {

    const [dataFechamento, setDataFechamento] = useState(null)

    const createFechamento = () => {
        save({dataReferencia: dataFechamento} ,{redirect: {route: '/folha/tipo-lancamento', id: true}, target: 'fechamentoFolhas'})
    }

    useEffect(()=> {
        loadData('fechamento-folhas', 'fechamentoFolhas')
    }, [])

    return (
        <CardSimples>
            <SelectRow label={'Iniciar fechamento de folha do período'} detail={<Buttom color={'blue'} label={'Iniciar'}
            onClick={createFechamento}  />} options={fechamentoFolhaMesAno} {...{input: {onChange: v => setDataFechamento(v)}}}/>

            {fechamentoFolhas && fechamentoFolhas.map(v =>
                <CardLateralSimple key={v.id} text={`Fechamento do mes ${adicionaZero(parseDate(v.dataReferencia).getMonth())} de ${parseDate(v.dataReferencia).getFullYear()}`}
                                                                              secondText={`iniciado em ${formateDateFull(v.dataInicio)}`} />)}
        </CardSimples>
    );
};

const mapStateToProps = state => ({
    fechamentoFolhas: state.serverValues.fechamentoFolhas,
})

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('fechamento-folhas', value, options)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fechamento);
