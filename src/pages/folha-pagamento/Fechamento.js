import React, {useEffect} from 'react';
import CardSimples from "../../components/card/CardSimples";
import CardLateralSimple from "../../components/card/CardLateralSimple";
import SelectRow from "../../components/form/SelectRow";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import {fechamentoFolhaMesAno} from "../../config/defaultValues";
import {loadList, save} from "../../store/actions/serverActions";
import {adicionaZero, formateDateFull, parseDate} from "../../util/metodosUteis";
import {Field, reduxForm} from "redux-form";

let Fechamento = ({changeRoute, save, loadData, fechamentoFolhas, handleSubmit}) => {

    const submit = v => {
        save(v, {redirect: {route: '/folha/lancamento/tipo-lancamento/', id: true}, target: 'fechamentoFolhas'})
    };

    useEffect(()=> {
        loadData('fechamento-folhas', 'fechamentoFolhas')
    }, []);

    return (
        <CardSimples>
            <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                <Field name={'dataReferencia'} component={SelectRow} label={'Iniciar fechamento de folha do período'}
                       detail={<Buttom color={'blue'} label={'Iniciar'} type={'submit'}/>}
                       options={fechamentoFolhaMesAno}/>

            {fechamentoFolhas && fechamentoFolhas.map(v =>
                <CardLateralSimple key={v.id} text={`Fechamento do mes ${adicionaZero(parseDate(v.dataReferencia).getMonth())} de ${parseDate(v.dataReferencia).getFullYear()}`}
                                   secondText={`iniciado em ${formateDateFull(v.dataInicio)}`} onClick={() => changeRoute(`/folha/lancamento/tipo-lancamento/${v.id}`)}/>)}
            </form>
        </CardSimples>
    );
};

Fechamento = reduxForm({form: 'iniciarFechamentoFolha', enableReinitialize: true})(Fechamento);

const mapStateToProps = state => ({
    fechamentoFolhas: state.serverValues.fechamentoFolhas,
});

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('fechamento-folhas', value, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fechamento);
