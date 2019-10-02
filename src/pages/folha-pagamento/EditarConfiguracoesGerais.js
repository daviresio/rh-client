import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";
import {simNaoOptions} from "../../config/defaultValues";
import {loadList} from "../../store/actions/serverActions";

let EditarConfiguracoesGerais = ({router, handleSubmit, changeRoute, loadData, calculosProporcionalidades, tiposCalculosHorasExtras}) => {

    const submit = values => {

    };

    useEffect(() => {
        loadData('calculos-proporcionalidades', 'calculosProporcionalidades');
        loadData('tipos-calculos-horas-extras', 'tiposCalculosHorasExtras')
    }, []);

    return (
        <>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/folha/configuracao/')}/>
            <CardBorda start title={'Editar configuracoes gerais'} style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)}
                      className={'form-editar-configuracoes-gerais'}>
                    <div>
                        <Field component={SelectRow} name={'desoneracao'} label={'Desoneracao'}
                               options={simNaoOptions}/>
                        <Field component={InputRow} name={'rat'} label={'RAT'}/>
                        <Field component={InputRow} name={'terceiros'} label={'Terceiros'}/>
                        <Field component={InputRow} name={'incra'} label={'% Incra'}/>
                    </div>
                    <div>
                        <Field component={SelectRow} name={'calculoDeProporcionalidade'}
                               label={'Cálculo de Proporcionalidade'} options={calculosProporcionalidades}/>
                        <Field component={InputRow} name={'fap'} label={'FAP'}/>
                        <Field component={InputRow} name={'porcentagemEmpresa'} label={'% Empresa'}/>
                        <Field component={SelectRow} name={'tipoDeCalculoHorasExtras'}
                               label={'Tipo de cálculo de horas extras'} options={tiposCalculosHorasExtras}/>
                    </div>
                </form>
                <div className={'botao-direita'}>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </div>
            </CardBorda>
        </>
    );
};

EditarConfiguracoesGerais = reduxForm({form: "editarConfiguracoesGerais"})(EditarConfiguracoesGerais);

const mapStateToProps = state => ({
    router: state.router,
    calculosProporcionalidades: state.serverValues.calculosProporcionalidades,
    tiposCalculosHorasExtras: state.serverValues.tiposCalculosHorasExtras,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarConfiguracoesGerais);
