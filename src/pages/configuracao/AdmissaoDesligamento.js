import React from 'react';
import CardBorda from "../../components/card/CardBorda";
import Divided from "../../components/util/Divided";
import Checkbox from "../../components/form/Checkbox";
import Edit from "../../components/util/Edit";
import Delete from "../../components/util/Delete";

const AdmissaoDesligamento = () => {
    return (
        <div className={'configuracao-admissao page-divided'}>
            <div>
                <CardBorda start title={'Campos personalizados'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Precisa de alguma informação dos seus colaboradores que não tem no sistema? Crie um campo personalizado e todos os colaboradores poderão preenchê-lo para você manter em seus registros.'}
                    </div>
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
                <CardBorda start title={'Campos obrigatorios de admissao'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Ao fazer um processo de admissão pelo Convenia, você pode escolher quais campos serão de preenchimento obrigatório pelo colaborador.'}
                    </div>
                    <Divided/>
                    <div className={'configuracao-admissao-title'}>{'Informacoes pessoais'}</div>
                    <Checkbox label={'item one'}/>
                    <div className={'configuracao-admissao-title'}>{'Contatos e enderecos'}</div>
                    <div className={'configuracao-admissao-title'}>{'Formacao academica'}</div>
                    <div className={'configuracao-admissao-title'}>{'Documentos'}</div>
                    <div className={'configuracao-admissao-title'}>{'Dados bancarios'}</div>
                </CardBorda>
                <CardBorda start title={'Documentos obrigatorios de admissao'}>
                    <div className={'configuracao-admissao-subtitle'}>
                        {'Ao fazer um processo de admissão pelo Convenia, você pode escolher quais documentos serão de envio obrigatório pelo colaborador.'}
                    </div>
                    <Divided/>
                    <div className={'configuracao-admissao-title'}>{'Documentos'}</div>
                </CardBorda>
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

export default AdmissaoDesligamento;
