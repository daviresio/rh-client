import React from 'react';
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import InputRow from "../../components/form/InputRow";
import {Field, reduxForm} from "redux-form";
import SelectRow from "../../components/form/SelectRow";
import DatePicker from "../../components/form/DatePicker";
import RadioButton from "../../components/form/RadioButton";
import AlignRight from "../../components/util/AlignRight";
import CenterContent from "../../components/util/CenterContent";

let CadastroFeriasColetivas = ({changeRoute, handleSubmit}) => {

    const submit = value => {}

    return (
        <Page title={'Criar ferias coletivas'}>
        <Buttom color={'gray'} label={'Voltar'} onClick={()=> changeRoute('/ferias')}/>
        <CardSimples>
            <form onSubmit={handleSubmit(submit)}>
                <Field component={InputRow} name={'nome'} label={'Nome'}/>
                <Field component={SelectRow} name={'departamento'} label={'Departamento'}/>
                <Field component={DatePicker} name={'dataInicial'} label={'De'}/>
                <Field component={DatePicker} name={'dataFinal'} label={'Ate'}/>
                <Field component={InputRow} name={'justificativa'} label={'Justificativa'}/>
                <CenterContent>
                    Desconta feriados?
                    <Field component={RadioButton} name={'descontaFeriado'} label={'Sim'} />
                    <Field component={RadioButton} name={'descontaFeriado'} label={'Nao'} />
                    Caso queira ver quais feriados estao sendo descontados, clique aqui
                </CenterContent>
                <Field component={SelectRow} name={'contador'} label={'Contador'} detail={'Caso sua empresa nao tenha nenhum contador cadastrado, clique aqui'}/>
                <AlignRight>
                    <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'}/>
                    <Buttom color={'green'} label={'Salvar'} type={'submit'}/>
                </AlignRight>
            </form>
        </CardSimples>
        </Page>
    );
};

CadastroFeriasColetivas = reduxForm({form: 'feriasColetivas', enableReinitialize: true})(CadastroFeriasColetivas)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CadastroFeriasColetivas);
