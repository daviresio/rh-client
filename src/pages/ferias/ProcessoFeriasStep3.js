import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import styled from "styled-components";
import TextArea from "../../components/form/TextArea";
import {loadList, search, updateAndRedirect} from "../../store/actions/serverActions";
import {changeRoute} from "../../store/actions/routerActions";
import {formateDateFull, getValue, mapAndGetId} from "../../util/metodosUteis";
import MultipleSelect from "../../components/form/MultipleSelect";

let ProcessoFeriasStep3 = ({handleSubmit, search, match, ferias, update, contadoresList, loadData, changeRoute, ...props}) => {

    useEffect(() => {
        search(match.params.id);
        loadData('contadores')
    }, []);

    const submit = v => {
        console.log(v);
        update({...ferias, ...v}, {route: '/ferias/processo/calculos-contabilidade/' + match.params.id, field: 'feria'})
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={'sub-page-ferias'}>
            <h1 className={'title'}>{'Envio de informacoes para contabilidade'}</h1>

            <LimitField>
                <Field name={'contadores'} component={MultipleSelect} label={'Qual contador recebera o pacote de informacoes?'} options={contadoresList}/>
            </LimitField>
            <LimitField>
                <Field name={'comentarioParaContador'} component={TextArea} label={'Comentario exclusivo para o contador'}/>
            </LimitField>
            <Buttom color={'green'} label={'Adicionar Contador'} onClick={() => changeRoute('/configuracao/contabilidade')}/>

            <h3 className={'campo-light'} style={{marginTop: '2rem', marginBottom: '2rem'}}>Qual informacao ele recebera?</h3>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Nome:'}</div>
                <div className={'campo-light'}>{getValue('colaborador.nome', ferias)}</div>
            </div>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'CPF:'}</div>
                <div className={'campo-light'}>{getValue('colaborador.cpf', ferias)}</div>
            </div>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Periodo:'}</div>
                <div
                    className={'campo-light'}>{`De: ${formateDateFull(getValue('inicioPeriodoAquisitivo', ferias))} ate: ${formateDateFull(getValue('finalPeriodoAquisitivo', ferias))}`}</div>
            </div>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Dias de ferias:'}</div>
                <div className={'campo-light'}>{getValue('diasDeFerias', ferias)}</div>
            </div>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Abono Pecuniario:'}</div>
                <div className={'campo-light'}>{getValue('diasDeAbono', ferias)}</div>
            </div>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Justificativa:'}</div>
                <div className={'campo-light'}>{getValue('justificativa', ferias)}</div>
            </div>

            <AlignRight style={{marginTop: '10rem'}}>
                <ButtonContent>
                    <div className={'required'}>{'*Enviar as informacoes para a contabilidade nao avanca o processo de ferias'}</div>
                    <Buttom color={'green'} label={'Enviar informacoes para contabilidade'}/>
                </ButtonContent>
            </AlignRight>

            <AlignRight style={{marginTop: '5rem'}}>
                <Buttom color={'blue'} label={'Salvar e avancar'} type={'submit'}/>
            </AlignRight>
        </form>
    );
};

ProcessoFeriasStep3 = reduxForm({form: 'processoFerias3', enableReinitialize: true})(ProcessoFeriasStep3);


const mapStateToProps = state => ({
    ferias: state.serverValues.feria,
    contadoresList: state.serverValues.contadores,
    initialValues: {
        contadores: mapAndGetId(getValue('contadores', state.serverValues.feria)),
        comentarioParaContador: state.serverValues.feria.comentarioParaContador,
    }
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('ferias', id, 'feria')),
    update: (value, redirect) => dispatch(updateAndRedirect('ferias/enviar-para-contabilidade', value, redirect)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    changeRoute: route => dispatch(changeRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFeriasStep3);


const LimitField = styled.div`
max-width: 50rem;
margin-left: -1rem;
`;


const ButtonContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;
