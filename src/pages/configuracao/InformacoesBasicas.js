import React, {useEffect} from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";
import Divided from "../../components/util/Divided";
import Sindicato from "./modais/Sindicato";
import {connect} from "react-redux";
import {changeModalVisible} from "../../store/actions/modalActions";
import {loadList, remove} from "../../store/actions/serverActions";
import Edit from "../../components/util/Edit";
import Configuracoes from "../../components/util/Configuracoes";

const InformacoesBasicas = props => {

    const {sindicatos} = props.serverValues
    const {openModal, loadData, remove} = props
    const {sindicato} = props.modal

    useEffect(() => {
        loadData('sindicatos')
    }, [])

    const renderSindicatos = () => sindicatos.length ?
        sindicatos.map((x, i) =>
            <div key={i} className={'sindicatos-list'}>
                <div className={'subgroup'}>
                    <div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Nome do sindicato'}</div>
                            <div className={'valor'}>{x.nome}</div>
                        </div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Site'}</div>
                            <div className={'valor'}>{x.site}</div>
                        </div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Telefone'}</div>
                            <div className={'valor'}>{x.telefone}</div>
                        </div>
                    </div>
                    <div>
                    <Edit onClick={() => openModal('sindicato', x)}/>
                    <Configuracoes />
                    </div>
                </div>
            </div>
        ) : null

    return (
        <>
            <Sindicato visible={sindicato.visible}/>
            <div className={'configuracao-informacoes-basicas page-divided'}>
                <CardSimples start>
                    <div className={'edit-logo'}>
                        <div className={'logo-image'}/>

                        <div className={'logo-button'}>
                            <Buttom color={'blue'} label={'Alterar logo'}/>
                            <span className={'info'}>{'Tipos de arquivos suportados: gif, jpg, jpeg, png'}</span>
                            <span className={'info'}>{'Tamanho maximo 2mb'}</span>
                        </div>
                    </div>
                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Dados da empresa'}</div>
                        <div className={'subgroup'}>
                            <div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Identificador'}</div>
                                    <div className={'valor'}>{'16979'}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Nome da empresa'}</div>
                                    <div className={'valor'}>{'Teste'}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Razao social'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'CNPJ'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Telefone'}</div>
                                    <div className={'valor'}>{'(62) 99838-7464'}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{''}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                            </div>
                            <Edit/>
                        </div>
                    </div>

                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Dados de cobranca'}</div>
                        <div className={'subgroup'}>
                            <div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Razao social'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'CNPJ'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'E-mail'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Endereco'}</div>
                                    <div className={'valor'}>{''}</div>
                                </div>
                            </div>
                            <Edit/>
                        </div>
                    </div>

                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Sindicatos'}</div>
                        {renderSindicatos()}
                        <Divided/>
                        <Buttom color={'green'} label={'Adicionar sindicato'} onClick={() => openModal('sindicato')}/>
                    </div>

                </CardSimples>

                <div className={'tornar-colaborador'}>
                    <div className={'title'}>{'Clique no botao abaixo caso queira se tornar colaborador desta empresa'}</div>
                    <Buttom color={'black'} full label={'Tornar colaborador'}/>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    openModal: (modal, value) => dispatch(changeModalVisible(modal, true, value)),
    loadData: entity => dispatch(loadList(entity)),
    remove: (entity, value) => dispatch(remove(entity, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(InformacoesBasicas);
