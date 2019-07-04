import React, {useEffect, useRef, useState} from 'react';
import CardSimples from "../../components/card/CardSimples";
import {reduxForm} from "redux-form";
import Buttom from "../../components/Buttom";
import {search, update} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import Checklist from "./Checklist";

let CadastroColaboradorStep4 = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'})
        setId(match.params.id)
        search(match.params.id)
    }, [])

    const submit = values => update({...values, id: match.params.id, cadastroConcluido: true, status: "ATIVO", ativo: true},
        {redirect: {route: `/colaboradores/cadastro-finalizado/${match.params.id}`}, field: 'colaborador'})

    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-2'}>Beneficios</div>
                <CardSimples>
                    {'Nao implementado ainda'}
                </CardSimples>
                <div className={'botoes-footer'}>
                    <Buttom color={'red'} label={'Excluir processo'}/>
                    <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}} type={'submit'}/>
                </div>
            </form>
            <Checklist id={match.params.id}/>
        </div>
    );
};

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {}
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
})

CadastroColaboradorStep4 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep4);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep4);
