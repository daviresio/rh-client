import React from 'react';
import CardBorda from "../../components/card/CardBorda";
import Divided from "../../components/util/Divided";
import Edit from "../../components/util/Edit";
import Delete from "../../components/util/Delete";
import TableManual from "../../components/table/TableManual";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import AlignRight from "../../components/util/AlignRight";
import Buttom from "../../components/Buttom";
import Checkbox from "../../components/form/Checkbox";

let AdmissaoDesligamento = ({handleSubmit}) => {

    const submit = value => {
        console.log(value)
    };

    return (
        <div className={'configuracao-admissao page-divided'}>
            <div>
                <CardBorda start title={'Campos personalizados'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Precisa de alguma informação dos seus colaboradores que não tem no sistema? Crie um campo personalizado e todos os colaboradores poderão preenchê-lo para você manter em seus registros.'}
                    </div>
                    <TableManual tableHeader={
                        <tr>
                            <th>Nome do campo</th>
                            <th>Passo</th>
                            <th>Tipo</th>
                            <th style={{width: '10rem'}}></th>
                        </tr>
                    }
                                 tableBody={
                                     <tr>
                                         <td>{}</td>
                                         <td>{}</td>
                                         <td>{}</td>
                                         <td>{}</td>
                                     </tr>
                                 }
                    />

                </CardBorda>
                <CardBorda start title={'E-mail de boas vindas'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Ao fazer um processo de admissão pelo Convenia, você pode escolher enviar um e-mail para que ele preencha as suas informações. Nesta área você pode personalizar o texto do e-mail.'}
                    </div>
                    <Divided/>
                    <div className={'text-email'}>
                        <span className={'negrito'}>Assunto:</span> Faça seu cadastro no RHConvenia<br/>

                        Olá |*nome*|, tudo bem?<br/>

                        Somos parceiros do RH da *|empresa|*, que está te convidando para acessar a plataforma
                        RHConvenia para você incluir os seus dados. É importante que você tenha seus documentos em mãos.<br/>

                        Este site será o seu canal com o RH, você conseguirá visualizar uma série de informações que são
                        importantes para você.<br/>

                        Clique nesse link e comece agora.<br/>

                        Dúvidas fale com o seu RH ou responda esse email, que te ajudaremos.<br/>

                        Abraços,<br/>

                        Equipe Convenia<br/>
                    </div>

                    <span className={'negrito'}><span
                        className={'clique-aqui'}>{'Clique aqui '}</span>{'para cadastrar um e-mail personalizado.'}</span>
                </CardBorda>
                <form onSubmit={handleSubmit(submit)}>
                    <CardBorda start title={'Campos obrigatorios de admissao'}>
                        <div className={'configuracao-admissao-subtitle'}>
                            {'Ao fazer um processo de admissão pelo Convenia, você pode escolher quais campos serão de preenchimento obrigatório pelo colaborador.'}
                        </div>
                        <Divided/>
                        <div className={'configuracao-admissao-title'}>{'Informacoes pessoais'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Data de Nascimento'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Nacionalidade'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Natural do estado'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Estado civil'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Nome da mae'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Nome do pai'}/>
                        <div className={'configuracao-admissao-title'}>{'Contatos e enderecos'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Telefone'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Celular'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'CEP'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Endereco'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Numero'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Bairro'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Estado'}/>
                        <div className={'configuracao-admissao-title'}>{'Formacao academica'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Escolaridade'}/>
                        <div className={'configuracao-admissao-title'}>{'Documentos'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'RG'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Data de expedicao do RG'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Orgao emissor do RG'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'UF emissor do RG'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Carteira de trabalho'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'N de serie da CTPS'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Data de emissao da CTPS'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'UF da CTPS'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'PIS'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Titulo eleitor'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Zona eleitoral'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Secao eleitoral'}/>
                        <div className={'configuracao-admissao-title'}>{'Dados bancarios'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Banco'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Agencia'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Conta'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Digito'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Comprovante'}/>
                        <AlignRight>
                            <Buttom color={'blue'} label={'Salvar'}/>
                        </AlignRight>
                    </CardBorda>

                    <CardBorda start title={'Documentos obrigatorios de admissao'}>
                        <div className={'configuracao-admissao-subtitle'}>
                            {'Ao fazer um processo de admissão pelo Convenia, você pode escolher quais documentos serão de envio obrigatório pelo colaborador.'}
                        </div>
                        <Divided/>
                        <div className={'configuracao-admissao-title'}>{'Documentos'}</div>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Carteira de trabalho'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Comprovante de residencia'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'CPF (frente)'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'CPF (verso)'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'RG (frente)'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'RG (verso)'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Titulo de eleitor (frente)'}/>
                        <Field name={'aaaaaa'} component={Checkbox} label={'Titulo de eleitor (verso)'}/>
                        <AlignRight>
                            <Buttom color={'blue'} label={'Salvar'}/>
                        </AlignRight>
                    </CardBorda>

                </form>
            </div>

            <div>
                <CardBorda start title={'Checklist (Admissao)'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Personalize o checklist de admissão da sua empresa.\n' +
                        'Estes itens aparecerão sempre você contratar um novo colaborador. '}
                    </div>
                    <Divided/>
                    <div className={'configuracao-admissao-item'}>
                        <span>{'Conferencia dos documentos'}</span>
                        <div className={'acoes'}>
                            <Edit/>
                            <div className={'margin'}>
                                <Delete/>
                            </div>
                        </div>
                    </div>
                    <Divided/>
                    <div className={'configuracao-admissao-item'}>
                        <span>{'Assinatura da carteira de trabalho'}</span>
                        <div className={'acoes'}>
                            <Edit/>
                            <div className={'margin'}>
                                <Delete/>
                            </div>
                        </div>
                    </div>
                </CardBorda>
                <CardBorda start title={'Checklist (Desligamento)'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Personalize o checklist de desligamento da sua empresa.\n' +
                        'Estes itens aparecerão sempre que um processo de desligamento for iniciado.'}
                    </div>
                    <Divided/>
                </CardBorda>
            </div>
        </div>
    );
};

AdmissaoDesligamento = reduxForm({form: 'admissaoDesligamento', enableReinitialize: true})(AdmissaoDesligamento);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdmissaoDesligamento);
