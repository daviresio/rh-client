import React from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {reduxForm} from "redux-form";
import {search, update} from "../../store/actions/serverActions";
import {connect} from "react-redux";

let MuralCadastro = ({handleSubmit, match, router, setId, search, update, ...props}) => {

    const submit = values => {}

    return (
        <div className={'mural-cadastro'}>
            <div className={'title'}>{'Criar recado'}</div>
            <Buttom color={'gray'} label={'Criar recado'}/>
            <CardSimples>
                <form onSubmit={handleSubmit(submit)}>

                </form>
            </CardSimples>
        </div>
    );
};

MuralCadastro = reduxForm({form: 'recado', enableReinitialize: true})(MuralCadastro);

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect))
})

export default connect(mapStateToProps, mapDispatchToProps)(MuralCadastro);
