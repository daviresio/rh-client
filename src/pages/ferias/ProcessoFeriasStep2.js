import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import Select from "../../components/form/Select";
import {tiposStatusFerias} from "../../config/defaultValues";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import styled from "styled-components";
import {search, updateAndRedirect} from "../../store/actions/serverActions";

let ProcessoFeriasStep2 = ({handleSubmit, search, match, ferias, update, ...props}) => {

    useEffect(() => {
        search(match.params.id)
    }, []);

    const submit = v => {
        update({...ferias, ...v}, {route: '/ferias/processo/informacoes-contabilidade/' + match.params.id, field: 'feria'})
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={'sub-page-ferias'}>
            <h1 className={'title'}>{'Aprovacao do RH'}</h1>
            <h3 style={{marginTop: '.6rem', marginBottom: '2rem'}}>Aprove ou desaprove a solicitacao de ferias feita pelo colaborador</h3>

            <LimitField>
                <Field name={'aprovadoPeloRhConcluido'} component={Select} label={'Status da aprovacao'} options={tiposStatusFerias} correcaoList/>
            </LimitField>

            <AlignRight style={{marginTop: '10rem'}}>
                <Buttom color={'blue'} label={'Salvar e avancar'} type={'submit'}/>
            </AlignRight>
        </form>
    );
};

ProcessoFeriasStep2 = reduxForm({form: 'processoFerias2', enableReinitialize: true})(ProcessoFeriasStep2);

const mapStateToProps = state => ({
    ferias: state.serverValues.feria,
    initialValues: {
        aprovadoPeloRhConcluido: state.serverValues.feria.aprovadoPeloRhConcluido,
    }
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('ferias', id, 'feria')),
    update: (value, redirect) => dispatch(updateAndRedirect('ferias', value, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcessoFeriasStep2);


const LimitField = styled.div`
max-width: 50rem;
margin-left: -1rem;
`;
