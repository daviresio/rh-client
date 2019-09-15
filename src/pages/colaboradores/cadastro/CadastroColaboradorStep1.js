import React, {useEffect, useRef, useState} from 'react';
import {Field, formValueSelector, reduxForm} from "redux-form";
import InputRow from "../../../components/form/InputRow";
import SelectRow from "../../../components/form/SelectRow";
import CardSimples from "../../../components/card/CardSimples";
import UploadPhoto from "../../../components/UploadPhoto";
import {connect} from "react-redux";
import Message from "../../../components/util/Message";
import RadioButton from "../../../components/form/RadioButton";
import Buttom from "../../../components/Buttom";
import Input from "../../../components/form/Input";
import Table from "../../../components/table/Table";
import Select from "../../../components/form/Select";
import {loadList, save, search, update, uploadFile} from "../../../store/actions/serverActions";
import {openModalAndUpdateDropdown} from "../../../store/actions/modalActions";
import * as defaultValues from "../../../config/defaultValues";
import {MAX_IMAGE_SIZE} from "../../../config/defaultValues";
import DatePicker from "../../../components/form/DatePicker";
import Checklist from "./Checklist";
import {getValue} from "../../../util/metodosUteis";

let CadastroColaboradorStep1 = ({loadData, openModal, handleSubmit, save, update, uploadFile, ...props}) => {

    const [saveOnly, setSaveOnly] = useState(true);
    const [opcaoAvancada, setOpcaoAvancada] = useState(false);
    const [horarioPersonalizado, setHorarioPersonalizado] = useState(false);
    const {jornadaTrabalho, foto} = props.formValues;
    const {cargos, departamentos, centrodecustos, sindicatos, periodoExperiencias, vinculos, formaPagamentos} = props.serverValues;

    const buttonSubmit = useRef(null);

    const showButtonOpcoes = () => jornadaTrabalho === 2 ?
        <>
            <Buttom color={!opcaoAvancada ? 'blue' : 'gray'} onClick={() => setOpcaoAvancada(false)}
                    label={'Opcao simplificada'}/>
            <Buttom color={opcaoAvancada ? 'blue' : 'gray'} onClick={() => setOpcaoAvancada(true)}
                    label={'Opcao avancada'}/>
        </> : null;

    const showButtonHorarioPersonalizado = () => (jornadaTrabalho === 2 && opcaoAvancada) || jornadaTrabalho === 4 ?
        <Buttom color={'blue'} label={'Adicionar horario personalizado'}
                onClick={() => setHorarioPersonalizado(true)}/> : null;

    const showLabelHorarioPersonalizado = () => (jornadaTrabalho === 2 && opcaoAvancada) || jornadaTrabalho === 4 ?
        <p>* Antes de incluir um novo horário de trabalho, verifique se já não existe o mesmo cadastrado. </p> : null;

    const showTableJornadaSemanalSimplificada = () =>
        <Table header={['Dia de trabalho', 'Horario de trabalho']} keys={['dia', 'horario']} data={[
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
        ]}/>;

    const showTableJornadaSemanalAvancada = () =>
        <Table addAndRemove add={() => {
        }} remove={() => {
        }} header={['Dia de trabalho', 'Horario de trabalho']} keys={['dia', 'horario']} data={[
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
        ]}/>;

    const showHorarioPersonalizado = () => (jornadaTrabalho === 2 || jornadaTrabalho === 4) && horarioPersonalizado ?
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
                <Buttom color={'red'} label={'Cancelar'} onClick={() => setHorarioPersonalizado(false)}
                        style={{marginRight: '2rem'}}/>
                <Buttom color={'green'} label={'Salvar'}/>
            </div>
        </div> : null;

    const showInputsJornada = () => jornadaTrabalho !== 1 ?
        <>
            <Field name={'qtdMediaHorasSemanais'} label={'Qtde. média de horas semanais'} component={InputRow}
                   disabled/>
            {jornadaTrabalho !== "3" ?
                <Field name={'descricaoJornada'} label={'Descrição da jornada'} required component={InputRow}
                       detail={'Este dado será utilizado em suas minutas de documento.'}/> : null}
        </> : null;

    const prepareToUpload = event => {
        const type = event.target.files[0].type;
        const reader = new FileReader();
        reader.onload = e => {
            if (!e.target.result.includes('data:image/')) {
                return alert('Selecione um arquivo que seja uma imagem')
            }
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFile(e.target.result, type, {form: 'colaborador', campo: 'foto'}, foto)
        };
        reader.readAsDataURL(event.target.files[0])
    };

    useEffect(() => {
        props.dispatch({type: 'DELETAR_COLABORADOR'});
        const {match, setId, search} = props;
        const id = match.params.id;
        if (id) {
            setId(id);
            search(id)
        }
        loadData('cargos');
        loadData('departamentos');
        loadData('centrodecustos');
        loadData('sindicatos');
        loadData('jornadas-trabalho', 'jornadasTrabalho');
        loadData('periodo-experiencias', 'periodoExperiencias');
        loadData('vinculos');
        loadData('forma-pagamentos', 'formaPagamentos')

    }, []);

    const submit = values => {
            if(props.match.params.id) {
                saveOnly ? update(values, {redirect: {route: '/colaboradores'}, field: 'colaborador'}) :
                    update(values, {redirect: {route: '/colaboradores/cadastro/dados-pessoais/', id: true}, field: 'colaborador'})
            } else {
                saveOnly ? save(values, {redirect: {route: '/colaboradores'}, field: 'colaborador'}) :
                    save(values, {redirect: {route: '/colaboradores/cadastro/dados-pessoais/', id: true}, field: 'colaborador'})
            }
    };

    return (
        <>
            <div className={'page-divided colaboradores'}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={'title-big'}>Informacoes Basicas</div>
                    <CardSimples>
                        <UploadPhoto label={'Foto do perfil'} onChange={prepareToUpload} image={foto}/>
                        <Field component={InputRow} name={'nome'} label={'Nome completo'} required/>
                        <Field component={InputRow} name={'email'} label={'Email'}/>
                        <Field component={SelectRow} name={'cargo'} label={'Cargo'} options={cargos}
                               detail={'Escolha o cargo do colaborador. Caso queira adicionar um cargo à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('cargo', {form: 'colaborador', field: 'cargo'})}/>
                        <Field component={SelectRow} name={'departamento'} label={'Departamento'}
                               options={departamentos}
                               detail={'Escolha o departamento do colaborador. Caso queira adicionar um departamento à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('departamento', {form: 'colaborador', field: 'departamento'})}/>
                        <Field component={SelectRow} name={'centroDeCusto'} label={'Centro de custo'}
                               options={centrodecustos}
                               detail={'Escolha o centro de custo do colaborador. Caso queira adicionar um centro de custo à lista ao lado, '}
                               actionLabel={'Clique aqui'} action={() => openModal('centroDeCusto', {form: 'colaborador', field: 'centroDeCusto'})}/>
                        <Field component={SelectRow} name={'gestor'} label={'Gestor'}
                               detail={'Defina para quem este colaborador reportará. Este dado será utilizado, por exemplo, para aprovação de férias.'}/>
                        <Field component={InputRow} name={'matricula'} label={'Matricula'}/>
                        <Field component={SelectRow} name={'primeiroEmprego'} label={'Primeiro emprego'}
                               options={defaultValues.simNaoOptions} required/>
                        <Field component={SelectRow} name={'pagouContribSindicalAnoAdmissao'}
                               label={'Colaborador já pagou contribuição social no ano da admissão?'}
                               options={defaultValues.simNaoOptions}/>
                        <Field component={DatePicker} name={'dataExameAdmissional'} label={'Data do exame admissional'}
                        />
                    </CardSimples>

                    <div className={'title-big'}>Salario</div>
                    <CardSimples>
                        <Field component={DatePicker} name={'dataAdmissao'} label={'Data de admissao'} required/>
                        <Field component={SelectRow} name={'vinculo'} label={'Vinculo'} options={vinculos}
                               detail={'Qual é o vínculo deste colaborador com a sua empresa? Este dado impactará no fechamento de folha e cálculo de férias'}/>
                        <Field component={SelectRow} name={'sindicato'} label={'Sindicato'} options={sindicatos}
                               detail={'Qual é o sindicato que este colaborador será vinculado?'}/>
                        <Field component={SelectRow} name={'formaPagamento'} label={'Forma de pagamento'}
                               options={formaPagamentos}
                        />
                        <Field component={InputRow} name={'salario'} label={'Salario'}/>
                    </CardSimples>

                    <div className={'title-big'}>Periodo de experiencia</div>
                    <CardSimples>
                        <Field component={SelectRow} name={'periodoExperiencia'}
                               label={'Tipo de periodo de experiencia'} options={periodoExperiencias}/>
                        {/*
                        <Field component={InputRow} name={'primeiroFim'} label={'Primeiro fim'} required detail={'Se houver apenas um período, preencha apenas primeiro período'} />
                        <Field component={InputRow} name={'segundooFim'} label={'Segundo fim'} detail={'Se houverem dois períodos, preencha aqui o período final de experiência'} />
                        */}
                    </CardSimples>

                    <div className={'title-big'}>Jornada de trabalho</div>
                    <CardSimples start>
                        <div className={'title-2'}>{'Tipo'}</div>
                        <Field component={RadioButton} type={'radio'} value={1} normalize={v => Number(v)}
                               label={'Nenhuma'} name={"jornadaTrabalho"}/>
                        <Field component={RadioButton} type={'radio'} value={2} normalize={v => Number(v)}
                               label={'Jornada Semanal (segunda a domingo) com apenas um horário padrão por dia da semana e folga fixa'}
                               name={"jornadaTrabalho"}/>
                        <Field component={RadioButton} type={'radio'} value={3}
                               label={'Jornada 12 x 36 (12 horas de trabalho seguidas de 36 horas ininterruptas de descanso)'}
                               name={"jornadaTrabalho"} normalize={v => Number(v)}/>
                        <Field component={RadioButton} type={'radio'} value={4} normalize={v => Number(v)}
                               label={'Demais tipos de jornada (escala, turno de revezamento, permutas, horários rotativos, etc.)'}
                               name={"jornadaTrabalho"}/>

                        <div className={'jornada-semanal'}>
                            {(jornadaTrabalho !== 1 && jornadaTrabalho !== 3) &&
                            <>
                                <div className={'opcoes'}>
                                    {showButtonOpcoes()}
                                </div>
                                <div className={'title-2'}>{'Tabela de horarios'}</div>
                                <p>* Jornada diurna é aquela compreendida entre as 05:00 e as 22:00 horas </p>
                                {showLabelHorarioPersonalizado()}
                                <div className={'opcoes-2'}>
                                    <Buttom color={'blue'} style={{marginRight: '2rem'}}
                                            label={'Repetir o primeiro horario preenchido para todos os dias'}/>
                                    {showButtonHorarioPersonalizado()}
                                </div>
                                {showHorarioPersonalizado()}
                                {jornadaTrabalho === 2 && !opcaoAvancada ? showTableJornadaSemanalSimplificada()
                                    : (jornadaTrabalho === 2 && opcaoAvancada) || jornadaTrabalho === 4 ? showTableJornadaSemanalAvancada() : null}
                            </>
                            }
                            {showInputsJornada()}
                        </div>

                    </CardSimples>

                    <div className={'title-big'}>Termos e contratos</div>
                    <CardSimples>
                        <Message icon={null} color={'orange'}
                                 text={<span>caso queira adicionar um novo termo ou contrato <span className={'link'}>clique aqui</span></span>}/>
                    </CardSimples>

                    <div className={'title-big'}>Preenchimento pelo colaborador</div>
                    <CardSimples start>
                    <span className={'font-normal'}>
                        Economize seu tempo enviando o formulário de informações pessoais para o colaborador preencher. Ao selecionar a opção "Sim" abaixo, nós enviaremos para o
                        e-mail cadastrado acima um formulário para que ele mesmo preencha as suas informações. você será avisado quando ele concluir o preenchimento.
                        Essa opção poderá ser revertida a qualquer momento, caso queira.
                    </span>
                        <div className={'title-2'}>{'Preenchimento pelo colaborador'}</div>
                        <Field component={RadioButton} type={'radio'} value={true} normalize={v => v === 'true'}
                               label={'Sim, enviar formulário de informações pessoais para o colaborador '}
                               name={"preenchimentoPeloColaborador"}/>
                        <Field component={RadioButton} type={'radio'} value={false} normalize={v => v === 'true'}
                               label={'Não, eu vou inserir as informações pessoais manualmente. '}
                               name={"preenchimentoPeloColaborador"}/>
                    </CardSimples>
                    <div className={'botoes-footer'}>
                        <Buttom color={'red'} label={'Excluir processo'}/>
                        <div>
                            <Buttom color={'blue'} label={'Salvar'} style={{marginRight: '2rem'}} type={'submit'}
                                    ref={buttonSubmit}/>
                            <Buttom color={'green'} label={'Salvar e continuar'} onClick={() => {
                                new Promise((resolve => {
                                    setSaveOnly(false);
                                    setTimeout(() => resolve(), 500)
                                })).then(() => buttonSubmit.current.click())
                            }}/>
                        </div>
                    </div>
                </form>
                {props.match.params.id && <Checklist id={props.match.params.id}/>}
            </div>
        </>
    );
};
CadastroColaboradorStep1 = reduxForm({form: "colaborador", enableReinitialize: true})(CadastroColaboradorStep1);

const selector = formValueSelector('colaborador');

const mapStateToProps = state => {

    const {colaborador} = state.serverValues;

    return {
        initialValues: {
            id: colaborador.id,
            nome: colaborador.nome,
            email: colaborador.email,
            cargo: getValue('cargo.id', colaborador),
            departamento: getValue('departamento.id', colaborador),
            centroDeCusto: getValue('centroDeCusto.id', colaborador),
            gestor: colaborador.gestor,
            matricula: colaborador.matricula,
            primeiroEmprego: colaborador.primeiroEmprego,
            pagouContribSindicalAnoAdmissao: colaborador.pagouContribSindicalAnoAdmissao,
            dataExameAdmissional: colaborador.dataExameAdmissional,
            dataAdmissao: colaborador.dataAdmissao,
            vinculo: getValue('vinculo.id', colaborador),
            sindicato: getValue('sindicato.id', colaborador),
            formaPagamento: getValue('formaPagamento.id', colaborador),
            salario: colaborador.salario,
            periodoExperiencia: getValue('periodoExperiencia.id', colaborador) || 1,
            primeiroFim: colaborador.primeiroFim,
            segundoFim: colaborador.segundoFim,
            jornadaTrabalho: getValue('jornadaTrabalho.id', colaborador) || 1,
            preenchimentoPeloColaborador: colaborador.preenchimentoPeloColaborador || false,
            foto: colaborador.foto || null,
        }, formValues: selector(state, "jornadaTrabalho", "nome", "periodoExperiencia", "foto", "dataAdmissao"),
        serverValues: state.serverValues,
        modal: state.modal,
    }
};

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    openModal: (modal, updateDropdown) => dispatch(openModalAndUpdateDropdown(modal, updateDropdown)),
    save: (value, redirect) => dispatch(save('colaboradores', value, redirect)),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    uploadFile: (event, type, form, urlExistente) => dispatch(uploadFile(event, type, form, urlExistente)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CadastroColaboradorStep1);
