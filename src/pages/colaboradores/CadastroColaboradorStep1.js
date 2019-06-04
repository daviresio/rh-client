import React, {useEffect, useState} from 'react';
import {Field, reduxForm, formValueSelector} from "redux-form";
import InputRow from "../../components/form/InputRow";
import SelectRow from "../../components/form/SelectRow";
import CardSimples from "../../components/card/CardSimples";
import UploadPhoto from "../../components/UploadPhoto";
import {connect} from "react-redux";
import Message from "../../components/util/Message";
import RadioButton from "../../components/form/RadioButton";
import Buttom from "../../components/Buttom";
import Input from "../../components/form/Input";
import Table from "../../components/Table";
import Select from "../../components/form/Select";
import Cargo from "../configuracao/modais/Cargo";
import Departamento from "../configuracao/modais/Departamento";
import CentroDeCusto from "../configuracao/modais/CentroDeCusto";
import {loadList} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import * as defaultValues from "../../config/defaultValues";

let CadastroColaboradorStep1 = props => {
    const [opcaoAvancada, setOpcaoAvancada] = useState(false)
    const [horarioPersonalizado, sethorarioPersonalizado] = useState(false)
    const {tipoJornada} = props.formValues
    const {cargos, departamentos, centroDeCustos, sindicatos} = props.serverValues
    const {cargo, departamento, centroDeCusto} = props.modal
    const {loadData, openModal} = props
    console.log(props.formValues)

    const showButtonOpcoes = () => tipoJornada === "2" ?
        <>
            <Buttom color={!opcaoAvancada ? 'blue' : 'gray'} onClick={() => setOpcaoAvancada(false)} label={'Opcao simplificada'}/>
            <Buttom color={opcaoAvancada ? 'blue' : 'gray'} onClick={() => setOpcaoAvancada(true)} label={'Opcao avancada'}/>
        </> : null

    const showButtonHorarioPersonalizado = () => (tipoJornada === "2" && opcaoAvancada) || tipoJornada === "4" ?
        <Buttom color={'blue'} label={'Adicionar horario personalizado'} onClick={() => sethorarioPersonalizado(true)}/> : null

    const showLabelHorarioPersonalizado = () => (tipoJornada === "2" && opcaoAvancada) || tipoJornada === "4" ?
        <p>* Antes de incluir um novo horário de trabalho, verifique se já não existe o mesmo cadastrado. </p> : null

    const showTableJornadaSemanalSimplificada = () =>
        <Table header={['Dia de trabalho', 'Horario de trabalho']} data={[
            {
                dia: 'Segunda-feira',
                horario: <Select/>
            },
            {
                dia: 'Terca-feira',
                horario: <Select/>
            },
            {
                dia: 'Quarta-feira',
                horario: <Select/>
            },
            {
                dia: 'Quinta-feira',
                horario: <Select/>
            },
            {
                dia: 'Sexta-feira',
                horario: <Select/>
            },
            {
                dia: 'Sabado',
                horario: <Select/>
            },
            {
                dia: 'Domingo',
                horario: <Select/>
            },
        ]}/>

    const showTableJornadaSemanalAvancada = () =>
        <Table addAndRemove add={() => {
        }} remove={() => {
        }} header={['Dia de trabalho', 'Horario de trabalho']} data={[
            {
                dia: 'Segunda-feira',
                horario: <Select/>
            },
            {
                dia: 'Terca-feira',
                horario: <Select/>
            },
            {
                dia: 'Quarta-feira',
                horario: <Select/>
            },
            {
                dia: 'Quinta-feira',
                horario: <Select/>
            },
            {
                dia: 'Sexta-feira',
                horario: <Select/>
            },
            {
                dia: 'Sabado',
                horario: <Select/>
            },
            {
                dia: 'Domingo',
                horario: <Select/>
            },
        ]}/>

    const showHorarioPersonalizado = () => (tipoJornada === "2" || tipoJornada === "4") && horarioPersonalizado ?
        <div className={'horario-personalizado'}>
            <span> * Para jornadas que começam ou terminam à meia noite, deve-se lançár no formato 00:00. </span>
            <div className={'inputs'}>
                <Field name={'horarioEntrada'} label={'Horário de entrada'} component={Input}/>
                <Field name={'horarioSaida'} label={'Horário de saída'} component={Input}/>
                <Field name={'duracaoJornada'} disabled label={'Duração da jornada em minutos'} component={Input}/>
            </div>
            <div className={'inputs'}>
                <Field name={'inicioIntervalo'} label={'Início do intervalo'} component={Input}/>
                <Field name={'fimIntervalo'} label={'Fim do intervalo'} component={Input}/>
                <Field name={'duracaoIntervalo'} disabled label={'Duração do intervalo em minutos'} component={Input}/>
            </div>
            <div className={'botoes'}>
                <Buttom color={'red'} label={'Cancelar'} onClick={() => sethorarioPersonalizado(false)} style={{marginRight: '2rem'}}/>
                <Buttom color={'green'} label={'Salvar'}/>
            </div>
        </div> : null

    const showInputsJornada = () => tipoJornada !== "1" ?
        <>
            <Field name={'qtdMediaHorasSemanais'} label={'Qtde. média de horas semanais'} component={InputRow} disabled/>
            {tipoJornada !== "3" ? <Field name={'descricaoJornada'} label={'Descrição da jornada'} required component={InputRow}
                                          detail={'Este dado será utilizado em suas minutas de documento.'}/> : null}
        </> : null

    useEffect(() => {
        loadData('cargos')
        loadData('departamentos')
        loadData('centrodecustos')
        loadData('sindicatos')
    }, [])

    return (
        <>
            <Cargo visible={cargo.visible}/>
            <Departamento visible={departamento.visible}/>
            <CentroDeCusto visible={centroDeCusto.visible}/>

            <div className={'page-divided colaboradores'}>
                <form onSubmit={props.handleSubmit}>
                    <div className={'title-big'}>Informacoes Basicas</div>
                    <CardSimples>
                        <UploadPhoto label={'Foto do perfil'}/>
                        <Field component={InputRow} name={'nome'} label={'Nome completo'} required/>
                        {/*<button onClick={()=> props.change('nome','funcionou')}>teste</button>*/}
                        <Field component={InputRow} name={'email'} label={'Email'}/>
                        <Field component={SelectRow} name={'cargo'} label={'Cargo'} options={cargos} selecionou={e => {
                            props.changeDropdownValue({target: 'cargo', value: e})
                        }}
                               detail={'Escolha o cargo do colaborador. Caso queira adicionar um cargo à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('cargo')}/>
                        <Field component={SelectRow} name={'departamento'} label={'Departamento'} options={departamentos}
                               detail={'Escolha o departamento do colaborador. Caso queira adicionar um departamento à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('departamento')}/>
                        <Field component={SelectRow} name={'centroCusto'} label={'Centro de custo'} options={centroDeCustos}
                               detail={'Escolha o centro de custo do colaborador. Caso queira adicionar um centro de custo à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('centroDeCusto')}/>
                        <Field component={SelectRow} name={'gestor'} label={'Gestor'}
                               detail={'Defina para quem este colaborador reportará. Este dado será utilizado, por exemplo, para aprovação de férias.'}/>
                        <Field component={InputRow} name={'matricula'} label={'Matricula'}/>
                        <Field component={SelectRow} name={'primeiroEmprego'} label={'Primeiro emprego'}
                               options={defaultValues.simNaoOptions} required/>
                        <Field component={SelectRow} name={'jaPagouContribSindical'} label={'Colaborador já pagou contribuição social no ano da admissão?'}
                               options={defaultValues.simNaoOptions}/>
                        <Field component={InputRow} name={'dataExame'} label={'Data do exame admissional'}
                        />
                    </CardSimples>

                    <div className={'title-big'}>Salario</div>
                    <CardSimples>
                        <Field component={InputRow} name={'dataAdmissao'} label={'Data de admissao'} required/>
                        <Field component={SelectRow} name={'vinculo'} label={'Vinculo'} options={defaultValues.vinculoColaborador}
                               detail={'Qual é o vínculo deste colaborador com a sua empresa? Este dado impactará no fechamento de folha e cálculo de férias'}/>
                        <Field component={SelectRow} name={'sindicato'} label={'Sindicato'} options={sindicatos}
                               detail={'Qual é o sindicato que este colaborador será vinculado?'}/>
                        <Field component={SelectRow} name={'formaPagamento'} label={'Forma de pagamento'} options={defaultValues.formaPagamentoColaborador}
                        />
                        <Field component={InputRow} name={'salario'} label={'Salario'}/>
                    </CardSimples>

                    <div className={'title-big'}>Periodo de experiencia</div>
                    <CardSimples>
                        <Field component={SelectRow} name={'periodoExperiencia'} label={'Tipo de periodo de experiencia'} options={defaultValues.tipoPeriodoExperiencia}/>
                        {/*
                        <Field component={InputRow} name={'primeiroFim'} label={'Primeiro fim'} required detail={'Se houver apenas um período, preencha apenas primeiro período'} />
                        <Field component={InputRow} name={'segundooFim'} label={'Segundo fim'} detail={'Se houverem dois períodos, preencha aqui o período final de experiência'} />
                        */}
                    </CardSimples>

                    <div className={'title-big'}>Jornada de trabalho</div>
                    <CardSimples start>
                        <div className={'title-2'}>{'Tipo'}</div>
                        <Field component={RadioButton} type={'radio'} value={"1"} label={'Nenhuma'} name={"tipoJornada"}/>
                        <Field component={RadioButton} type={'radio'} value={"2"}
                               label={'Jornada Semanal (segunda a domingo) com apenas um horário padrão por dia da semana e folga fixa'}
                               name={"tipoJornada"}/>
                        <Field component={RadioButton} type={'radio'} value={"3"} label={'Jornada 12 x 36 (12 horas de trabalho seguidas de 36 horas ininterruptas de descanso)'}
                               name={"tipoJornada"}/>
                        <Field component={RadioButton} type={'radio'} value={"4"}
                               label={'Demais tipos de jornada (escala, turno de revezamento, permutas, horários rotativos, etc.)'}
                               name={"tipoJornada"}/>

                        <div className={'jornada-semanal'}>
                            {(tipoJornada !== "1" && tipoJornada !== "3") &&
                            <>
                                <div className={'opcoes'}>
                                    {showButtonOpcoes()}
                                </div>
                                <div className={'title-2'}>{'Tabela de horarios'}</div>
                                <p>* Jornada diurna é aquela compreendida entre as 05:00 e as 22:00 horas </p>
                                {showLabelHorarioPersonalizado()}
                                <div className={'opcoes-2'}>
                                    <Buttom color={'blue'} style={{marginRight: '2rem'}} label={'Repetir o primeiro horario preenchido para todos os dias'}/>
                                    {showButtonHorarioPersonalizado()}
                                </div>
                                {showHorarioPersonalizado()}
                                {tipoJornada === "2" && !opcaoAvancada ? showTableJornadaSemanalSimplificada()
                                    : (tipoJornada === "2" && opcaoAvancada) || tipoJornada === "4" ? showTableJornadaSemanalAvancada() : null}
                            </>
                            }
                            {showInputsJornada()}
                        </div>

                    </CardSimples>

                    <div className={'title-big'}>Termos e contratos</div>
                    <CardSimples>
                        <Message icon={null} color={'orange'} text={<span>caso queira adicionar um novo termo ou contrato <span className={'link'}>clique aqui</span></span>}/>
                    </CardSimples>

                    <div className={'title-big'}>Preenchimento pelo colaborador</div>
                    <CardSimples start>
                    <span className={'font-normal'}>
                        Economize seu tempo enviando o formulário de informações pessoais para o colaborador preencher. Ao selecionar a opção "Sim" abaixo, nós enviaremos para o
                        e-mail cadastrado acima um formulário para que ele mesmo preencha as suas informações. você será avisado quando ele concluir o preenchimento.
                        Essa opção poderá ser revertida a qualquer momento, caso queira.
                    </span>
                        <div className={'title-2'}>{'Preenchimento pelo colaborador'}</div>
                        <Field component={RadioButton} type={'radio'} value={"true"} label={'Sim, enviar formulário de informações pessoais para o colaborador '}
                               name={"preenchimentoPeloColaborador"}/>
                        <Field component={RadioButton} type={'radio'} value={"false"} label={'Não, eu vou inserir as informações pessoais manualmente. '}
                               name={"preenchimentoPeloColaborador"}/>
                    </CardSimples>
                    <div className={'botoes-footer'}>
                        <Buttom color={'red'} label={'Excluir processo'}/>
                        <div>
                            <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}}/>
                            <Buttom color={'green'} label={'Salvar e continuar'}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
CadastroColaboradorStep1 = reduxForm({form: "colaborador"})(CadastroColaboradorStep1);

const selector = formValueSelector('colaborador')

const mapStateToProps = state => ({
    initialValues: {
        tipoJornada: '1',
        preenchimentoPeloColaborador: "false",
        periodoExperiencia: 1,
    }, formValues: selector(state, "tipoJornada", "nome", "periodoExperiencia", "cargo"),
    serverValues: state.serverValues,
    modal: state.modal,

})

const mapDispatchToProps = dispatch => ({
    loadData: entity => dispatch(loadList(entity)),
    openModal: modal => dispatch(changeModalVisible(modal, true)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep1);
