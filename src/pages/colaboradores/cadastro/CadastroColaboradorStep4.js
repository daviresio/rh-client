import React, {useEffect} from 'react';
import CardSimples from "../../../components/card/CardSimples";
import {reduxForm} from "redux-form";
import Buttom from "../../../components/Buttom";
import {search, update} from "../../../store/actions/serverActions";
import {connect} from "react-redux";
import Checklist from "./Checklist";
import Message from "../../../components/util/Message";
import Edit from "../../../components/util/Edit";
import {openModalAndReloadOtherEntity} from "../../../store/actions/modalActions";

let CadastroColaboradorStep4 = ({handleSubmit, match, router, setId, search, update, beneficios, colaborador, openModalAndReload, ...props}) => {

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        setId(match.params.id);
        search(match.params.id)
    }, []);

    const modalData = {colaborador: match.params.id}

    const submit = values => update({...values, id: match.params.id, cadastroConcluido: true, status: "ATIVO", ativo: true},
        {redirect: {route: `/colaboradores/cadastro-finalizado/${match.params.id}`}, field: 'colaborador'});

    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'title-2'}>Beneficios</div>
                <CardSimples start>
                    {colaborador && colaborador.beneficios && colaborador.beneficios.map((v, i) =>
                        <div className={i === 0 ? 'item-cadastro-colaborador remove-border' : 'item-cadastro-colaborador'}
                        key={v.id}>
                        <div className={'dados'}>
                            <div className={'item'}>
                                <span className={'key'}>Categoria: </span> <span
                                className={'value'}>{v.categoria}</span>
                            </div>
                            <div className={'item'}>
                                <span className={'key'}>Nome: </span> <span
                                className={'value'}>{v.nome}</span>
                            </div>
                            <div className={'item'}>
                                <span className={'key'}>Colaborador: </span> <span
                                className={'value'}>{v.ColaboradorBeneficio.custoColaborador}</span>
                            </div>
                            <div className={'item'}>
                                <span className={'key'}>Empresa: </span> <span
                                className={'value'}>{v.ColaboradorBeneficio.custoEmpresa}</span>
                            </div>
                        </div>
                        <div className={'opcoes'}>
                            <Edit onClick={() => openModalAndReload('beneficio', v, match.params.id, modalData)}/>
                        </div>
                    </div>)}
                    {beneficios && beneficios.length > 0 ?
                        <Buttom style={{marginTop: '2rem'}} color={'green'} label={'Adiciona beneficio'} onClick={() => openModalAndReload('beneficio', null, match.params.id, modalData)}/>
                        : <Message color={'orange'} text={'Voce nao tem nenhum beneficio cadastrado, apos cadastrar podera adiciona-lo ao colaborador'} /> }
                </CardSimples>
                <div className={'botoes-footer'}>
                    <Buttom color={'red'} label={'Excluir processo'}/>
                    <Buttom color={'blue'} label={'Concluir processo'} style={{marginRight: '2rem'}} type={'submit'}/>
                </div>
            </form>
            <Checklist id={match.params.id}/>
        </div>
    );
};

const mapStateToProps = state => ({
    router: state.router,
    colaborador: state.serverValues.colaborador,
    beneficios: state.serverValues.beneficios,
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
    openModalAndReload: (modal, value, idReload, data) => dispatch(openModalAndReloadOtherEntity(modal, value, idReload, data)),
});

CadastroColaboradorStep4 = reduxForm({form: 'colaborador', enableReinitialize: true})(CadastroColaboradorStep4);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep4);
