import React from 'react';
import CardBorda from "../../components/card/CardBorda";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import Modal from "../../components/Modal";
import DatePicker from "../../components/form/DatePicker";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";

let Checklist = ({handleSubmit, ...props}) => {

    const submit = value => {}
    return (
        <CardBorda title={'Checklist'} style={{marginTop: '7rem'}}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field component={Checkbox} name={'conferenciaDocumentos'} label={'Conferência dos documentos'} />
                    <Divided/>
                    <Field component={Checkbox} name={'assinaturaCarteiraDeTrabalho'} label={'Assinatura da carteira de trabalho'} />
                    <Divided/>
                    <Field component={Checkbox} name={'exameAdmissional'} label={'Exame admissional'} />
                    <Divided/>
                    <Field component={Checkbox} name={'criacaoContaEmail'} label={'Criação da conta de e-mail'} />
                    <Divided/>
                    <Field component={Checkbox} name={'configuracaoComputador'} label={'Configuração do computador'} />
                </form>
        </CardBorda>
    );
};

const mapStateToProps = state => ({
    initialValues: {}
})

const mapDispatchToProps = dispatch => ({

})

Checklist = reduxForm({form: 'checkListColaborador', enableReinitialize: true})(Checklist)

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);