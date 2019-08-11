import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import CardBorda from "../../components/card/CardBorda";
import Edit from "../../components/util/Edit";
import UploadPhoto from "../../components/UploadPhoto";
import Divided from "../../components/util/Divided";
import {connect} from "react-redux";
import {remove, removeAndReload, search, update} from "../../store/actions/serverActions";
import {changeModalVisible} from "../../store/actions/modalActions";
import Salario from "../../modais/Salario";
import Banco from "../../modais/Banco";
import Documento from "../../modais/CopiaDocumento";
import HoleriteModal from "../../modais/HoleriteModal";
import SolicitarFerias from "../../modais/SolicitarFerias";
import ConfiguracaoFolha from "../../modais/ConfiguracaoFolha";
import ValoresRecorrentes from "../../modais/ValoresRecorrentes";
import TermosEContratos from "../../modais/TermosEContratos";
import FaltasEAfastamentos from "../../modais/FaltasEAfastamentos";
import {downloadFile, formateDate, formateDateFull, parseDate} from "../../util/metodosUteis";
import styled from "styled-components";
import ButtomAdicionar from "../../components/ButtomAdicionar";
import Delete from "../../components/util/Delete";
import Contato from "../../modais/Contato";
import Dependente from "../../modais/Dependente";
import Endereco from "../../modais/Endereco";
import Escolaridade from "../../modais/Escolaridade";
import ModalInformacoesGeraisColaborador from "../../modais/ModalInformacoesGeraisColaborador";
import ModalDocumentoColaborador from "../../modais/ModalDocumentoColaborador";
import ModalDadosPrincipaisColaborador from "../../modais/ModalDadosPrincipaisColaborador";

const VisualizarColaborador = ({serverValues, match, search, openModal, modal, removeAndReload, remove, update, ...props}) => {

    const {
        departamento, centroDeCusto, sindicato, banco, vinculo, formaPagamento, contatos, dependentes,
        endereco, periodoExperiencia, escolaridade, copiaDocumentos, ...colaborador
    } = serverValues.colaborador;
    const emptyValue = '-';

    useEffect(() => {
        if (match.params.id) search(match.params.id)
    }, []);

    const modalOptions = {
        data: {colaborador: match.params.id},
        reload: {entity: 'colaboradores', value: match.params.id, field: 'colaborador'}
    };

    return (
        <>
            <Contato visible={modal.contato.visible} {...modalOptions}/>
            <Dependente visible={modal.dependente.visible} {...modalOptions}/>
            <Endereco visible={modal.endereco.visible} {...modalOptions}/>
            <Escolaridade visible={modal.escolaridade.visible} {...modalOptions}/>
            <ModalInformacoesGeraisColaborador visible={modal.informacoesGeraisColaborador.visible} {...modalOptions}/>
            <ModalDocumentoColaborador visible={modal.documentoColaborador.visible} {...modalOptions}/>
            //TODO incluir departamento e centro de custo no valor que esta sendo passado e atualizar foto ao ser trocada
            <ModalDadosPrincipaisColaborador visible={modal.dadosPrincipaisColaborador.visible} {...modalOptions}/>
            <Salario visible={modal.salario.visible}/>
            <Banco visible={modal.banco.visible} {...modalOptions}/>
            <Documento visible={modal.copiaDocumento.visible} {...modalOptions}/>
            <HoleriteModal visible={modal.holerite.visible}/>
            <SolicitarFerias visible={modal.solicitarFerias.visible}/>
            <ConfiguracaoFolha visible={modal.configuracaoFolha.visible}/>
            <ValoresRecorrentes visible={modal.valoresRecorrentes.visible}/>
            <TermosEContratos visible={modal.termosEContratos.visible}/>
            <FaltasEAfastamentos visible={modal.faltasEAfastamentos.visible}/>
            <div className={'page-divided visualizar-colaborador'}>
                <div className={'principal'}>
                    <div className={'header'}>
                        <Buttom color={'green'} label={'Enviar ficha para contabilidade'}/>
                        {colaborador.status === "ATIVO" ?
                            <Buttom color={'red'} label={'Desligar colaborador'}
                                    onClick={() => update({...colaborador, status: "DESLIGAMENTO_PENDENTE"}, {redirect: {route: '/colaboradores'}, field: 'colaborador'})}/>
                            : <Buttom color={'blue'} label={'Reativar colaborador'}
                                      onClick={() => update({...colaborador, status: "ATIVO"}, {redirect: {route: '/colaboradores'}, field: 'colaborador'})}/>
                        }
                    </div>
                    <CardSimples start>
                        <Edit className={'editar'} onClick={() => openModal('dadosPrincipaisColaborador', colaborador)}/>
                        <div className={'informacoes-principais'}>
                            <div className={'foto'}>
                                <UploadPhoto image={colaborador.foto}/>
                                <div className={'exportar'}>
                                    <i className={`fas fa-edit`}/>
                                    <span>{'Exportar dados'}</span>
                                </div>
                            </div>
                            <div className={'dados'}>
                                <div className={'nome'}>{colaborador.nome}</div>
                                <div>
                                    <i className="fas fa-home"/>
                                    <span>Departamento:</span>
                                    <span
                                        className={'dados-valor'}>{departamento ? departamento.nome : emptyValue}</span>
                                </div>
                                <div>
                                    <i className="fas fa-home"/>
                                    <span>Centro de custo:</span>
                                    <span
                                        className={'dados-valor'}>{centroDeCusto ? centroDeCusto.nome : emptyValue}</span>
                                </div>
                                <div>
                                    <i className="fas fa-bookmark"/>
                                    <span>Gestor:</span>
                                    <span className={'dados-valor'}>{'-'}</span>
                                </div>
                            </div>
                        </div>

                        <Divided/>

                        <div className={'corpo'}>
                            <div className={'title-edit'}>
                                <div className={'title'}>Informacoes gerais</div>
                                <Edit onClick={() => openModal('informacoesGeraisColaborador', colaborador)}/>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome completo</div>
                                <div className={'valor'}>{colaborador.nome}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de admissao</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataAdmissao)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Email</div>
                                <div className={'valor'}>{colaborador.email}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Celular</div>
                                <div className={'valor'}>{colaborador.celular}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Telefone</div>
                                <div className={'valor'}>{colaborador.telefone}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nacionalidade</div>
                                <div className={'valor'}>{colaborador.nacionalidade}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Cor/Raca</div>
                                <div className={'valor'}>{colaborador.corRaca}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Natural do estado</div>
                                <div className={'valor'}>{colaborador.naturalEstado}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Natural da cidade</div>
                                <div className={'valor'}>{colaborador.naturalCidade}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Sexo</div>
                                <div className={'valor'}>{colaborador.sexo}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Vinculo</div>
                                <div className={'valor'}>{vinculo ? vinculo.nome : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Sindicato</div>
                                <div className={'valor'}>{sindicato ? sindicato.nome : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Forma de pagamento</div>
                                <div className={'valor'}>{formaPagamento ? formaPagamento.nome : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Matricula</div>
                                <div className={'valor'}>{colaborador.matricula}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Grupo de permissoes</div>
                                <div className={'valor'}>{'-'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Estado civil</div>
                                <div className={'valor'}>{colaborador.estadoCivil}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de nascimento</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataNascimento)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Primeiro emprego?</div>
                                <div className={'valor'}>{colaborador.primeiroEmprego ? 'Sim' : 'Nao'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Colaborador ja pagou contribuicao social no ano da admissao?
                                </div>
                                <div
                                    className={'valor'}>{colaborador.pagouContribSindicalAnoAdmissao ? 'Sim' : 'Nao'}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data do exame admissional</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataExameAdmissional)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome da mae</div>
                                <div className={'valor'}>{colaborador.nomeMae}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Nome do pai</div>
                                <div className={'valor'}>{colaborador.nomePai}</div>
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
                            <div className={'title-edit'}>
                                <div className={'title'}>Periodo de experiencia</div>
                                <Edit/>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Periodo de experiencia</div>
                                <div
                                    className={'valor'}>{periodoExperiencia ? periodoExperiencia.nome : emptyValue}</div>
                            </div>

                            <Divided/>
                            <div className={'title-edit'}>
                                <div className={'title'}>Endereco</div>
                                <Edit onClick={() => openModal('endereco', endereco)}/>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Cep</div>
                                <div className={'valor'}>{endereco ? endereco.cep : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Endereco</div>
                                <div className={'valor'}>{endereco ? endereco.endereco : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Numero</div>
                                <div className={'valor'}>{endereco ? endereco.numero : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Complemento</div>
                                <div className={'valor'}>{endereco ? endereco.complemento : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Bairro</div>
                                <div className={'valor'}>{endereco ? endereco.bairro : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Estado</div>
                                <div className={'valor'}>{endereco ? endereco.estado : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Cidade</div>
                                <div className={'valor'}>{endereco ? endereco.cidade : emptyValue}</div>
                            </div>


                            <Divided/>
                            <div className={'title-edit'}>
                                <div className={'title'}>Documentos pessoais</div>
                                <Edit onClick={() => openModal('documentoColaborador', colaborador)}/>
                            </div>

                            <div className={'conteudo'}>
                                <div className={'campo'}>CPF</div>
                                <div className={'valor'}>{colaborador.cpf}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>RG</div>
                                <div className={'valor'}>{colaborador.rg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de expedicao do RG</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataExpedicao)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Orgao emissor do RG</div>
                                <div className={'valor'}>{colaborador.orgaoEmissorRg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>UF emissor do RG</div>
                                <div className={'valor'}>{colaborador.ufEmissorRg}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>CNH</div>
                                <div className={'valor'}>{colaborador.cnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Categoria da CNH</div>
                                <div className={'valor'}>{colaborador.categoriaCnh}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de expedicao da CNH</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataExpedicaoCnh)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de validade da CNH</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataValidadeCnh)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Carteira de trabalho</div>
                                <div className={'valor'}>{colaborador.carteiraTrabalho}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>N de serie da CTPS</div>
                                <div className={'valor'}>{colaborador.nSerieCtps}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Data de emissao da CTPS</div>
                                <div className={'valor'}>{formateDateFull(colaborador.dataEmissaoCtps)}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>UF da CTPS</div>
                                <div className={'valor'}>{colaborador.ufCtps}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>PIS</div>
                                <div className={'valor'}>{colaborador.pis}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Titulo de eleitor</div>
                                <div className={'valor'}>{colaborador.tituloEleitor}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Zona eleitoral</div>
                                <div className={'valor'}>{colaborador.zonaEleitoral}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Secao eleitoral</div>
                                <div className={'valor'}>{colaborador.secaoEleitoral}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>E estrangeiro?</div>
                                <div className={'valor'}>{colaborador.estrangeiro}</div>
                            </div>

                            <Divided/>


                            <div className={'title'}>Contatos de emergencia</div>
                            {contatos && contatos.length > 0 && contatos.map((v, i) =>
                                <div
                                    className={i === 0 ? 'item-cadastro-colaborador remove-border' : 'item-cadastro-colaborador'}
                                    key={v.id}>
                                    <div className={'dados'}>
                                        <div className={'item'}>
                                            <span className={'key'}>Nome: </span> <span
                                            className={'value'}>{v.nome}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Email: </span> <span
                                            className={'value'}>{v.email}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Telefone: </span> <span
                                            className={'value'}>{v.telefone}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Celular: </span> <span
                                            className={'value'}>{v.celular}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Telefone trabalho: </span> <span
                                            className={'value'}>{v.telefoneTrabalho}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Relacao: </span> <span
                                            className={'value'}>{v.relacao}</span>
                                        </div>
                                    </div>
                                    <div className={'opcoes'}>
                                        <Edit onClick={() => openModal('contato', v)}/>
                                        <Delete onClick={() => removeAndReload('contatos', v.id, match.params.id)}/>
                                    </div>
                                </div>
                            )}
                            <CenterButton>
                                <ButtomAdicionar label={'Adicionar contato'} onClick={() => openModal('contato')}/>
                            </CenterButton>

                            <Divided/>

                            <div className={'title-edit'}>
                                <div className={'title'}>Formacao academica</div>
                                <Edit onClick={() => openModal('escolaridade', escolaridade)}/>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Escolaridade</div>
                                <div className={'valor'}>{escolaridade ? escolaridade.escolaridade : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Curso</div>
                                <div className={'valor'}>{escolaridade ? escolaridade.curso : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Instituicao</div>
                                <div className={'valor'}>{escolaridade ? escolaridade.instituicao : emptyValue}</div>
                            </div>
                            <div className={'conteudo'}>
                                <div className={'campo'}>Ano Conclusao</div>
                                <div className={'valor'}>{escolaridade ? escolaridade.anoConclusao : emptyValue}</div>
                            </div>
                            <Divided/>

                            <div className={'title'}>Beneficios</div>
                            <CenterButton>
                                <ButtomAdicionar label={'Adicionar beneficio'} onClick={() => openModal('')}/>
                            </CenterButton>
                            <Divided/>

                            <div className={'title'}>Atualizacao de vinculo e salario</div>
                            <CenterButton>
                                <ButtomAdicionar label={'Atualizar vinculo ou salario'} onClick={() => openModal('')}/>
                            </CenterButton>
                            <Divided/>


                            <div className={'title'}>Anotacoes gerais</div>
                            <CenterButton>
                                <ButtomAdicionar label={'Adicionar anotacao'} onClick={() => openModal('')}/>
                            </CenterButton>
                            <Divided/>


                            <div className={'title'}>Dependentes</div>
                            {dependentes && dependentes.length > 0 && dependentes.map((v, i) =>
                                <div
                                    className={i === 0 ? 'item-cadastro-colaborador remove-border' : 'item-cadastro-colaborador'}
                                    key={v.id}>
                                    <div className={'dados'}>
                                        <div className={'item'}>
                                            <span className={'key'}>Nome: </span> <span
                                            className={'value'}>{v.nome}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>E estrangeiro?: </span> <span
                                            className={'value'}>{v.estrangeiro ? 'Sim' : 'Nao'}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Data de Nascimento: </span> <span
                                            className={'value'}>{formateDate(parseDate(v.dataNascimento))}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Cpf: </span> <span
                                            className={'value'}>{v.cpf}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Nome da mae: </span> <span
                                            className={'value'}>{v.nomeMae}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Relacao: </span> <span
                                            className={'value'}>{v.relacao}</span>
                                        </div>
                                        <div className={'item'}>
                                            <span className={'key'}>Incluir para fins de imposto de renda: </span> <span
                                            className={'value'}>{v.incluirParaFinsDeImpostoRenda ? 'Sim' : 'Nao'}</span>
                                        </div>
                                    </div>
                                    <div className={'opcoes'}>
                                        <Edit onClick={() => openModal('dependente', v)}/>
                                        <Delete onClick={() => removeAndReload('dependentes', v.id, match.params.id)}/>
                                    </div>
                                </div>
                            )}
                            <CenterButton>
                                <ButtomAdicionar label={'Adicionar dependente'}
                                                 onClick={() => openModal('dependente')}/>
                            </CenterButton>

                        </div>
                    </CardSimples>
                </div>

                <div className={'secundario'} style={{marginTop: '6.5rem'}}>
                    <CardBorda icon={'money-bill-alt'} style={{marginTop: '0'}} title={'Salario'}
                               iconAction={'novo-edit'} onClick={() => openModal('salario')}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Salario</div>
                            <div className={'valor'}>{colaborador.salario}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'info'} title={'Informacoes bancarias'} iconAction={'edit'}
                               onClick={() => openModal('banco', banco ? banco : null)}>
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
                        <div className={'conteudo'}>
                            <div className={'campo'}>Comprovante</div>
                            <div className={'link'} style={{whiteSpace: 'nowrap', overflow: 'hidden'}}
                                 onClick={() => {
                                     if (banco && banco.comprovante) downloadFile(banco.comprovante)
                                 }}>{banco ? banco.comprovante : emptyValue}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'plane-departure'} title={'Ferias'} iconAction={'solicitar-ferias'}
                               onClick={() => openModal('solicitarFerias')}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Saldo de ferias</div>
                            <div className={'valor'}>{emptyValue}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Data de vencimento</div>
                            <div className={'valor'}>{emptyValue}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Proxima data de vencimento</div>
                            <div className={'valor'}>{emptyValue}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'info'} title={'Configuracoes de folha'} iconAction={'edit'}
                               onClick={() => openModal('configuracaoFolha')}>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Incluir no fechamento</div>
                            <div className={'valor'}>{emptyValue}</div>
                        </div>
                        <div className={'conteudo'}>
                            <div className={'campo'}>Isencao de INSS</div>
                            <div className={'valor'}>{emptyValue}</div>
                        </div>
                    </CardBorda>
                    <CardBorda icon={'sync'} title={'Valores recorrentes'} iconAction={'adicionar'}
                               onClick={() => openModal('valoresRecorrentes')}>

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Documentos'} iconAction={'adicionar'}
                               onClick={() => openModal('copiaDocumento')}>
                        {copiaDocumentos && copiaDocumentos.length > 0 ? copiaDocumentos.map(v =>
                                <div className={'copia-documento-item'} key={v.id}>
                                    <div className={'campo'}>{v.nome}</div>
                                    <div className={'link link-download'}
                                         onClick={() => {
                                             if (v.url) downloadFile(v.url)
                                         }}>{v.url ? v.url : emptyValue}</div>
                                    <Delete onClick={() => remove('copia-documentos', v.id, 'copiaDocumentos', {
                                        reload: {
                                            entity: 'colaboradores',
                                            value: match.params.id,
                                            field: 'colaborador'
                                        }
                                    })}/>
                                </div>
                            )
                            : <span>{'Nenhum documento vinculado'}</span>
                        }

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Holerites'} iconAction={'adicionar'}
                               onClick={() => openModal('holerite')}>

                    </CardBorda>
                    <CardBorda icon={'sticky-note'} title={'Termos e contratos'} iconAction={'adicionar'}
                               onClick={() => openModal('termosEContratos')}>
                        {'Nenhum termo ou contrato vinculado'}
                    </CardBorda>
                    <CardBorda icon={'exclamation-triangle'} title={'Faltas e afastamentos'} iconAction={'adicionar'}
                               onClick={() => openModal('faltasEAfastamentos')}>
                        {'Nenhuma falta ou afastamento encontrada'}
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
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('colaboradores', id, 'colaborador')),
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
    removeAndReload: (entity, value, idParent) => dispatch(removeAndReload(entity, value, {
        entity: 'colaboradores',
        value: idParent,
        field: 'colaborador'
    })),
    remove: (entity, value, target, options) => dispatch(remove(entity, value, target, options)),
    update: (value, redirect) => dispatch(update('colaboradores', value, redirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisualizarColaborador);

const CenterButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;
