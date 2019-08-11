import React from 'react';
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";
import {periodoRecorrencia, simNaoOptions, tiposLembretes} from "../../config/defaultValues";
import RadioButton from "../../components/form/RadioButton";
import DatePicker from "../../components/form/DatePicker";
import {changeRoute} from "../../store/actions/routerActions";
import CenterContent from "../../components/util/CenterContent";
import {save} from "../../store/actions/serverActions";
import AlignRight from "../../components/util/AlignRight";

let LembretesCadastro = ({changeRoute, router, handleSubmit, save}) => {

    const submit = values => {
        save(values, {redirect: {route: '/comunicacao/lembretes'}})
    };

    return (
        <>
            <Buttom color={'gray'} label={'Ver todos'} style={{marginTop: '2rem'}} onClick={() => changeRoute('/comunicacao/lembretes')}/>
            <CardSimples style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field component={SelectRow} name={'categoria'} label={'Cagetoria'} options={tiposLembretes}
                           required/>
                    <Field component={InputRow} name={'titulo'} label={'Titulo'} required/>
                    <Field component={InputRow} name={'descricao'} label={'Descricao'}/>
                    <CenterContent style={{flexDirection: 'column', alignItems: 'center'}}>
                        <div className={'title-2'}>{'Quem recebera os lembretes?'}</div>

                        <Field component={RadioButton} type={'radio'} value={true} normalize={v => v === "TRUE"}
                               label={'Todos os colaboradores'} name={"enviaParaTodosColaboradores"}/>
                        <div style={{minWidth: '14.3rem'}}>
                            <Field component={RadioButton} type={'radio'} value={false} normalize={v => v === "TRUE"}
                                   label={'Filtrar'} name={"enviaParaTodosColaboradores"}/>
                        </div>
                    </CenterContent>
                    <Field component={SelectRow} name={'lembreteRecorrente'} label={'Esse lembrete e recorrente?'} options={simNaoOptions}
                           required/>
                    <Field component={SelectRow} name={'periodo'} label={'Periodo'} options={periodoRecorrencia}
                           required/>
                    <Field component={DatePicker} name={'inicio'} label={'Quando ele ocorrera?'}/>
                    <AlignRight>
                        <Buttom color={'green'} label={'salvar'} type={'submit'} style={{marginTop: '2rem'}}/>
                    </AlignRight>
                </form>
            </CardSimples>
        </>
    );
};

LembretesCadastro = reduxForm({form: 'lembrete', enableReinitialize: true})(LembretesCadastro);

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {
        enviaParaTodosColaboradores: true,
    }
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('lembretes', value, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LembretesCadastro);
