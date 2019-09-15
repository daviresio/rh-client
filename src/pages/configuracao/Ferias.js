import React from 'react';
import CardBorda from "../../components/card/CardBorda";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import RadioButton from "../../components/form/RadioButton";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";

let Ferias = ({handleSubmit}) => {

    const submit = value => {
        console.log(value)
    };

    return (
        <CardBorda title={'Configuracao de ferias'} start>
            <h3 className={'subtitle'}>Arredondamento de ferias</h3>
            <h3 style={{fontWeight: 'lighter', margin: '1rem 0'}}>Caso o colaborador tenha o seu periodo aquisitivo alterado em funcao de ferias coletivas e saldo disponivel
                composto de meio dia,
                esta opcao permite que durante a visualizacao do saldo seja apresentado um valor arredondado
            </h3>

            <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                <Field name={'arredondarFerias'} component={RadioButton} label={'Sim'}/>
                <Field name={'arredondarFerias'} component={RadioButton} label={'Nao'}/>

                <AlignRight>
                    <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                </AlignRight>
            </form>
        </CardBorda>
    );
};

Ferias = reduxForm({form: 'arredondarFerias', enableReinitialize: true})(Ferias);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ferias);
