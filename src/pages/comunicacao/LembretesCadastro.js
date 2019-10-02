import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";
import {simNaoOptions} from "../../config/defaultValues";
import RadioButton from "../../components/form/RadioButton";
import DatePicker from "../../components/form/DatePicker";
import {changeRoute} from "../../store/actions/routerActions";
import CenterContent from "../../components/util/CenterContent";
import {loadList, save, search, update} from "../../store/actions/serverActions";
import AlignRight from "../../components/util/AlignRight";
import {getValue} from "../../util/metodosUteis";

let LembretesCadastro = ({
                             changeRoute, router, handleSubmit, save, update, match, search, loadData, categoriasLembretes,
                             periodosRecorrenciasLembretes
                         }) => {


    useEffect(() => {
        if (match.params.id) {
            search(match.params.id)
        }
        loadData('categorias-lembretes', 'categoriasLembretes');
        loadData('periodos-recorrencias', 'periodosRecorrenciasLembretes')
    }, []);

    const submit = values => {
        values.id ? update(values, {redirect: {route: '/comunicacao/lembretes'}}) : save(values, {redirect: {route: '/comunicacao/lembretes'}})
    };

    return (
        <>
            <Buttom color={'gray'} label={'Ver todos'} style={{marginTop: '2rem'}} onClick={() => changeRoute('/comunicacao/lembretes')}/>
            <CardSimples style={{marginTop: '.5rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field component={SelectRow} name={'categoria'} label={'Categoria'} options={categoriasLembretes}
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
                    <Field component={SelectRow} name={'periodoRecorrencia'} label={'Periodo'}
                           options={periodosRecorrenciasLembretes}
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
        ...state.serverValues.lembrete, categoria: getValue('categoria.id', state.serverValues.lembrete),
        periodoRecorrencia: getValue('periodoRecorrencia.id', state.serverValues.lembrete)
    },
    categoriasLembretes: state.serverValues.categoriasLembretes,
    periodosRecorrenciasLembretes: state.serverValues.periodosRecorrenciasLembretes,
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    save: (value, options) => dispatch(save('lembretes', value, options)),
    update: (value, options) => dispatch(update('lembretes', value, options)),
    search: id => dispatch(search('lembretes', id, 'lembrete')),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LembretesCadastro);
