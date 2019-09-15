import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import AlignRight from "../../components/util/AlignRight";
import Select from "../../components/form/Select";
import {tiposStatusFerias} from "../../config/defaultValues";
import styled from "styled-components";
import {search, updateAndRedirect} from "../../store/actions/serverActions";

let ProcessoFeriasStep1 = ({handleSubmit, search, match, ferias, update, ...props}) => {

    useEffect(() => {
        search(match.params.id)
    }, []);

    const submit = v => {
        update({...ferias, ...v}, {route: '/ferias/processo/aprovacao-rh/' + match.params.id, field: 'feria'})
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={'sub-page-ferias'}>
            <h1 className={'title'}>{'Aprovacao do Gestor'}</h1>
            <h3 style={{marginTop: '.6rem', marginBottom: '2rem'}}>Aprove ou desaprove a solicitacao de ferias feita pelo colaborador</h3>

            <div className={'campos-inline'}>
                <div className={'campo-bold'}>{'Gestor:'}</div>
                <div className={'campo-light'}>{''}</div>
            </div>

            <div className={'campos-inline'} style={{marginTop: '1rem', marginBottom: '2rem'}}>
                <div className={'campo-bold'}>{'E-mail:'}</div>
                <div className={'campo-light'}>{''}</div>
            </div>
            <LimitField>
                <Field name={'aprovadoPeloGestorConcluido'} component={Select} label={'Status da aprovacao'} options={tiposStatusFerias} correcaoList/>
            </LimitField>
            <AlignRight style={{marginTop: '10rem'}}>
                <Buttom color={'blue'} label={'Salvar e avancar'} type={'submit'}/>
            </AlignRight>
        </form>
    );
};

ProcessoFeriasStep1 = reduxForm({form: 'processoFerias1', enableReinitialize: true})(ProcessoFeriasStep1);

const mapStateToProps = state => ({
    ferias: state.serverValues.feria,
    initialValues: {
        aprovadoPeloGestorConcluido: state.serverValues.feria.aprovadoPeloGestorConcluido,
    }
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('ferias', id, 'feria')),
    update: (value, redirect) => dispatch(updateAndRedirect('ferias', value, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFeriasStep1);


const LimitField = styled.div`
max-width: 50rem;
margin-left: -1rem;
`;
