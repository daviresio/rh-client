import React, {useEffect} from 'react';
import PageEmpty from "../../layout/PageEmpty";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import CardBorda from "../../components/card/CardBorda";
import Edit from "../../components/util/Edit";
import UploadPhoto from "../../components/UploadPhoto";
import Divided from "../../components/util/Divided";
import {connect} from "react-redux";
import {search} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import Salario from "../../modais/Salario";
import Banco from "../../modais/Banco";
import Documento from "../../modais/Documento";
import Holerite from "../../modais/Holerite";

const VizualizarColaborador = ({serverValues, match, search, openModal, modal, ...props}) => {
    const value = serverValues.colaborador
    const {departamento, centroDeCusto, sindicato, banco} = value
    const emptyValue = '-'

    useEffect(() => {
        search(match.params.id)
    }, [])
    return (
        <>
            <Salario visible={modal.salario.visible}/>
            <Banco visible={modal.banco.visible}/>
            <Documento visible={modal.documento.visible}/>
            <Holerite visible={modal.holerite.visible}/>
            <div className={'page-divided visualizar-colaborador'}>
                <div className={'principal'}>
                    <div className={'header'}>
                        <Buttom color={'green'} label={'Enviar ficha para contabilidade'}/>
                        <Buttom color={'red'} label={'Desligar colaborador'}/>
                    </div>
                    <CardSimples start>
                        <Edit className={'editar'}/>
                        <div className={'informacoes-principais'}>
                            <div className={'foto'}>
                                <UploadPhoto/>
                                <div className={'exportar'}>
                                    <i className={`fas fa-edit`}/>
                                    <span>{'Exportar dados'}</span>
                                </div>
                            </div>
                            <div className={'dados'}>
                                <div className={'nome'}>{value.nome}</div>
                                <div>
                                    <i className="fas fa-home"/>
                                    <span>Departamento:</span>
                                    <span>{departamento ? departamento.nome : emptyValue}</span>
                                </div>
                                <div>
                                    <i className="fas fa-home"/>
                                    <span>Centro de custo:</span>
                                    <span>{centroDeCusto ? centroDeCusto.nome : emptyValue}</span>
                                </div>
                                <div>
                                    <i className="fas fa-bookmark"/>
                                    <span>Gestor:</span>
                                    <span>{'-'}</span>
                                </div>
                            </div>
                        </div>

                        <Divided/>

                        <div className={'corpo'}>
                            <div className={'title'}>Informacoes gerais</div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome completo</div>
                                <div className={'valor'}>{value.nome}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de admissao</div>
                                <div className={'valor'}>{value.dataAdmissao}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Email</div>
                                <div className={'valor'}>{value.email}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Celular</div>
                                <div className={'valor'}>{value.celular}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Telefone</div>
                                <div className={'valor'}>{value.telefone}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nacionalidade</div>
                                <div className={'valor'}>{value.nacionalidade}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Cor/Raca</div>
                                <div className={'valor'}>{value.corRaca}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Natural do estado</div>
                                <div className={'valor'}>{value.naturalEstado}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Natural da cidade</div>
                                <div className={'valor'}>{value.naturalCidade}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Sexo</div>
                                <div className={'valor'}>{value.sexo}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Vinculo</div>
                                <div className={'valor'}>{value.vinculo}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Sindicato</div>
                                <div className={'valor'}>{sindicato ? sindicato.nome : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Forma de pagamento</div>
                                <div className={'valor'}>{value.formaPagamento}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Matricula</div>
                                <div className={'valor'}>{value.matricula}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Grupo de permissoes</div>
                                <div className={'valor'}>{'-'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Estado civil</div>
                                <div className={'valor'}>{value.estadoCivil}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de nascimento</div>
                                <div className={'valor'}>{value.dataNascimento}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Primeiro emprego?</div>
                                <div className={'valor'}>{value.primeiroEmprego ? 'Sim' : 'Nao'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Colaborador ja pagou contribuicao social no ano da admissao?
                                </div>
                                <div className={'valor'}>{value.pagouContribSindicalAnoAdmissao ? 'Sim' : 'Nao'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data do exame admissional</div>
                                <div className={'valor'}>{value.dataExameAdmissional}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome da mae</div>
                                <div className={'valor'}>{value.nomeMae}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome do pai</div>
                                <div className={'valor'}>{value.nomePai}</div>
                            </div>

                            <Divided/>
                            <div className={'title-edit'}>
                                <div className={'title'}>Jornada de trabalho</div>
                                <Edit/>
                            </div>

                            <div className={'conteudo'}>
                                <div className={'campo'}>Descricao</div>
                                <div className={'valor'}>{'Nenhuma'}</div>
                            </div>

                            <Divided/>

                            <div className={'title'}>Periodo de experiencia</div>
                            <Buttom color={'green'} label={'Adicionar periodo'}/>

                            <Divided/>

                            <div className={'title'}>Enderecos</div>
                            <Buttom color={'green'} label={'Adicionar endereco'}/>

                            <Divided/>
                            <div className={'title-edit'}>
                                <div className={'title'}>Documentos pessoais</div>
                                <Edit/>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>CPF</div>
                                <div className={'valor'}>{value.cpf}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>RG</div>
                                <div className={'valor'}>{value.rg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de expedicao do RG</div>
                                <div className={'valor'}>{value.dataExpedicao}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Orgao emissor do RG</div>
                                <div className={'valor'}>{value.orgaoEmissorRg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>UF emissor do RG</div>
                                <div className={'valor'}>{value.ufEmissorRg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>CNH</div>
                                <div className={'valor'}>{value.cnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Categoria da CNH</div>
                                <div className={'valor'}>{value.categoriaCnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de expedicao da CNH</div>
                                <div className={'valor'}>{value.dataExpedicaoCnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de validade da CNH</div>
                                <div className={'valor'}>{value.dataValidadeCnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Carteira de trabalho</div>
                                <div className={'valor'}>{value.carteiraTrabalho}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>N de serie da CTPS</div>
                                <div className={'valor'}>{value.nSerieCtps}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de emissao da CTPS</div>
                                <div className={'valor'}>{value.dataEmissaoCtps}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>UF da CTPS</div>
                                <div className={'valor'}>{value.ufCtps}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>PIS</div>
                                <div className={'valor'}>{value.pis}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Titulo de eleitor</div>
                                <div className={'valor'}>{value.tituloEleitor}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Zona eleitoral</div>
                                <div className={'valor'}>{value.zonaEleitoral}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Secao eleitoral</div>
                                <div className={'valor'}>{value.secaoEleitoral}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>E estrangeiro?</div>
                                <div className={'valor'}>{value.estrangeiro}</div>
                            </div>

                            <Divided/>


                            <div className={'title'}>Informacoes de emergencia</div>
                            <Buttom color={'green'} label={'Adicionar contato'}/>

                            <Divided/>

                            <div className={'title'}>Formacao academica</div>
                            <Buttom color={'green'} label={'Adicionar formacao'}/>

                            <Divided/>

                            <div className={'title'}>Beneficios</div>
                            <Buttom color={'green'} label={'Adicionar beneficio'}/>

                            <Divided/>

                            <div className={'title'}>Atualizacao de vinculo e salario</div>
                            <Buttom color={'green'} label={'Atualizar vinculo ou salario'}/>

                            <Divided/>


                            <div className={'title'}>Anotacoes gerais</div>
                            <Buttom color={'green'} label={'Adicionar anotacao'}/>

                            <Divided/>


                            <div className={'title'}>Dependentes</div>
                            <Buttom color={'green'} label={'Adicionar dependente'}/>

                            <Divided/>

                        </div>
                    </CardSimples>
                </div>

                <div className={'secundario'}>
                    <CardBorda icon={'money-bill-alt'} style={{marginTop: '0'}} title={'Salario'}
                               iconAction={'novo-edit'} onClick={() => openModal('salario')}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Salario</div>
                            <div className={'valor'}>{value.salario}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'info'} title={'Informacoes bancarias'} iconAction={'edit'}
                               onClick={() => openModal('banco')}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Banco</div>
                            <div className={'valor'}>{banco ? banco.banco : emptyValue}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Agencia</div>
                            <div className={'valor'}>{banco ? banco.agencia : emptyValue}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Conta</div>
                            <div className={'valor'}>{banco ? banco.conta : emptyValue}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'plane-departure'} title={'Ferias'} iconAction={'solicitar-ferias'}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Saldo de ferias</div>
                            <div className={'valor'}>{''}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Data de vencimento</div>
                            <div className={'valor'}>{''}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Proxima data de vencimento</div>
                            <div className={'valor'}>{''}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'info'} title={'Configuracoes de folha'} iconAction={'edit'}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Incluir no fechamento</div>
                            <div className={'valor'}>{''}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Isencao de INSS</div>
                            <div className={'valor'}>{''}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'sync'} title={'Valores recorrentes'} iconAction={'adicionar'}>

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Documentos'} iconAction={'adicionar'}
                               onClick={() => openModal('documento')}>

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Holerites'} iconAction={'adicionar'}
                               onClick={() => openModal('holerite')}>

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Termos e contratos'} iconAction={'adicionar'}>

                    </CardBorda>
                    <CardBorda icon={'exclamation-triangle'} title={'Faltas e afastamentos'} iconAction={'adicionar'}>

                    </CardBorda>

                    <Buttom color={'gray'} label={'Historico de alteracoes'} full className={'margin-btn'}/>
                    <Buttom color={'green'} label={'Enviar opcao para alterar senha para colaborador'} full
                            className={'margin-btn'}/>
                    <span>Ao clicar nessa botao, o colaborador recebera um email para criar uma nova senha e acessar a plataforma</span>
                    <Buttom color={'green'} label={'Enviar login no rhConvenia para colaborador'} full
                            className={'margin-btn'}/>
                    <span>Ao clicar neste botão, o colaborador receberá no e-mail dele um convite para entrar no rhConvenia com login e senha próprios para visualizar apenas as informações dele.</span>
                    <Buttom color={'red'} label={'Excluir colaborador'} full className={'margin-btn'}/>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    serverValues: state.serverValues,
    modal: state.modal
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VizualizarColaborador);
