import React, {useEffect} from 'react';
import CardSimples from "../../../components/card/CardSimples";
import {reduxForm} from "redux-form";
import Buttom from "../../../components/Buttom";
import {search, update} from "../../../store/actions/serverActions";
import {connect} from "react-redux";

let DesligamentoColaboradorStep2 = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        setId(match.params.id);
        search(match.params.id)
    }, []);


    const submit = v => {
    };

    return (
        <CardSimples className={'desligamento'} start>

            <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                <div className={'botoes-footer'}>
                    <Buttom color={'green'} label={'Continuar depois'}/>
                    <Buttom color={'blue'} label={'Avancar'} style={{marginRight: '2rem'}} type={'submit'}/>
                </div>
            </form>

        </CardSimples>
    );
};

DesligamentoColaboradorStep2 = reduxForm({form: 'desligarColaborador', enableReinitialize: true})(DesligamentoColaboradorStep2);

const mapStateToProps = state => ({
    router: state.router,
    initialValues: {}
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesligamentoColaboradorStep2)
