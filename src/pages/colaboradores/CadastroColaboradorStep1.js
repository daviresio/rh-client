import React from 'react';
import {Field, reduxForm} from "redux-form";
import InputRow from "../../components/InputRow";
import SelectRow from "../../components/SelectRow";
import CardSimples from "../../components/CardSimples";
import UploadPhoto from "../../components/UploadPhoto";
import {connect} from "react-redux";
import {changeDropdownColaboradorValue} from "../../store/actions/colaboradorActions";

let CadastroColaboradorStep1 = props => {
    return (
            <div className={'page-divided'}>
                <form onSubmit={props.handleSubmit}>
                        <div className={'title-2'}>Informacoes Basicas</div>
                        <CardSimples>
                            <UploadPhoto label={'Foto do perfil'}/>
                            <Field component={InputRow} name={'nome'} label={'Nome completo'} value={''}/>
                            <Field component={InputRow} name={'email'} label={'Email'} value={''}/>
                            <Field component={SelectRow} name={'cargo'} label={'Cargo'} value={''} options={props.defaultValues.cargos} selecionou={(e) => {props.changeDropdownValue({target: 'cargo', value: e})}}
                                   detail={'Escolha o cargo do colaborador. Caso queira adicionar um cargo à lista ao lado, '}
                                   actionLabel={'Clique aqui'}/>
                            <Field component={SelectRow} name={'departamento'} label={'Departamento'} value={''} options={props.defaultValues.departamentos}
                                   detail={'Escolha o departamento do colaborador. Caso queira adicionar um departamento à lista ao lado, '}
                                   actionLabel={'Clique aqui'}/>
                            <Field component={SelectRow} name={'centroCusto'} label={'Centro de custo'} value={''}
                                   detail={'Escolha o centro de custo do colaborador. Caso queira adicionar um centro de custo à lista ao lado, '}
                                   actionLabel={'Clique aqui'}/>
                            <Field component={SelectRow} name={'supervisor'} label={'Supervisor'} value={''}
                                   detail={'Defina para quem este colaborador reportará. Este dado será utilizado, por exemplo, para aprovação de férias.'}/>
                            <Field component={InputRow} name={'matricula'} label={'Matricula'} value={''}/>
                            <Field component={SelectRow} name={'primeiroEmprego'} label={'Primeiro emprego'}
                                   value={''}/>
                            <Field component={InputRow} name={'dataExame'} label={'Data do exame admissional'}
                                   value={''}/>
                        </CardSimples>

                    <div className={'title-2'}>Salario</div>
                        <CardSimples>
                            <Field component={InputRow} name={'dataAdmissao'} label={'Data de admissao'} value={''}/>
                            <Field component={SelectRow} name={'vinculo'} label={'Vinculo'}
                                   value={''} detail={'Qual é o vínculo deste colaborador com a sua empresa? Este dado impactará no fechamento de folha e cálculo de férias'}/>
                            <Field component={SelectRow} name={'sindicato'} label={'Sindicato'}
                                   value={''} detail={'Qual é o sindicato que este colaborador será vinculado?'}/>
                            <Field component={SelectRow} name={'formaPagamento'} label={'Forma de pagamento'}
                                   value={''}/>
                            <Field component={InputRow} name={'salario'} label={'Salario'} value={''}/>
                        </CardSimples>

                        <div className={'title-2'}>Jornada de trabalho</div>
                        <CardSimples>
                            {'falta implementar'}
                        </CardSimples>


                        <div className={'title-2'}>Periodo de experiencia</div>
                        <CardSimples>
                            <Field component={SelectRow} name={'periodoExperiencia'} label={'Tipo de periodo de experiencia'} value={''}/>
                        </CardSimples>
                </form>
            </div>
    );
};
CadastroColaboradorStep1 = reduxForm({form: 'colaborador', destroyOnUnmount: false, forceUnregisterOnUnmount: false})(CadastroColaboradorStep1);

const mapStateToProps = state => state

export default connect(mapStateToProps)(CadastroColaboradorStep1);