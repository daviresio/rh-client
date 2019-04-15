import React from 'react';
import CardSimples from "../../components/CardSimples";
import {reduxForm} from "redux-form";

let CadastroColaboradorStep4 = ({handleSubmit}) => {
    return (
        <div className={'page-divided'}>
            <form onSubmit={handleSubmit}>
                <div className={'title-2'}>Beneficios</div>
                <CardSimples>
                    {'Nao implementado ainda'}
                </CardSimples>
            </form>
        </div>
    );
};

CadastroColaboradorStep4 = reduxForm({form: 'colaborador', destroyOnUnmount: false, forceUnregisterOnUnmount: false})(CadastroColaboradorStep4);

export default CadastroColaboradorStep4;